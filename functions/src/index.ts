import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import axios from 'axios'

admin.initializeApp(functions.config().firebase)

const createUser = `
mutation createUser($uid: String!, $displayId: String!, $displayName: String!, $photoUrl: String = "", $email: String!) {
  insert_user_one(object: {uid: $uid, displayId: $displayId, displayName: $displayName, photoUrl: $photoUrl, email: $email}, on_conflict: {constraint: user_uid_key, update_columns: []}) {
    uid
    displayId
    displayName
    photoUrl
    email
  }
}
`

exports.processSignUp = functions
  .region(`asia-northeast1`)
  .auth.user()
  .onCreate((user: any) => {
    const customClaims = {
      'https://hasura.io/jwt/claims': {
        'x-hasura-default-role': `user`,
        'x-hasura-allowed-roles': [`user`],
        'x-hasura-user-id': user.uid,
      },
    }

    return admin
      .auth()
      .setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        const queryString = {
          query: createUser,
          variables: {
            uid: user.uid,
            displayId: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
          },
        }

        axios({
          method: `post`,
          url: functions.config().hasura.url,
          data: queryString,
          headers: {
            'x-hasura-admin-secret': functions.config().hasura.admin_secret,
          },
        })

        admin.firestore().collection(`user_meta`).doc(user.uid).create({
          refreshTime: admin.firestore.FieldValue.serverTimestamp(),
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  })

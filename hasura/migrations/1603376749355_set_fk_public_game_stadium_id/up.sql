alter table "public"."game"
           add constraint "game_stadium_id_fkey"
           foreign key ("stadium_id")
           references "public"."stadium"
           ("id") on update restrict on delete restrict;

alter table "public"."game"
           add constraint "game_competition_id_fkey"
           foreign key ("competition_id")
           references "public"."competition"
           ("id") on update restrict on delete restrict;

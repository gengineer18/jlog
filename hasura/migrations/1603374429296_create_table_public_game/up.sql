CREATE TABLE "public"."game"("id" serial NOT NULL, "season" text NOT NULL, "round" text NOT NULL, "date_unix" integer NOT NULL, "competition_id" Integer NOT NULL, "stadium_id" text NOT NULL, "home_id" integer NOT NULL, "home_score" integer NOT NULL, "away_id" integer NOT NULL, "away_score" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_game_updated_at"
BEFORE UPDATE ON "public"."game"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_game_updated_at" ON "public"."game"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

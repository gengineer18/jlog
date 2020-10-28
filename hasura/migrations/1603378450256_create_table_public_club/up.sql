CREATE TABLE "public"."club"("id" integer NOT NULL, "name" text NOT NULL, "name_en" text NOT NULL, "emblem_url" text, "home_stadium_id" text NOT NULL, "color_1" text, "color_2" text, "color_3" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("home_stadium_id") REFERENCES "public"."stadium"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
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
CREATE TRIGGER "set_public_club_updated_at"
BEFORE UPDATE ON "public"."club"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_club_updated_at" ON "public"."club" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

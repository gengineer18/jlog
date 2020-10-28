DROP TRIGGER IF EXISTS "set_public_competition_updated_at" ON "public"."competition";
ALTER TABLE "public"."competition" DROP COLUMN "updated_at";

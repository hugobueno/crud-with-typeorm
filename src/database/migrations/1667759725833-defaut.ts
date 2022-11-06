import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1667759725833 implements MigrationInterface {
    name = 'defaut1667759725833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_subject" ("romm_id" integer NOT NULL, "subject_id" integer NOT NULL, CONSTRAINT "PK_3b80917bd5bcaa2ce6133492e80" PRIMARY KEY ("romm_id", "subject_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e90d5cdf2d11429eaa4b47e4d5" ON "room_subject" ("romm_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a05f10c497f5f7db3022664a6d" ON "room_subject" ("subject_id") `);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_e90d5cdf2d11429eaa4b47e4d5e" FOREIGN KEY ("romm_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_subject" ADD CONSTRAINT "FK_a05f10c497f5f7db3022664a6d6" FOREIGN KEY ("subject_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_a05f10c497f5f7db3022664a6d6"`);
        await queryRunner.query(`ALTER TABLE "room_subject" DROP CONSTRAINT "FK_e90d5cdf2d11429eaa4b47e4d5e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a05f10c497f5f7db3022664a6d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e90d5cdf2d11429eaa4b47e4d5"`);
        await queryRunner.query(`DROP TABLE "room_subject"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1667762025532 implements MigrationInterface {
    name = 'defaut1667762025532'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "descripton" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "description" TO "descripton"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class defaut1667761740231 implements MigrationInterface {
    name = 'defaut1667761740231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "descripton" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "descripton"`);
    }

}

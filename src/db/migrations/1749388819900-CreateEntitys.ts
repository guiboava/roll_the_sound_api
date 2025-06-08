import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntitys1749388819900 implements MigrationInterface {
    name = 'CreateEntitys1749388819900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "manufacturer" character varying NOT NULL, "stock" boolean NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "clientName" character varying NOT NULL, "clientCpf" character varying NOT NULL, "orderDate" TIMESTAMP NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orderItems" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying NOT NULL, "price" integer NOT NULL, "quantity" integer NOT NULL, "orderId" uuid NOT NULL, CONSTRAINT "PK_b1b864ba2b7d5762d34265cc8b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "opinions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "note" integer NOT NULL, "comment" character varying NOT NULL, "recommend" boolean NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_40e5faf85211ee31acc8ed669ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "artists" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying NOT NULL, "band" character varying NOT NULL, "srcClip" character varying NOT NULL, "about" character varying NOT NULL, CONSTRAINT "PK_09b823d4607d2675dc4ffa82261" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e"`);
        await queryRunner.query(`DROP TABLE "artists"`);
        await queryRunner.query(`DROP TABLE "opinions"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "orderItems"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}

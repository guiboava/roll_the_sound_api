import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedTableStructure1749398658902 implements MigrationInterface {
    name = 'ChangedTableStructure1749398658902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "manufacturer"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "note"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "comment"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "recommend"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "clientName"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "clientCpf"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderDate"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "band"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "srcClip"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "about"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "products_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "products_price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "products_manufacturer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "products_stock" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "products" ADD "products_image" character varying`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "opinions_cliente_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "opinions_note" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "opinions_comment" text`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "opinions_recommend" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`CREATE TYPE "public"."opinions_opinions_city_enum" AS ENUM('Selecione', 'Florianópolis', 'Joinville', 'Blumenau', 'Chapecó', 'Itajaí', 'Criciúma', 'Lages', 'Balneário Camboriú', 'Jaraguá do Sul', 'Palhoça', 'São José', 'Brusque')`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "opinions_city" "public"."opinions_opinions_city_enum" NOT NULL DEFAULT 'Selecione'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderitems_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderitems_image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderitems_price" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderitems_quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderitems_order_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orders_client_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orders_client_cpf" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orders_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orders_status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "artists_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "artists_image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "artists_band_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "artists_video_link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "artists_about" text`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_fc19e1313839183ff3d3bceb673" FOREIGN KEY ("orderitems_order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_fc19e1313839183ff3d3bceb673"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "artists_about"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "artists_video_link"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "artists_band_name"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "artists_image"`);
        await queryRunner.query(`ALTER TABLE "artists" DROP COLUMN "artists_name"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orders_status"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orders_date"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orders_client_cpf"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orders_client_name"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderitems_order_id"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderitems_quantity"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderitems_price"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderitems_image"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "orderitems_name"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "opinions_city"`);
        await queryRunner.query(`DROP TYPE "public"."opinions_opinions_city_enum"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "opinions_recommend"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "opinions_comment"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "opinions_note"`);
        await queryRunner.query(`ALTER TABLE "opinions" DROP COLUMN "opinions_cliente_name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "products_image"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "products_stock"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "products_manufacturer"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "products_price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "products_name"`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "about" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "srcClip" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "band" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artists" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "clientCpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "clientName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "orderId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "recommend" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "comment" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "note" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "opinions" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "stock" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "manufacturer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

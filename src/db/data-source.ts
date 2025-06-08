import { DataSource, DataSourceOptions, Migration } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'roll_the_sound_db',
    username: 'postgres',
    password: 'postgres',
    port: 5432,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
};

export default new DataSource(dataSourceOptions);
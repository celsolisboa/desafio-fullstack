import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCourses1621828117047 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'courses',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'teachers',
                type: 'varchar',
                isArray: true,
              },
              {
                name: 'rooms',
                type: 'varchar',
                isArray: true,
              },
              {
                name: 'initialHour',
                type: 'varchar',
              },
              {
                name: 'finalHour',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses');
      }

}

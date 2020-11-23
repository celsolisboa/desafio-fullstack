exports.up = function (knex) {
  return knex.schema
    .createTable('courses', tbl => {
      tbl.increments('id').primary();
      tbl.text('course_title')
        .notNullable();
      tbl.text("time_start")
        .notNullable();
      tbl.text("time_end")
        .notNullable();
    })
    .createTable('teachers', tbl => {
      tbl.increments('id').primary();
      tbl.text('name')
        .notNullable();
    })
    .createTable('rooms', tbl => {
      tbl.increments('id').primary();
      tbl.integer('number')
        .notNullable();
    })
    .createTable('course-teacher', tbl => {
      tbl.increments('id').primary();
      tbl.integer('teacher_id').references('id').inTable('teachers')
        .notNullable();
      tbl.integer('course_id').references('id').inTable('courses')
        .notNullable();
    })
    .createTable('course-room', tbl => {
      tbl.increments('id').primary();
      tbl.integer('room_id').references('id').inTable('rooms')
        .notNullable();
      tbl.integer('course_id').references('id').inTable('courses')
        .notNullable();
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('courses')
    .dropTableIfExists('teachers')
    .dropTableIfExists('rooms')
    .dropTableIfExists('course-teacher')
    .dropTableIfExists('course-room')
};

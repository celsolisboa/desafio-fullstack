const knex = require("knex");
const config = require("../../knexfile");

const db = knex(config.development);

module.exports = {
  add,
  find,
  findWithId,
  findById,
  deleteById,
  deleteWithId
};

async function add(tablename, data) {
  const [id] = await db(tablename).insert(data);
  return id;
}

function find(talblename) {
  return db(talblename);
}

function findWithId(talblename,id) {
  return db(talblename).where({"course_id": id});
}

function findById(talblename,id) {
  return db(talblename).where({"id": id});
}

function deleteById(talblename,id) {
  return db(talblename).where({"id": id}).del()
}

function deleteWithId(talblename,id) {
  return db(talblename).where({"course_id": id}).del()
}
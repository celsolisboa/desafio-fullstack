const DB = require('../database/connection');

async function details(data) {
  let course = {
    id: data.id,
    course_title: data.course_title,
    time_start: data.time_start,
    time_end: data.time_end,
    rooms: [],
    teachers: []
  };

  const teachers = await DB.findWithId("course-teacher", data.id);
  for (let j = 0; j < teachers.length; j++) {
    const teacher = await DB.findById("teachers", teachers[j].teacher_id);
    course.teachers.push(teacher[0]);
  }

  const rooms = await DB.findWithId("course-room", data.id);

  for (let j = 0; j < rooms.length; j++) {
    const room = await DB.findById("rooms", rooms[j].room_id);
    course.rooms.push(room[0]);
  }

  return course;
};

module.exports = {
  async index(req, res) {
  DB.findById("courses", req.params.id)
    .then(async (data) => {
      res.status(200).json(await details(data[0]));
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Unable to retrieve courses"});
    });
  },

  async show(req, res) {
    DB.find("courses")
    .then(async (data) => {
      let CoursesArr = [];

      for (let i = 0; i < data.length; i++) {
        CoursesArr.push(await details(data[i]));
      }

      res.status(200).json(CoursesArr);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: "Unable to retrieve courses"});
    });
  }
}
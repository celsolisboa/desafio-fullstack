const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    let course = {
      id: data.id,
      course_title: data.course_title,
      time_start: data.time_start,
      time_end: data.time_end,
      rooms: [],
      teachers: []
    };
  
    const teachers = await connection.findWithId("course-teacher", data.id);
    for (let j = 0; j < teachers.length; j++) {
      const teacher = await connection.findById("teachers", teachers[j].teacher_id);
      course.teachers.push(teacher[0]);
    }
  
    const rooms = await connection.findWithId("course-room", data.id);
  
    for (let j = 0; j < rooms.length; j++) {
      const room = await connection.findById("rooms", rooms[j].room_id);
  
      course.rooms.push(room[0]);
    }
    return course;
  }
}
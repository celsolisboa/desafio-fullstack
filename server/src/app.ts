import CoursesController from "./controllers/CoursesController";
import TeacherController from "./controllers/TeachersController"
import ClassroomController from "./controllers/ClassroomController"

async function main() {
    const teachersController = new TeacherController();
    const coursesController = new CoursesController();
    const classroomController = new ClassroomController();

    // const teacher = await teachersController.create({
    //     name: "Gygi",
    //     email: "gygi@teste.com",
    //     password: "123456"
    // });

    // const courses = await coursesController.create({
    //     name: "Quimica"
    // });

        // const classroom = await classroomController.create({
        //     room_number: 104,
        //     start_time: "13:15",
        //     end_time: "15:30",
        //     teachersId: "5ed0ad57-f0e5-4130-83bf-388a523b4833",
        //     courseId: "fefa2555-cdd4-4ad9-aaa5-18db9e74f290"

        // })

        const classroom = await classroomController.findAll();

    console.log(classroom)
}

main();
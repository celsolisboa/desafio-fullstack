import { Request, Response } from "express";
import { updateCourseService } from "../../services";

const updateCourseController = async (req: Request, res: Response) => {

    // console.log(req.body, req.params)

    const course = await updateCourseService(req.body.course, req.params.id)

}

export default updateCourseController;

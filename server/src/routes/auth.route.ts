import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const ROUTE_PREFIX = "/auth";

const authController = new AuthController();

export default function (): Router {
  const router: Router = Router();

  router.post(`${ROUTE_PREFIX}/signin`, authController.signin);

  router.post(`${ROUTE_PREFIX}/signup`, authController.signup);

  return router;
}

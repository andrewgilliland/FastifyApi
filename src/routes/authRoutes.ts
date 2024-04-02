import { FastifyInstance, FastifyRequest } from "fastify";
import { AuthController } from "../controllers/authController";

export type AuthRequestBody = { email: string; password: string };

export default async function authRoutes(fastify: FastifyInstance) {
  const authController = new AuthController();
  const route = "/auth";

  fastify.post(`${route}/signup`, async (req: FastifyRequest, res) => {
    const { email, password } = JSON.parse(req.body as string);

    const user = await authController.signUp({ email, password });
    return user;
  });

  fastify.post(`${route}/login`, async (req, res) => {
    console.log("login");
    const { email, password } = req.body as AuthRequestBody;
    const user = await authController.login(email, password);
    return user;
  });
}

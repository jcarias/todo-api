import express from "express";
import TodoController from "../todosControllers/Todos";
import cors from "cors";

const router = express.Router();

const ToDosEndPoint = "/api/v1/todos";
router.get(`${ToDosEndPoint}`, cors(), TodoController.getAllToDos);
router.get(`${ToDosEndPoint}/:id`, cors(), TodoController.getTodo);
router.post(
  `${ToDosEndPoint}`,
  cors({ origin: true }),
  TodoController.createTodo
);
router.put(`${ToDosEndPoint}/:id`, cors(), TodoController.updateTodo);
router.put(`${ToDosEndPoint}/:id/done`, cors(), TodoController.markTodoDone);
router.delete(`${ToDosEndPoint}/:id`, cors(), TodoController.deleteTodo);

export default router;

import express from "express";
import TodoController from "../todosControllers/Todos";
import cors from "cors";

const router = express.Router();

const ToDosEndPoint = "/api/v1/todos";
router.get(`${ToDosEndPoint}`, cors(), TodoController.getAllToDos);
router.get(`${ToDosEndPoint}/:id`, TodoController.getTodo);
router.post(`${ToDosEndPoint}`, TodoController.createTodo);
router.put(`${ToDosEndPoint}/:id`, TodoController.updateTodo);
router.put(`${ToDosEndPoint}/:id/done`, TodoController.markTodoDone);
router.delete(`${ToDosEndPoint}/:id`, TodoController.deleteTodo);

export default router;

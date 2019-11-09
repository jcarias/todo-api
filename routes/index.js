import express from "express";
import TodoController from "../todosControllers/Todos";

const router = express.Router();

const ToDosEndPoint = "/api/v1/todos";
router.get(`${ToDosEndPoint}`, TodoController.getAllToDos);
router.get(`${ToDosEndPoint}/:id`, TodoController.getTodo);
router.post(`${ToDosEndPoint}`, TodoController.createTodo);
router.put(`${ToDosEndPoint}/:id`, TodoController.updateTodo);
router.delete(`${ToDosEndPoint}/:id`, TodoController.deleteTodo);

export default router;

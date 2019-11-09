/* eslint-disable class-methods-use-this */
import db from "../db/db";

class ToDosController {
  getAllToDos(req, res) {
    return res.status(200).send({
      success: "true",
      message: "todos retrieved successfully",
      todos: db
    });
  }

  getTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const foundToDo = db.find(todo => todo.id === id);

    if (foundToDo !== undefined) {
      return res.status(200).send({
        success: "true",
        message: "todo retrieved successfully",
        todo: foundToDo
      });
    } else {
      return res.status(404).send({
        success: "false",
        message: "todo does not exist"
      });
    }
  }

  createTodo(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: "false",
        message: "title is required"
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: "false",
        message: "description is required"
      });
    }
    const todo = {
      id: new Date().getTime(),
      title: req.body.title,
      description: req.body.description
    };
    db.push(todo);
    return res.status(201).send({
      success: "true",
      message: "todo added successfully",
      todo
    });
  }

  updateTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    let todoFound = undefined;
    let itemIndex = -1;

    for (let i = 0; i < db.length; i++) {
      const todo = db[i];
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = i;
        break;
      }
    }

    if (!todoFound) {
      return res.status(404).send({
        success: "false",
        message: "todo not found"
      });
    }

    const updatedTodo = {
      id: todoFound.id,
      title: req.body.title || todoFound.title,
      description: req.body.description || todoFound.description
    };

    db.splice(itemIndex, 1, updatedTodo);

    return res.status(201).send({
      success: "true",
      message: "todo updated successfully",
      updatedTodo
    });
  }

  deleteTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const foundToDoIndex = db.findIndex(todo => todo.id === id);

    if (foundToDoIndex >= 0) {
      db.splice(foundToDoIndex, 1);
      return res.status(200).send({
        success: "true",
        message: "Todo deleted successfully"
      });
    } else {
      return res.status(404).send({
        success: "false",
        message: "todo not found"
      });
    }
  }
}

const todoController = new ToDosController();

export default todoController;

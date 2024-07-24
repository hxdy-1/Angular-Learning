const express = require("express");
const fs = require("fs");
const router = express.Router();
const todosFilePath = "./data/todos.json";

// Utility function to read JSON file
const readJSONFile = (filePath) => {
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

// Utility function to write JSON file
const writeJSONFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Get all todos
router.get("/", (req, res) => {
    const todos = readJSONFile(todosFilePath);
    res.json(todos);
});

// Get a single todo by id
router.get("/:id", (req, res) => {
    const todos = readJSONFile(todosFilePath);
    const todo = todos.find((todo) => todo.id === req.params.id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

// Add a new todo
router.post("/", (req, res) => {
    const todos = readJSONFile(todosFilePath);
    const newTodo = { ...req.body, id: `${Date.now()}` }; // Generate a unique ID
    todos.push(newTodo);
    writeJSONFile(todosFilePath, todos);
    res.status(201).json(newTodo);
});

// Update an existing todo
router.put("/:id", (req, res) => {
    const todos = readJSONFile(todosFilePath);
    const index = todos.findIndex((todo) => todo.id === req.params.id);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...req.body };
        writeJSONFile(todosFilePath, todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

// Delete a completed todo
router.delete("/:id", (req, res) => {
    const todos = readJSONFile(todosFilePath);
    const index = todos.findIndex((todo) => todo.id === req.params.id);
    if (index !== -1) {
        todos.splice(index, 1);
        writeJSONFile(todosFilePath, todos);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

module.exports = router;

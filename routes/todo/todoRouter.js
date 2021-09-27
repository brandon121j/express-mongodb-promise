var express = require('express');
var router = express.Router();
const { getAllTodo, createTodo, updateTodo, deleteTodo, deleteAll } = require('./controller/todoController');


router.get('/', function(req, res, next) {

    getAllTodo({})
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res.status(500).json({ message: "FAILURE", error: error.message })
        });
});

router.post('/create-todo', function(req, res) {

    createTodo(req.body)
        .then(payload => {
            res.json({ message: "SUCCESS", payload})
        })
        .catch(error => {
            res.status(500).json({ message: "FAILURE", error: error.message })
        });
});

router.put('/update-todo/:id', function(req, res) {

    updateTodo(req.params.id, req.body)
        .then(payload => {
            res.json({ message: "SUCCESS", payload})
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message })
        });
});

router.delete('/delete-todo/:id', function(req, res) {

    deleteTodo(req.params.id)
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res
            .status(500)
            .json({ message: "FAILURE", error: error.message })
        })
})

router.delete('/delete-all', function(req, res) {

    deleteAll()
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message })
        })
})

module.exports = router;
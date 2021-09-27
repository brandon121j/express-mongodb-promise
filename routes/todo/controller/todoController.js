const Todo = require('../model/Todo');

function getAllTodo(body) {
    return new Promise((resolve, reject) => {

        Todo
            .find(body)
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(error)
            });
    });
}

function createTodo(body) {
    return new Promise((resolve, reject) => {

        const newTodo = new Todo({
            todo: body.todo,
            isDone: body.isDone
        })

        newTodo
            .save()
            .then((payload) => {
                resolve(payload)
            })
            .catch((error) => {
                reject(error)
            });

    });
}

function updateTodo(id, body) {

    return new Promise ((resolve, reject) => {
        Todo
            .findByIdAndUpdate(id, body, { new : true })
            .then(payload => { resolve(payload) })
            .catch(error => { reject(error) })
    })
}

function deleteTodo(id) {

    return new Promise ((resolve, reject) => {
        Todo
            .findByIdAndDelete(id)
            .then(payload => { resolve(payload) })
            .catch(error => { reject(error) })
    });
}

function deleteAll() {

    return new Promise ((resolve, reject) => {
        Todo
            .deleteMany()
            .then(payload => { resolve(payload) })
            .catch(error => {reject(error) })
    })
}

function getTodoById(id) {

    return new Promise ((resolve, reject) => {
        Todo
            .findById(id)
            .then(payload => { resolve(payload) })
            .catch(error => { reject(error) })
    })
}

module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAll,
    getTodoById
}
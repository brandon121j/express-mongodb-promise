var express = require('express');
var router = express.Router();
const { getAllTodo } = require('./controller/todoController');

/* GET home page. */
router.get('/', function(req, res, next) {

    getAllTodo({})
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res.status(500).json({ message: "FAILURE", error: error.message })
        });
});

module.exports = router;
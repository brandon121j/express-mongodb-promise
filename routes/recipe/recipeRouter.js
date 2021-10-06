var express = require('express');
var router = express.Router();
const { getAllRecipes, createRecipe, updateRecipe, deleteRecipe } = require('./controller/recipeController');

router.get('/', function(req, res) {
    getAllRecipes({})
        .then(payload => {
            res.json({ message: "SUCCESS", payload})
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message})
        });
});

router.post('/create-recipe', function(req, res) {
    createRecipe(req.body)
        .then(payload => {
            res.json({ message: "SUCCESS", payload})
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message})
        })
})

router.put('/update-recipe/:id', function(req, res) {
    updateRecipe(req.params.id, req.body)
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.message })
        })
})

router.delete('/delete-recipe/:id', function(req, res) {
    deleteRecipe(req.params.id)
        .then(payload => {
            res.json({ message: "SUCCESS", payload })
        })
        .catch(error => {
            res
                .status(500)
                .json({ message: "FAILURE", error: error.messsage})
        })
})

module.exports = router;
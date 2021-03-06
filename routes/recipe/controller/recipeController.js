const Recipe = require('../model/Recipe');

function getAllRecipes(body) {
    return new Promise((resolve, reject) => {

        Recipe
            .find(body)
            .then(payload => {
                resolve(payload)
            })
            .catch(error => {
                reject(error)
            });
    });
}

function updateRecipe(id, body) {
    return new Promise((resolve, reject) => {

        Recipe
            .findByIdAndUpdate(id, body, { new: true })
            .then(payload => resolve(payload))
            .catch(error => reject(error))
    })
}

function deleteRecipe(id) {
    return new Promise ((resolve, reject) => {

        Recipe
            .findByIdAndDelete(id)
            .then(payload => resolve(payload))
            .catch(error => reject(error))
    })
}

function createRecipe(body) {
    return new Promise ((resolve, reject) => {

        const newRecipe = new Recipe({
            recipe: body.recipe,
            price: body.price
        })

        newRecipe
            .save()
            .then(payload => resolve(payload))
            .catch(error => reject(error))
    })
}


module.exports = {
    getAllRecipes,
    updateRecipe,
    deleteRecipe,
    createRecipe
}
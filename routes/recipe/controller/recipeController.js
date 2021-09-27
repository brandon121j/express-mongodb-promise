const Recipe = require('../model/Recipe');

function getAllRecipes(body) {
    return new Promise((resolve, reject) => {

        Recipe
            .find(body)
            .then(payload => {
                resolve(payload)
            })
            .reject(error => {
                reject(error)
            });
    });
}


module.exports = {
    getAllRecipes,
}
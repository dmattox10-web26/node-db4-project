
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('Quantity').insert([
        {id: 1, recipe_id: '1', ingredient_id: '1', measurement_id: '1', ingredient_quantity: '1'},
        {id: 2, recipe_id: '1', ingredient_id: '2', measurement_id: '2', ingredient_quantity: '2'},
        {id: 3, recipe_id: '1', ingredient_id: '4', measurement_id: '1', ingredient_quantity: '1'},
        {id: 4, recipe_id: '1', ingredient_id: '6', measurement_id: '3', ingredient_quantity: '2'},
        {id: 5, recipe_id: '2', ingredient_id: '3', measurement_id: '1', ingredient_quantity: '1'},
        {id: 6, recipe_id: '2', ingredient_id: '5', measurement_id: '1', ingredient_quantity: '1'},
        {id: 7, recipe_id: '2', ingredient_id: '7', measurement_id: '1', ingredient_quantity: '2'}
      ]);
    });
};

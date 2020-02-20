
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {id: 1, ingredient_name: 'Ground Beef'},
        {id: 2, ingredient_name: 'Sliced Tomatoes'},
        {id: 3, ingredient_name: 'Shredded Mozzarella Cheese'},
        {id: 4, ingredient_name: 'Shredded Cheddar Cheese'},
        {id: 5, ingredient_name: 'Sliced Pepperoni'},
        {id: 6, ingredient_name: 'Taco Seasoning'},
        {id: 7, ingredient_name: 'Bacon Pieces'}
      ]);
    });
};

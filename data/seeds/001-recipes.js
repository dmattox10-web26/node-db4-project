
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {id: 1, recipe_name: 'Tacos', recipe_desc: 'A mexican favorite'},
        {id: 2, recipe_name: 'Pizza', recipe_desc: 'An italian favorite'}
      ]);
    });
};

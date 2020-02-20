
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {id: 1, recipe_id: '1', step_num: '1', step_desc: 'Add ingredients'},
        {id: 2, recipe_id: '1', step_num: '2', step_desc: 'Stir to combine'},
        {id: 3, recipe_id: '2', step_num: '1', step_desc: 'Add ingredients'},
        {id: 4, recipe_id: '2', step_num: '2', step_desc: 'Stir to combine'}
      ]);
    });
};

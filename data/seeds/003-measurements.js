
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('Measurements').insert([
        {id: 1, name: 'cups'},
        {id: 2, name: 'slices'},
        {id: 3, name: 'tbsp'}
      ]);
    });
};

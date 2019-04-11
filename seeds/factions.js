
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'The Empty Eyes', power: '1', influence: '1'},
        {id: 2, name: 'Blessing of Light', power: '2', influence: '2'},
        {id: 3, name: 'Ambitious Singularity', power: '3', influence: '3'},
        {id: 4, name: 'Graybrawlers', power: '4', influence: '4'}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('faction_gang').del()
    .then(function () {
      // Inserts seed entries
      return knex('faction_gang').insert([
        {id: 1, gang_id: '1', faction_id: '1', faction_influence: '1' },
        {id: 2, gang_id: '1', faction_id: '2', faction_influence: '2' },
        {id: 3, gang_id: '1', faction_id: '3', faction_influence: '3' },
        {id: 4, gang_id: '2', faction_id: '4', faction_influence: '4' },
        {id: 5, gang_id: '3', faction_id: '5', faction_influence: '5' },
      ]);
    });
};

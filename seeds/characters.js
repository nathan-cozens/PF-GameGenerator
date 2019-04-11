
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Max Turner', class: 'Fighter', race: 'Human', weight: '120', gender: 'Male', size: 'Medium', description: "Max Turner hasn't had time to gain any experance just yet "},
        {id: 2, name: 'Folmer Phiqen', class: 'Cleric', race: 'Elf', weight: '125', gender: 'Female', size: 'Medium', description: "Folmer Phiqen hasn't had time to gain any experance just yet "},
        {id: 3, name: 'Thrazatin Horngranite', class: 'Bard', race: 'Dwarf', weight: '140', gender: 'Male', size: 'Medium', description: "Thrazatin Horngranite hasn't had time to gain any experance just yet "}
      ]);
    });
};

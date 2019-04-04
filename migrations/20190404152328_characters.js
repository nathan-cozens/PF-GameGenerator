
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('class')
    table.string('race')
    table.string('corestats_id')
    table.string('skills_id')
   
  })
};

exports.down = function(knex, Promise) {
  
};

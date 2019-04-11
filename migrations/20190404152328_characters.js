
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('class')
    table.string('race')
    table.string('weight')
    table.string('gender')
    table.string('size')
    table.string('description')
   
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters', () =>{

  })
};


exports.up = function(knex, Promise) {
return knex.schema.createTable('gangs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('power')

    
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gangs', () =>{
    
    })
};

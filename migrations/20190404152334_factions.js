
exports.up = function(knex, Promise) {
return knex.schema.createTable('factions', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('power')
    table.integer('influence')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('factions', () =>{
    
    })
};


exports.up = function(knex, Promise) {
return knex.schema.createTable('factions', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('power')
    table.string('influence')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('factions', () =>{
    
    })
};

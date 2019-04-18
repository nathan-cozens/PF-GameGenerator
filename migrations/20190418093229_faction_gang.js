
exports.up = function(knex, Promise) {
return knex.schema.createTable('faction_gang', (table) => {
    table.increments('id').primary();
    table.integer('gang_id').referances('gangs.id');
    table.integer('faction_id').referances('factions.id');
    table.integer('faction_influence');
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('faction_gang', () =>{
    
    })
};

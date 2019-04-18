const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCharacter,
  getCharacters,
  getFactions,
  getFaction,
  getGangs,
  getGang,
  factionsForGang,
  
}

function getCharacters (db = connection) {
  return db('characters').select()
}

function getCharacter (id, db = connection) {
  return db('characters')
  .where('id', id)
  .first()
}

function getFactions (db = connection){
  return db('factions').select()
}

function getFaction (id, db = connection) {
  return db('factions')
  .where('id', id)
  .first()
}

function getGangs (db = connection){
  return db('gangs').select()
}

function getGang (id, db = connection) {
  return db('gangs')
  .where('id', id)
  .first()
}

function makeCharacter(){
  return db()
}

function factionsForGang (gangId, db = connection) {
  return db('factions')
  .join('faction_gang', 'faction_gang.faction_id', '=', 'factions.id')
  .where('faction_gang.gang_id', gangId)
  .select('factions.*')

}
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCharacter,
  getCharacters,
}

function getCharacters (db = connection) {
  return db('Characters').select()
}

function getCharacter (id, db = connection) {
  return db('characters').where('id', id).first()
}

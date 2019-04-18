const express = require('express')

const db = require('../db')

const router = express.Router()



router.get('/Character/:id', (req, res) => {
      let id = req.params.id
      db.getCharacter(id)
      .then(character =>{
            let viewData = {
                  character
            }
      res.render('partials/singlecharacter', viewData)     
      })
})

router.get('/Character-List', (req, res) => {
      db.getCharacters()
      .then(character =>{
            let viewData = {
                  character
            }
      res.render('partials/character-list', viewData)     
      })
})

router.get('/Faction/:id', (req, res) => {
      let id = req.params.id
      db.getFaction(id)
      .then(faction =>{
            let viewData = {
                  faction
            }
      res.render('partials/singlefaction', viewData)     
      })
})

router.get('/Faction-List', (req, res) => {
      db.getFactions()
      .then(faction =>{
            let viewData = {
                  faction
            }
      res.render('partials/faction-list', viewData)     
      })
})

router.get('/Gang/:id', (req, res) => {
      let id = req.params.id
      db.getGang(id)
      .then(gang =>{
            db.factionsForGang(id)
            .then(factions =>{
                  let viewData = {
                        gang,
                        factions
                  }
                  console.log(viewData)
                  res.render('partials/singlegang', viewData)
            })   
      })
})

router.get('/Gang-List', (req, res) => {
      db.getGangs()
      .then(gang =>{
            let viewData = {
                  gang
            }
      res.render('partials/gang-list', viewData)     
      })
})

router.post('/Character-List/Create', (req, res) => {
      db.getCharacters()
      .then(character =>{
            let viewData = {
                  character
            }
      res.render('partials/createcharacter', viewData)     
      })
})



router.get('/', (req, res) => {
  
      res.render('partials/home')  
   
})



module.exports = router

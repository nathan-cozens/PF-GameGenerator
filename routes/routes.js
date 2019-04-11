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
            console.log(viewData)
      res.render('partials/singlecharacter', viewData)     
      })
       
   
})

router.get('/Character-List', (req, res) => {
      db.getCharacters()
      .then(character =>{
            let viewData = {
                  character
            }
      res.render('partials/characters', viewData)     
      })
       
   
})


router.get('/', (req, res) => {
  
      res.render('partials/home')  
   
})


module.exports = router

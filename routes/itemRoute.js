const express = require('express')
const router = express.Router();
const Item = require('../models/model')

router.route("/new").post((req, res) => {
    const title = req.body.title;
    const matter = req.body.matter;
    const lang = req.body.lang;
    const link = req.body.link;
    const github = req.body.github;

    const newItem = new Item({
        title,
        matter,
        lang,
        link,
        github
    });

    newItem.save();
})

router.route("/item").post((req, res) => {
    console.log(req.body.id);
    Item.deleteOne({_id:req.body.id}, (err) => {
        if(err) {
            res.send(err);
        }
        else res.send("deleted");
    })
})

router.route("/home").get((req, res) => {
    Item.find()
        .then(fountItem => res.json(fountItem)); 
})

router.route("/delete").get((req, res) => {
    Item.find()
        .then(fountItem => res.json(fountItem)); 
})


router.route("/profile").get((req, res) => {
    Item.find()
        .then(fountItem => res.json(fountItem)); 
})

module.exports = router;
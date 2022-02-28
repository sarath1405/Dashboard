const mongoose = require('mongoose')

const itemSchema = {
    title: String,
    matter: String,
    lang: String,
    link: String,
    github: String
}

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
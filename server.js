const express = require('express')
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const PORT = process.env.PROT || 5000;

mongoose.connect("mongodb+srv://sarath14:Gd0b6Vc5Awqkw1ev@cluster0.arzcw.mongodb.net/dashboardDB?retryWrites=true&w=majority").then(console.log('mongodb connected!'))
.catch("error");

app.use("/", require("./routes/itemRoute"));

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
})
const express = require ('express');
const routes = require('./routes/index');
const cors = require('cors');
require('./database')

const app = express ();
app.use(cors({origin:'*'}))

app.use(express.json());
app.use("/api",routes)

app.listen(3333);
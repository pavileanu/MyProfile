const express = require('express');
const path = require('path');
const getProjects = require('./utils/getProjects');
const bodyParser = require('body-parser');
const sendEmail = require('./utils/email');

const projects = getProjects();

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', projects);
});

app.post('/', async (req, res) => {
    const emailSent = await sendEmail(req.body);
    if(emailSent)  {
        res.status(200).send();
    } else {
        res.status(500).send();
    }
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;
app.listen(port, () => {
    console.log('App running');
});
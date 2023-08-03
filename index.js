const express = require('express');
const { response } = require('express')
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const dynamicResume = require('./docs/dynamic_resume');;
const pdf = require('html-pdf');
// const staticResume = require('./docs/static-resume');;
var formidable = require('formidable'); 
var http = require('http');

// Setting Up the MiddleWare
__dirname = "./";
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const options = {
    "height": "5.81in",        // allowed units: mm, cm, in, px
    "width": "4.35in",            // allowed units: mm, cm, in, px
}

app.get('/', (req, res, next) => {
    res.render('home');
});


app.get('/resume_builder/:theme', (req, res, next) => {
    console.log("theme: ", req.params.theme);
    switch (req.params.theme) {
        case '1':
            res.render('resume_builder', { theme: "brown" });
            break;
        case '2':
            res.render('resume_builder', { theme: "blue" });
            break;
    }
    // global.kevtheme = req.params.theme;
});

app.post('/submit', (req, res, next) => {
    console.log(req.body);
    const userName = req.body.name;
    const lowercaseName = userName.toLowerCase();
    const noSpaceName = lowercaseName.replace(' ', '');
    const shortName = noSpaceName.slice(0, 10);
    console.log("short name: ", shortName);

    let themeOptions = {
        leftBackgroundColor: '#bf9781',
    };

    // console.log(kevtheme);

    if (req.params.theme == 1)
    {
        pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "_resume.pdf", (error, response) => {
            if (error) throw Error("File is not Created!")
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    }
    else
    {
        themeOptions = {
            leftBackgroundColor: '#7fb9df'
        }
        pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "_resume.pdf", (error, response) => {
            if (error) throw Error("File is not Created!")
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server is running on: ' + port));
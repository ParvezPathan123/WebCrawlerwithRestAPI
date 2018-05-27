var express = require('express');
var Crawler = require("crawler");
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');

//Database Connection
mongoose.connect("mongodb://localhost:27017/clientData");
var db = mongoose.connection;

//Adding routes files 
var routes = require('./routes/ClientDetails');

// Init App
var app = express();

//Including the model  
var ClientDetailInfo = require('./models/clientDetail');

// Static Folder 
app.use(express.static(path.join(__dirname, './clientFront/dist')));

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


// New Crawler 
var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = cheerio.load(res.body);

            clientEachObj = [];
            var count = 0;
            if (res.body.length > 0) {
                $('tr').each((i, elm) => {
                    var Phone1 = $(elm).children().eq(1).text();
                    var Zip1 = $(elm).children().eq(4).text();
                    if (Zip1.length > 0 && Phone1.length > 0) {
                        var ZipValid = /^\d{6}$/;
                        var PhoValid = /^(\+91[ ]?)?\d{10}$/;

                        if ((ZipValid.test(Zip1)) && (PhoValid.test(Phone1))) {
                
                            clientEachObj.push({
                                Name: $(elm).children().first().text(),
                                Phone: Phone1,
                                Email: $(elm).children().eq(2).text(),
                                Company: $(elm).children().eq(3).text(),
                                Zip: Zip1
                            });

                        }

                    }
                });
            }
        
           fs.writeFile('output.json', JSON.stringify(clientEachObj, null, 4), function (err) {
                console.log('File successfully written! - Check your project directory for the output.json file');
            });
        
            // Sending the bulk data from crawler to MongoDB 
         ClientDetailInfo.collection.insert(clientEachObj,function(err,docs) {
              if(err) {
                 return console.error(err);
              } else {
                console.log("Multiple documents inserted to Collection");
              }
            });

        }
        done();
    }
});


// Queue just one URL, with default callback
c.queue('https://jointhecrew.in/clients/');


app.use('/',routes);

// Set Port
app.set('port',(process.env.port || 4200 ));

app.listen(app.get('port'),function() {
    console.log('Server started on port '+app.get('port'));
});























var express = require('express');
var router = express.Router();

var ClientDetailInfo = require('../models/clientDetail');

//Get Clients
router.get('/clients',function(req,res) {
    ClientDetailInfo.getClients(function(err, clients){
        if(err){
            throw err;
        }
        res.json(clients);
    });
});

// Get Client by ID
router.get('/clients/:_id',function(req,res) {
    ClientDetailInfo.getClientById(req.params._id,function(err, client){
        if(err) {
            throw err;
        }
        res.json(client);
    });
});

//Add a new client
router.post('/clients',function(req, res){
    var client = new ClientDetailInfo(req.body);
    ClientDetailInfo.addNewClient(client, function(err, client){
        if(err){
            throw err;
        }
        res.json(client);
    });
});

// Update a client by ID
router.put('/clients/:_id',function(req, res){
    var id = req.body._id;
    var clientUpdate = req.body; 
    ClientDetailInfo.updateClientById(id, clientUpdate, {}, function(err, client){
        if(err){
            throw err;
        }
        res.json(client);
    });
});

// Delete a client by ID
router.delete('/clients/:_id',function(req, res){
    var id= req.params._id;
    ClientDetailInfo.deleteClientById(id, function(err, client){
        if(err) {
            throw err;
        }
        res.send({
            message: 'Deleted successsfully'
        });
    });
});

module.exports = router;
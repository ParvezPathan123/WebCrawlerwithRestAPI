var mongoose = require('mongoose');

// Client Schema
var clientSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    Company: {
        type: String,
        required: true
    },
    Zip: {
        type: String,
        required: true
    }
});

var ClientDetailInfo = module.exports = mongoose.model('ClientDetailInfo',clientSchema);

//Get All the Clients
module.exports.getClients = function(callback, limit) {
    ClientDetailInfo.find(callback).limit(limit);
};

//Get Client BY ID
module.exports.getClientById = function(id, callback) {
    ClientDetailInfo.findById(id, callback);
};

//Add New Client 
module.exports.addNewClient = function(client, callback){
    ClientDetailInfo.create(client, callback);
};

// Update A Client By ID
module.exports.updateClientById = function(id, client, options, callback){
    var query = {_id:id};
    var updatedClient = {
        Name: client.Name,
        Phone: client.Phone,
        Email: client.Email,
        Company: client.Company,
        Zip: client.Zip
    };
    ClientDetailInfo.findOneAndUpdate(query, updatedClient, options, callback);
};

//Delete A Client By ID
module.exports.deleteClientById = function(id, callback) {
    var query = {_id:id};
    ClientDetailInfo.findByIdAndRemove(query, callback);
};























// requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const db = mongojs('localhost/bank_app', ['accounts']);
// zahtevanje konretnog ObjectId
const ObjectID = require('mongodb').ObjectID;


// server
app.use(express.static(__dirname+'/public'));

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// get accounts from db
app.get('/aa', function(req, res){
  // res.send(db.accounts.find({}))
  db.accounts.find({}, function(err, docs){
    res.send(docs)
  });
});

// edit accounts
app.post('/editAcc', function (req, res) {
  // zahtevamo konkretan ObjecId
  var o_id = new ObjectID(req.body._id);
  console.log(req.body._id);
  // db.accounts.update({no:req.body.no},{$set:{'name':req.body.name, 'deposit':req.body.deposit, 'card':req.body.card}});
  db.accounts.update({_id:o_id},{$set:{'name':req.body.name, 'deposit':req.body.deposit, 'card':req.body.card}});
  db.accounts.find({_id:o_id}, function(err, docs){
    console.log(docs);
  });
  res.end()
});

// add new accounts
app.post('/addAcc', function(req, res){
  console.log(req.body);
  

    db.accounts.insert({ name:req.body.name, deposit:req.body.deposit, card:req.body.card})

  res.end()
});

// delete accounts
app.post('/delAcc', function(req, res){
  var o_id = new ObjectID(req.body._id);
  console.log(req.body);
  db.accounts.remove({_id: o_id})
  res.end()
})


// server listen
app.listen(3000, function(){
  console.log('Server is running!');
})

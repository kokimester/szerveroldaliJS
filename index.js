const express = require('express');
const app = express();
const session = require('express-session');
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/public',express.static('public'));
//app.use(express.static('static'));

app.use(session({
  secret: 'ersfertbdrtyhhj',
}));

/*app.use((req,res,next) => {
  console.log(Date.now());
  console.log(req.session);
});*/


require('./routes/index')(app);

app.use((err,req,res,next) => {
  res.end('Problem....');
  console.log(err);
})

var server = app.listen(3000, function () {
    console.log('Listening on port: 3000');
});
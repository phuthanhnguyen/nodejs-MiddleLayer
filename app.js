var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var login = require('./routes/login');
var getoffers = require('./routes/getoffer');
var uploadFile = require('./routes/uploadfile');
var fs = require('fs');
var DIR = __dirname+'./uploads';
var upload = multer({dest: DIR});
var apply = require('./routes/apply');
var gestionCV = require('./routes/gestionCV');
var getCandidates = require('./routes/getCandidates');
var setDecision = require('./routes/setDecision');
var getConventions = require('./routes/getConvention');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
}
app.use(cors(corsOptions));

/*app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));*/

app.post('/login', login.login);
app.post('/getoffers', getoffers.getoffers);
app.post('/filter', getoffers.filter);
app.post('/apply', apply.apply);
app.post('/appliedoffers', getoffers.appliedOffer);
app.post('/partneroffers', getoffers.partnerOffers);
app.post('/getcandidates', getCandidates.getCandidates);
app.post('/deletecv', gestionCV.deleteCV);
app.post('/setdecision', setDecision.setDecision);
app.post('/getapplications', getCandidates.getApplications);
app.post('/getapplicationscc', getCandidates.getApplicationsCC);
app.post('/getstudentfromapp', login.getStudentFromApp);
app.post('/getofferfromapp', getoffers.getOfferFromApp);
app.post('/getconventions', getConventions.getConventions);

app.get('/uploadfile', function (req, res) {
  res.end('file catcher example');
});

app.post('/uploadfile', multer({dest: "./uploads/"}).array("uploads", 12), function(req, res) {
    res.send(200);
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

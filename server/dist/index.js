"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.set('PORT', process.env.PORT || 4000);
app.use((0, _morgan.default)('dev'));
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.get('/', function (req, res) {
  res.send({
    title: 'Welcome to EC2'
  });
});
app.listen(app.get('PORT'), function () {
  console.log(app.get('PORT'), '번 포트에서 대기중');
});
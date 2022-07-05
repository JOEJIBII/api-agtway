const controller = require('../controllers/server.controller')

module.exports = function(app) {
    app.post('/getwithdrawhistory', controller.getwithdrawhistory);
    app.post('/', controller.getwithdrawhistory);
    ///getuserprofile/?username=value
}
const controller = require('../controllers/server.controller')

module.exports = function(app) {
    app.post('/', controller.getmyprofile);
    //app.post('/', controller.login);
    ///getuserprofile/?username=value
}
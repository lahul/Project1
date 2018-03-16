

module.exports = function(app){
    
    app.use('/api/todo/', require('../controllers/apicontroller.js'));
    }

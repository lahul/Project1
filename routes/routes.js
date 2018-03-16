

module.exports = function(app){
    console.log('abv');
    app.use('/api/todo', require('../controllers'));
    }

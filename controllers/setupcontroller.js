

module.exports = function(app){

    app.get('/api/setup/',function(req,res){

        var starttodo= [
            {
                username : "test",
                toDo : "Lunch",
                isDone : false,
                isAttachment : false
            },
            {
                username : "test",
                toDo : "work",
                isDone : false,
                isAttachment : false 
            },
            {
                username : "test",
                toDo : "sleep",
                isDone : false,
                isAttachment : false
            }
        ];

        todo.create(starttodo,function(err,result){
            res.send(result);
        });
    });
};
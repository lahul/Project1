
var mysql=require('mysql');
var fs = require('fs');
router = require("express").Router();

var data=[{
    "id": 1,
    "name":"raj",
    "place":"kinnigoli"
},
{
    "id": 2,
    "name":"kumar",
    "place":"kinnigoli"
}]
console.log('adffgaa');
module.exports = function(app){
    console.log('adffgaa');
    router.get('/api/todo',function(req,res){
        console.log('abv');
        data.forEach(function(item){
                res.send(item);
        });
        });
/*
    app.get('/api/to/:city',function(req,res){
        
        con.query("select * from city where city_name = "+mysql.escape(req.params.city), function(err,results){
            if(err) throw err;
            res.send(results);
        });
    });*/
/*
    app.get('/api/todo/:id',function(req,res){
        todos.findById({_id : req.params.id},function(err,results){
            if(err) throw err;
            res.send(results);
        });
    });

    app.post('/api/todo', function(req,res){

        if(req.body.id){
            todos.findByIdAndUpdate(req.body.id,{
                todo:req.body.todo,
                isDone:req.body.isDone,
                isAttachment:req.body.isAttachment },function(err,results){
                    if(err) throw err;
                    res.send('Success');
                });
        }
        else{
            var newtodo = todos({
                username : 'test',
                toDo : req.body.todo,
                isDone : req.body.isDone,
                isAttachment : req.body.isAttachment
            })
            newtodo.save(function(err){
                if(err) throw err;
                res.send('success');
            });
        }
    });

    app.delete('/api/delete',function(req, res){
        todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('success');
        })
    })*/
}
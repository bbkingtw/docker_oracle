var express=require('express')
var argv=require('optimist').argv
var app=express()
var oracledb=require('oracledb')
var port=argv.port||1234
console.log(oracledb);

app.get('/',function(req,res){
        get_wip(function(err,doc){
                res.send({err:err,doc:doc});
        });
});
console.log('listen at',port);
return app.listen(port);

function get_wip(cb) {
        oracledb.getConnection({
                user          : "system",
                password      : "oracle",
                //connectString : "localhost/XE"
                connectString : "XE"
        }, function(err, connection) {
                if (err) { console.error(err.message); return; }

                connection.execute(
                        "SELECT * " +
                        "FROM dm_wip_bt " +
                        "WHERE 1=1--manager_id < :id",
                        [],cb
                )
        });
}


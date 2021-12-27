const mysql = require ('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_crude',
    port: '8889'
});

mysqlConnection.connect( err => {

    if(err){
        console.log('Error en database: ', err);
        return;
        
    }else{
        console.log('Database ok');
    }
})
module.exports = mysqlConnection;
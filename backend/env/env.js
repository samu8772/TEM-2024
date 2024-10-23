const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bn88kmv43bkeqqocvrjt-mysql.services.clever-cloud.com',
    user: 'uiyo2klhudooqzsl',
    password: 'FOavQNekXsGTZziyZawK',
    database: 'bn88kmv43bkeqqocvrjt',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;
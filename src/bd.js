const fs = require("fs");
const mysql=require('mysql');
const mysqlconexion=mysql.createConnection (
    {
        host:'peltserver.mysql.database.azure.com',
        user:'pelt@peltserver',
        password:'Clinshesh32',
        database:'final',
        port: 3306,
        ssl: {
            cert: fs.readFileSync("C:/Users/MSI/Documents/7mo Semestre/Arquitectura de sistemas II/Final/BaltimoreCyberTrustRoot.crt.pem"),
            rejectUnauthorized: true,
          },
    }
);

mysqlconexion.connect(function(err)
{
    if(err)
    {
        console.log(err);
        return;
    }

    else
    {
        console.log('Base de datos conectada');
    }
});
module.exports=mysqlconexion;

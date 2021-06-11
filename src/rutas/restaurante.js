const express=require('express');
const router=express.Router();
module.exports=router;
const mysqlconexion=require('../bd');
router.get('/Restaurante',(req,res)=>
{
    mysqlconexion.query('Select * from restaurantes',(err,
        rows,fields)=>
    {
        if(!err)
        {
            res.json(rows);
        }

        else
        {
            console.log(err);
        }
    }
    
)});

router.get('/Restaurante/:ID_Restaurante',(req,res)=>{
    const{ID_Restaurante}=req.params;
    console.log(ID_Restaurante);
    mysqlconexion.query('Select * from restaurantes where ID_Restaurante=?',[ID_Restaurante],(err,
        rows,fields)=>
    {
        if(!err)
        {
            res.json(rows);
        }

        else
        {
            console.log(err);
        }
    }
    
)});

router.post('/Restaurante',(req,res)=>{
    const{Nombre_Restaurante,Direccion_Restaurante,Telefono_Restaurante,Ciudad_Restaurante,Cantidad_Estrellas}=req.body;
    const query='insert into restaurantes (Nombre_Restaurante,Direccion_Restaurante,Telefono_Restaurante,Ciudad_Restaurante,Cantidad_Estrellas) values(?,?,?,?,?)';
    mysqlconexion.query(query,[Nombre_Restaurante,Direccion_Restaurante,Telefono_Restaurante,Ciudad_Restaurante,Cantidad_Estrellas], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Restaurante Almacenado'});
            }
            else{
                console.log(err);
            }
        }); 
 });
    
 /*router.put('/estudiante/:id',(req,res)=>{
    const{ name}=req.body;
    const{direccion}=req.body;
    const{telefono}=req.body;
    const{fecha_nacimiento}=req.body;
    const{id}=req.params;
    const query='CALL up_estudiante(?,?,?,?,?)';
    mysqlconexion.query(query,[id,name,direccion,telefono,fecha_nacimiento], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Estudiante Actualizado'});
            }
            else{
                console.log(err);
            }
        }); 
});*/

   
 router.delete('/Restaurante/:ID_Restaurante',(req,res)=>{
        const{ID_Restaurante}=req.params;
        console.log(ID_Restaurante);
    mysqlconexion.query('Delete from restaurantes where ID_Restaurante=?',[ID_Restaurante], (err,
        rows, fields)=>{
            if(!err)
            {
                res.json({Status:'Restaurante eliminado'});
            }
            else{
                console.log(err);
            }
        }); 
});
module.exports=router;  
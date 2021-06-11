const express=require('express');
const router=express.Router();
module.exports=router;
const mysqlconexion=require('../bd');
router.get('/Platillos',(req,res)=>
{
    mysqlconexion.query('Select * from platillo',(err,
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

router.get('/Platillos/:ID_Platillo',(req,res)=>{
    const{ID_Platillo}=req.params;
    console.log(ID_Platillo);
    mysqlconexion.query('Select * from platillo where ID_Platillo=?',[ID_Platillo],(err,
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

router.post('/Platillos',(req,res)=>{
    const{Nombre_Platillo,Descripcion,ID_Restaurante,Precio}=req.body;
    const query='insert into platillo (Nombre_Platillo,Descripcion,ID_Restaurante,Precio) values(?,?,?,?)';
    mysqlconexion.query(query,[Nombre_Platillo,Descripcion,ID_Restaurante,Precio], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Platillo Almacenado'});
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

   
 router.delete('/Platillos/:ID_Platillo',(req,res)=>{
        const{ID_Platillo}=req.params;
        console.log(ID_Platillo);
    mysqlconexion.query('Delete from platillo where ID_Platillo=?',[ID_Platillo], (err,
        rows, fields)=>{
            if(!err)
            {
                res.json({Status:'Platillo eliminado'});
            }
            else{
                console.log(err);
            }
        }); 
});
module.exports=router;
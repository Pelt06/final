const express=require('express');
const router=express.Router();
module.exports=router;
const mysqlconexion=require('../bd');
router.get('/Pedidos',(req,res)=>
{
    mysqlconexion.query('Select * from pedido',(err,
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

router.get('/Pedidos/:ID_Pedido',(req,res)=>{
    const{ID_Pedido}=req.params;
    console.log(ID_Pedido);
    mysqlconexion.query('Select * from pedido where ID_Pedido=?',[ID_Pedido],(err,
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

router.post('/Pedidos',(req,res)=>{
    const{Nombre_Cliente,Telefono_Cliente,Direccion_Cliente, ID_Platillo, Cantidad, Total}=req.body;
    const query='insert into pedido (Nombre_Cliente,Telefono_Cliente,Direccion_Cliente, ID_Platillo, Cantidad, Total) values(?,?,?,?,?,?)';
    mysqlconexion.query(query,[Nombre_Cliente,Telefono_Cliente,Direccion_Cliente, ID_Platillo, Cantidad, Total], (err,rows, fields)=>{
            if(!err)
            {
                res.json({Status: 'Pedido Almacenado'});
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

   
 router.delete('/Pedidos/:ID_Platillo',(req,res)=>{
        const{ID_Platillo}=req.params;
        console.log(ID_Platillo);
    mysqlconexion.query('Delete from pedido where ID_Platillo=?',[ID_Platillo], (err,
        rows, fields)=>{
            if(!err)
            {
                res.json({Status:'Pedido eliminado'});
            }
            else{
                console.log(err);
            }
        }); 
});
module.exports=router;
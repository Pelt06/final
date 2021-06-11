const express=require ('express');
const app=express();
app.use(express.json());

app.use(require('./rutas/restaurante'));
app.use(require('./rutas/platillo'));
app.use(require('./rutas/pedido'));

app.set('port',process.env.PORT || 3000);
app.listen(app.get('port'),()=>
{
    console.log('Puerto del servidor: ', app.get('port'));
})
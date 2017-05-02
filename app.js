const express=require('rexpress');
const app=express();

app.get('/',(req,res)=>{
	res.send('hello world')
});

app.listen(3000,(req,res)=>{
	console.log('服务器运行在3000端口')
})

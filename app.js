const  express =require("express") ;
const  dotenv =require("dotenv") ;
const  path =require("path") ;


dotenv.config();

const app =express();

 //Portfolio\dist
 //Portfolio\index.html
app.use(express.static(path.join( __dirname,'./Portfolio')))
app.use('*',function(req,res){
    res.sendFile(path.join( __dirname,'/Portfolio/index.html'))
})


const PORT =process.env.PORT;

app.listen(PORT,()=>{console.log(`Server is up oand Runnging on ${process.env.PORT}`);
})

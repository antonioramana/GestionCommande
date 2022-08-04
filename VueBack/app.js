const express= require("express");
const app=express();
const bodyParser=require("body-parser");
const mysql=require("mysql2");
const cors=require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"gestion"
    }
)

//get client

app.get("/Client/get",(req,res)=>{
    const sqlGet="SELECT * FROM client";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});
//delete client
app.delete("/Client/remove/:id",(req,res)=>{
    const{id}= req.params;
    const sqlDelete="DELETE FROM client WHERE numclient=?";
    const sqlDelete2="DELETE FROM commande WHERE numclient=?";
    db.query(sqlDelete,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
    db.query(sqlDelete2,id,(error,result)=>{
        if(error){
            console.log(error);
        }
    });
});
//create client

app.post("/Client/create",(req,res)=>{
    const{numclient,nom}=req.body;
    const sqlCreate="INSERT INTO client (numclient,nom) VALUES (?,?)";
    db.query(sqlCreate,[numclient,nom],(error,result)=>{
        if(error){
            console.log(error.sqlMessage);
            res.send(error.sqlMessage);
        }else{
            res.send(result); 
        }

    });
});
//client edit

app.put("/Client/Edit/:id",(req,res)=>{
    const{id}=req.params;
    const{nom}=req.body;
    const sqlCreate="UPDATE client SET nom=? Where numclient=?";
    db.query(sqlCreate,[nom,id],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});
//one client get 

app.get("/Client/get/:id",(req,res)=>{
    const{id}=req.params;
    const sqlCreate="SELECT * FROM client  Where numclient= ? OR nom LIKE '%"+id+"%' ";
    db.query(sqlCreate,id,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});

//get produit

app.get("/Produit/get",(req,res)=>{
    const sqlGet="SELECT * FROM produit";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});
//delete produit
app.delete("/Produit/remove/:id",(req,res)=>{
    const{id}= req.params;
    const sqlDelete="DELETE FROM produit WHERE numproduit=?";
    const sqlDelete2="DELETE FROM commande WHERE numproduit=?";
    db.query(sqlDelete,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
    db.query(sqlDelete2,id,(error,result)=>{
        if(error){
            console.log(error);
        }
    });
});
//create Produit

app.post("/Produit/create",(req,res)=>{
    const{numproduit,design,pu,stock}=req.body;
    const sqlCreate="INSERT INTO produit (numproduit,design,pu,stock) VALUE (?,?,?,?)";
    db.query(sqlCreate,[numproduit,design,pu,stock],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error.sqlMessage);
        }
        res.send(result);
    });
});
//Produit edit

app.put("/Produit/Edit/:id",(req,res)=>{
    const{id}=req.params;
    const{design,pu,stock}=req.body;
    const sqlGet="UPDATE produit SET design=? ,pu=?,stock=? Where numproduit=? ";
    db.query(sqlGet,[design,pu,stock,id],(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});
//one produit get 

app.get("/Produit/get/:id",(req,res)=>{
    const{id}=req.params;
    const sqlCreate="SELECT * FROM produit Where numproduit=? OR design LIKE '%"+id+"%'";
    db.query(sqlCreate,id,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});
//get Commande

app.get("/Commande/get",(req,res)=>{
    const sqlGet="SELECT * FROM commande ORDER BY date ASC";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});
//delete Commande
app.delete("/Commande/remove/:id",(req,res)=>{
    const{id}= req.params;
    const sqlDelete="DELETE FROM commande WHERE id=?";
    db.query(sqlDelete,id,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
});
//create commande

app.post("/Commande/create",(req,res)=>{
    const{numclient,numproduit,qte,date}=req.body;
    const sqlCreate="INSERT INTO commande (numclient,numproduit,qte,date) VALUE (?,?,?,?)";
    //const sqlEdit="UPDATE produit SET stock= stock - ? Where numproduit=? ";
    db.query(sqlCreate,[numclient,numproduit,qte,date],(error,result)=>{
        if(error){
            console.log(error.sqlMessage);
            res.send(error.sqlMessage);
        }
        res.send(result);
    });
    /*db.query(sqlEdit,[qte,numproduit],(error,result)=>{
        if(error){
            console.log(error.sqlMessage);
            res.send(error.sqlMessage);
        }
        res.send(result);
    });*/
});
//commande edit

app.put("/Commande/Edit/:id",(req,res)=>{
    const{id}=req.params;
    const{numclient,numproduit,qte,date}=req.body;
    const sqlCreate="UPDATE commande SET numclient=?,numproduit=?,qte=?,date=? Where id=?";
    db.query(sqlCreate,[numclient,numproduit,qte,date,id],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(result);
        }
    });
});
//one commande get 

app.get("/Commande/get/:id",(req,res)=>{
    const{id}=req.params;
    const sqlCreate="SELECT * FROM commande  Where id=? ";
    db.query(sqlCreate,id,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});

//produit commandé par un client entre 2 dates
app.get("/Commande/:id/:date1/:date2",(req,res)=>{
    const{id,date1,date2}=req.params;
    const sqlCreate="select distinct produit.design,produit.pu,SUM(commande.qte) AS sumQTE ,SUM(commande.qte)*pu AS Total from produit,commande,client where produit.numproduit=commande.numproduit and client.numclient=commande.numclient and client.numclient=? and commande.date between ? and ? GROUP BY produit.numproduit;";
    db.query(sqlCreate,[id,date1,date2],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(result);
        }
    });
});
//obtenir la facture d un client grace a son numero
app.get("/Facture/:id/:date",(req,res)=>{
    const{id,date}=req.params;
    const sqlCreate="select distinct produit.design, produit.pu, SUM(commande.qte) AS sumQTE,SUM(commande.qte)*pu AS Total,client.nom from produit,commande,client where produit.numproduit=commande.numproduit and client.numclient=commande.numclient and client.numclient=? and commande.date= ? GROUP BY produit.numproduit";
    db.query(sqlCreate,[id,date],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(result);
        }
    });
});
//obtenir CA d un client dans une facture
app.get("/Ca/:id/:date",(req,res)=>{
    const{id,date}=req.params;
    const sqlCreate="SELECT SUM(commande.qte*produit.pu) AS Ca  from produit,commande,client where produit.numproduit=commande.numproduit and client.numclient=commande.numclient and commande.date= ? and client.numclient=?";    
    db.query(sqlCreate,[date,id],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(result);
        }
    });
});

//obtenir le Chiffre d' affaire de chaque client dans un année
app.get("/Ca/:annee",(req,res)=>{
    const{annee}=req.params;
    const sqlCreate=" select client.numclient,client.nom, SUM(commande.qte*produit.pu) AS Ca  from produit,commande,client where produit.numproduit=commande.numproduit and client.numclient=commande.numclient and YEAR(commande.date)= ? GROUP by client.numclient";
    db.query(sqlCreate,[annee],(error,result)=>{
        if(error){
            console.log(error);
            res.send(error);
        }else{
            res.send(result);
        }
    });
});


app.listen(5000,()=>{console.log("server is running on the port 5000")});
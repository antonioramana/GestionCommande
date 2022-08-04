<template>
<div v-if="show">
  <div class="alert alert-danger">
    <strong>Alert!</strong> Veuillez entrer les 2 dates à recherchés.
  </div>
 </div> 
 <div class="container">
  <router-link to="/Commande/Create" class="btn btn-secondary">Nouveau Commande</router-link><br/><br/>
   <div class="find">
   <h3>Les produits commandés par un client entre 2 dates:</h3>
   <select v-model="commandeFind">
    <option v-for="cl in clientdata" :key="cl.numclient">{{cl.numclient}}</option>
   </select>
   <input type="date" v-model="date1">
   <input type="date" v-model="date2"><br/>
    <button @click="FindCommande()" class="btn btn-outline-secondary">Rechercher</button><br/><br/>
    </div>
    <h3>Table des Commandes :</h3>
    <table class="table">
            <thead class="thead-light">
            <tr>
                <td>Numero Client</td>
                <td>Numero Produit</td>
                <td>Quatité</td>
                <td>date</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
                <tr  v-for="commandedata in commandesdata" :key="commandedata.id">
                <td>{{commandedata.numclient}}</td>
                <td>{{commandedata.numproduit}}</td>
                <td>{{commandedata.qte}}</td>
                <td>{{commandedata.date}}</td>
                <td> <router-link :to="UrlEdit+commandedata.id" class="btn btn-outline-success">Modifier</router-link><button @click="deleteCommande(commandedata.id)" class="btn btn-outline-danger">supprimer</button></td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'CommandeTable',
  data(){
      return{
         show:false,
          clientdata:[],
          commandeFind:"",
          date1:"",
          date2:"",
          UrlEdit:"/Commande/Edit/",
          "commandesdata":[],
      }
  },
  mounted(){
          fetch("http://localhost:5000/Commande/get").then((data)=>data.json()).then((data)=>this.commandesdata=data);
          fetch("http://localhost:5000/Client/get").then((data)=>data.json()).then((data)=>{this.clientdata=data;this.commandeFind=data[0].numclient});  
  },
  methods:{
      fetchData(){
          fetch("http://localhost:5000/Commande/get").then((data)=>data.json()).then((data)=>this.commandesdata=data);  
         },
       deleteCommande(id){
      if(confirm("voulez-vous supprimer cette commande?")){
      axios.delete("http://localhost:5000/Commande/remove/"+id).then(function(){return window.location.reload()});
     }
    },
    FindCommande(){
      if(!(this.date1&&this.date2)){
        this.show=true;
    }else{
      this.$router.push("/Commande/Find/"+this.commandeFind+"/"+this.date1+"/"+this.date2);
    }
  },             
  }, 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=date], select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.find button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 14px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.find button:hover {  
  background-color: #45a049;
}

.find {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  display: inline-block;
  text-align:center;
  font-size:0.9em;
}

</style>

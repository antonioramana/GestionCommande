<template>
<div v-if="show">
  <div class="alert alert-danger">
    <strong>Alert!</strong> veuillez entrer le numéro ou nom recherché.
  </div>
 </div> 
 <div class="container">
   <router-link to="/Client/Create" class="btn btn-secondary">Nouveau Client</router-link><br/><br/>
   <div class="form-inline">
  <input type="text" v-model="clientFind" class="form-control form-control-sm-2" placeholder="Entrez le numéro ou nom d'un client..."><br/>
  <button @click="FindClient()" class="btn btn-outline-secondary">Rechercher</button><br/><br/>
   </div>
   <h3>Table des Clients :</h3>
    <table class="table">
            <thead class="thead-light">
              <tr>
                <th>Numero</th>
                <th>Nom</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
            <tr v-for="clientdata in clientsdata" :key="clientdata.numclient">
                <td>{{clientdata.numclient}}</td>
                <td>{{clientdata.nom}}</td>
                <td><router-link :to="UrlEdit+clientdata.numclient" class="btn btn-outline-success">Modifier</router-link><button v-on:click="deleteClient(clientdata.numclient)" class="btn btn-outline-danger">supprimer</button></td>
              </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ClientTable',
  data(){
      return{
        show:false,
        clientFind:"",
          UrlFind:"/Client/Find/",
          UrlEdit:"/Client/Edit/",
          "clientsdata":[],
      }
  },
  mounted(){
          fetch("http://localhost:5000/Client/get").then((data)=>data.json()).then((data)=>this.clientsdata=data);  
  },
  methods:{
    deleteClient(id){
      if(confirm("voulez-vous supprimer ce client?")){
      axios.delete("http://localhost:5000/Client/remove/"+id).then(function(){return window.location.reload()});
     }
    },
  FindClient(){
    if(!this.clientFind){
      this.show=true;
    }else{
         this.$router.push("/Client/Find/"+this.clientFind);
    }
  },      
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

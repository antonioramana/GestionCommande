<template>
 <div class="container">
  <router-link to="/Client/" class="btn btn-secondary">Table Client</router-link><br/><br/>
    <h3>Résultat du recherche :</h3>
    <table class="table" v-if="clientsdata.length!=0">
            <thead class="thead-light">
              <tr>
                <td>Numero</td>
                <td>Nom</td>
                <td></td>
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
        <div v-else class="alert alert-danger">
          Client non trouvé ...
        </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ClientFind',
  data(){
      return{
          id:this.$route.params.id,
          UrlEdit:"/Client/Edit/",
          "clientsdata":[],
      }
  },
  mounted(){
          fetch("http://localhost:5000/Client/get/"+this.id).then((data)=>data.json()).then((data)=>this.clientsdata=data);
  },
  methods:{
    deleteClient(id){
      if(confirm("voulez-vous supprimer ce client?")){
      axios.delete("http://localhost:5000/Client/remove/"+id).then(function(){return window.location.reload()});
     }
    }
        
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

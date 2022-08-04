<template>
 <div class="container">
 <router-link to="/Commande" class="btn btn-outline-secondary">Table Commande</router-link><br/><br/>
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>AJout d'un Nouveau Commande :</h3><br/>
    <form @submit="createCommande()">
        <div class="form-group">
          <label for="">Numero Client :</label>
             <select v-model="createdata.numclient" class="form-control">
             <option v-for="clientdata in clientsdata" v-bind:key="clientdata.numclient">{{clientdata.numclient}}</option>
            </select>     
          </div>  
          <div class="form-group">
            <label for="">Numero Produit :</label> 
            <select  v-model="createdata.numproduit" class="form-control">
             <option  v-for="produitdata in produitsdata" v-bind:key="produitdata.numproduit">{{produitdata.numproduit}}</option>
            </select> 
            </div>    
           <div class="form-group">
             <label for="">Quatité :</label> <input type="number"  v-model="createdata.qte" class="form-control" min="0" placeholder="Entrez la Quatité..." required>
          </div>
           <div class="form-group">
        <label for="">Date :</label> <input type="date" v-model="createdata.date" class="form-control" required><br/>
         </div>
        <input type="submit" value="Enregister" class="input-btn">
    </form>
    <div class="col-sm-3"></div>
    </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'CommandeCreate',
   data(){
    return{
      clientsdata:[],
      produitsdata:[],
      "createdata":{
      "numclient":"",
      "numproduit":"",
      "qte":"",
      "date":"",
        },}
  },
   mounted(){
          fetch("http://localhost:5000/Client/get").then((data)=>data.json()).then((data)=>{this.clientsdata=data;this.createdata.numclient=data[0].numclient});  
          fetch("http://localhost:5000/Produit/get").then((data)=>data.json()).then((data)=>{this.produitsdata=data;this.createdata.numproduit=data[0].numproduit});  
  },
  methods:{
    createCommande(){
       axios.post("http://localhost:5000/Commande/create",this.createdata).then(function(error){console.log(error.data)});
         this.$router.push("/Commande");
        }
},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

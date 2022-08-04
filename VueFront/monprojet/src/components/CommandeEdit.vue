<template>
 <div class="container">
  <router-link to="/Commande" class="btn btn-outline-secondary">Table Commande</router-link><br/><br/>
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>Modification d'une Commande :</h3><br/>
    <form @submit="editCommande()">
        <div class="form-group">
         <label for="">Numero Client</label>
             <select v-model="editdata.numclient" class="form-control">
             <option v-for="clientdata in clientsdata" v-bind:key="clientdata.numclient">{{clientdata.numclient}}</option>
            </select>   
          </div>   
          <div class="form-group">
            <label for="">Numero Produit</label> 
            <select  v-model="editdata.numproduit" class="form-control">
             <option  v-for="produitdata in produitsdata" v-bind:key="produitdata.numproduit">{{produitdata.numproduit}}</option>
            </select> 
            </div>   
          <div class="form-group">  
        <label for="">Quatité</label> <input type="number"  v-model="editdata.qte" class="form-control" required>
        </div>
        <div class="form-group">
        <label for="">Date</label> <input type="date" v-model="editdata.date" class="form-control" required><br/>
        </div>
        <input type="submit" value="Modifier" class="input-btn">
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
      id:this.$route.params.id,
      commandesdata:[],
      clientsdata:[],
      produitsdata:[],
      "editdata":{
      "numclient":"",
      "numproduit":"",
      "qte":"",
      "date":"",
        },}
  },
   mounted(){
          fetch("http://localhost:5000/Commande/get/"+this.id).then((data)=>data.json()).then((data)=>{this.commandesdata=data;this.editdata.numclient=data[0].numclient;this.editdata.numproduit=data[0].numproduit;this.editdata.qte=data[0].qte;this.editdata.date=data[0].date;});  
          fetch("http://localhost:5000/Client/get").then((data)=>data.json()).then((data)=>{this.clientsdata=data;});  
          fetch("http://localhost:5000/Produit/get").then((data)=>data.json()).then((data)=>{this.produitsdata=data;});  
  },
  methods:{
    editCommande(){
       axios.put("http://localhost:5000/Commande/Edit/"+this.id,this.editdata);
         this.$router.push("/Commande");
        }
},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

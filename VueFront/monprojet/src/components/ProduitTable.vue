<template>
<div v-if="show">
  <div class="alert alert-danger">
    <strong>Alert!</strong> Veuillez entrer le numéro ou le nom du produit à recherché...
  </div>
 </div> 
 <div class="container">
  <router-link to="/Produit/Create" class="btn btn-secondary">Nouveau Produit</router-link><br/><br/>
  <div class="form-inline">
  <input type="text" v-model="produitFind" class="form-control form-control-sm-2" placeholder="Entrez le numéro ou design de produit..."><br/>
  <button @click="FindProduit()" class="btn btn-outline-secondary">Rechercher</button><br/><br/>
  </div>
    <h3>Table des Produits :</h3>
    <table class="table">
            <thead class="thead-light">
            <tr>
                <td>Numero</td>
                <td>Design</td>
                <td>Pu</td>
                <td>Stock</td>
                <td></td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="produitdata in produitsdata" :key="produitdata.numproduit">
                <td>{{produitdata.numproduit}}</td>
                <td>{{produitdata.design}}</td>
                <td>{{produitdata.pu}}</td>
                <td>{{produitdata.stock}}</td>
                <td><router-link :to="UrlEdit+produitdata.numproduit" class="btn btn-outline-success">Modifier</router-link><button @click="deleteProduit(produitdata.numproduit)" class="btn btn-outline-danger">supprimer</button></td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProduitTable',
  data(){
      return{
        show:false,
        produitFind:"",
         UrlEdit:"/Produit/Edit/",
          "produitsdata":[],
      }
  },
  mounted(){
          fetch("http://localhost:5000/Produit/get").then((data)=>data.json()).then((data)=>this.produitsdata=data);  
  },
  methods:{
        deleteProduit(id){
      if(confirm("voulez-vous supprimer ce produit?")){
      axios.delete("http://localhost:5000/Produit/remove/"+id).then(function(){return window.location.reload()});     }
    },
   FindProduit(){
     if(!this.produitFind){
       this.show=true;
     }else{
    this.$router.push("/Produit/Find/"+this.produitFind);
  }
 },
        
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

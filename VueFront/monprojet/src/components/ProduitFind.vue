<template>
 <div class="container">
  <router-link to="/Produit" class="btn btn-secondary">Table Produit</router-link><br/><br/>
    <h3>Résultat du recherche :</h3>
    <table class="table" v-if="produitsdata.length!=0">
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
                <td><router-link :to="UrlEdit+produitdata.numproduit"  class="btn btn-outline-success">Modifier</router-link><button @click="deleteProduit(produitdata.numproduit)"  class="btn btn-outline-danger">supprimer</button></td>
                </tr>
            </tbody>
        </table>
        <div v-else class="alert alert-danger">
          Aucun Produit trouvé...
        </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProduitFind',
  data(){
      return{
          id: this.$route.params.id,
         UrlEdit:"/Produit/Edit/",
          "produitsdata":[],
      }
  },
  mounted(){
          fetch("http://localhost:5000/Produit/get/"+this.id).then((data)=>data.json()).then((data)=>this.produitsdata=data);  
  },
  methods:{
        deleteProduit(id){
      if(confirm("voulez-vous supprimer ce produit?")){
      axios.delete("http://localhost:5000/Produit/remove/"+id).then(function(){return window.location.reload()});     }
    },
        
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

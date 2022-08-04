<template>
 <div class="container">
  <router-link to="/Produit" class="btn btn-outline-secondary">Table Produit</router-link> 
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>AJout d'un Nouveau Produit</h3><br/>
    <form @submit="createProduit()">
      <div class="form-group">
        <label for="">Numero :</label> <input type="text" v-model="createadata.numproduit" class="form-control" placeholder="Entrez le numéro..." required>
        </div>
        <div class="form-group">
        <label for="">Design :</label> <input type="text" v-model="createadata.design" class="form-control" placeholder="Entrez le design..." required>
         </div>
         <div class="form-group">
        <label for="">Pu :</label> <input type="number" v-model="createadata.pu" class="form-control" min="0" placeholder="Entrez le pu..." required>
        </div>
        <div class="form-group">
        <label for="">Stock :</label> <input type="number" v-model="createadata.stock" class="form-control" min="0" placeholder="Entrez le stock... " required><br/>
        </div>
        <input type="submit" value="Enregistrer" class="input-btn">
    </form>
     <div class="col-sm-3"></div>
    </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: 'ProduitCreate',
  data(){
    return{
      "createadata":{
        "numproduit":"",
        "design":"",
        "pu":"",
        "stock":"",
      },
    }
  },
  methods:{
    createProduit(){
      axios.post("http://localhost:5000/Produit/create",this.createadata).then(function(error){console.log(error.data)});
       this.$router.push("/Produit");
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

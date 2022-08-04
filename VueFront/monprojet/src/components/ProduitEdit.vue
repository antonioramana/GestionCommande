<template>
 <div class="container">
  <router-link to="/Produit" class="btn btn-outline-secondary">Table Produit</router-link> 
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>Modification Produit {{id}}</h3><br/>
    <form @submit="editProduit()">
    <div class="form-group">
        <label for="">Design</label> <input type="text" v-model="editdata.design" class="form-control" required>
      </div> 
      <div class="form-group">
        <label for="">Pu</label> <input type="number" v-model="editdata.pu" class="form-control" required>
        </div>
        <div class="form-group">
        <label for="">Stock</label> <input type="number" v-model="editdata.stock" class="form-control" required><br/>
        </div>
        <input type="submit" value="Modifier" class="input-btn">
    </form>
    <div class="col-sm-3"></div>
    </div>
</div>
</div>
</template>

<script>
import axios from "axios"
export default {
  name: 'ProduitEdit',
  data(){
    return{
      id:this.$route.params.id,
      "editdata":{
        "design":"",
        "pu":"",
        "stock":"",
      },
    }
  },
   mounted(){
    fetch("http://localhost:5000/Produit/get/"+this.id).then((data)=>data.json()).then((data)=>{this.editdata.design=data[0].design;this.editdata.pu=data[0].pu;this.editdata.stock=data[0].stock;});
  }, 
    methods:{
    editProduit(){
      axios.put("http://localhost:5000/Produit/Edit/"+this.id,this.editdata).then(function(error){console.log(error.data)});      
        this.$router.push("/Produit");
        },
},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

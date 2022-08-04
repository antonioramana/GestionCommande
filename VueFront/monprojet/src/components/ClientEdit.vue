<template>
 <div class="container">
   <router-link to="/Client" class="btn btn-outline-secondary">Table Client</router-link> 
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>Modification du Client {{id}} :</h3><br/>
    <form @submit="editClient()">
    <div class="form-group">
        <label for="">Nom</label> <input type="text" v-model="editdata.nom" class="form-control" required><br/>
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
  name: 'ClientEdit',
  data(){
    return{
      id:this.$route.params.id,
      "editdata":{
      "nom":"",
        },}
  },
  mounted(){
    fetch("http://localhost:5000/Client/get/"+this.id).then((data)=>data.json()).then((data)=>this.editdata.nom=data[0].nom);
  }, 
  methods:{
    editClient(){      
      axios.put("http://localhost:5000/Client/Edit/"+this.id,this.editdata);
        this.$router.push("/Client");
        },
},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

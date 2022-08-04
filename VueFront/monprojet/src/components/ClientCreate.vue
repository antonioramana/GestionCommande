<template>
 <div class="container">
  <router-link to="/Client/" class="btn btn-outline-secondary">Table Client</router-link><br/><br/>
    <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
    <h3>AJout d'un Nouveau Client :</h3><br/>
    <form @submit="createClient()">
    <div class="form-group">
        <label for="">Numero:</label> <input type="text" v-model="createdata.numclient" class="form-control" placeholder="Entrez le numéro. .."  required>
    </div>
    <div class="form-group">
        <label for="">Nom:</label> <input type="text" v-model="createdata.nom" class="form-control" placeholder="Entrez le nom..." required><br/>
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
  name: 'ClientCreate',
  data(){
    return{
      "resp":"",
      "createdata":{
      "numclient":"",
      "nom":"",
        },}
  },
  methods:{
    createClient(){  
      axios.post("http://localhost:5000/Client/create",this.createdata).then((error)=>{this.resp=error.data; alert(this.resp);})
      this.$router.push("/Client");
        }

},
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

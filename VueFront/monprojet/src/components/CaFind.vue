<template>
 <div class="container">
  <router-link to="/Facture/" class="btn btn-outline-secondary">Retour</router-link><br/><br/>
    <h3>Chiffre d' affaire de chaque Client pendant l'année {{annee}}:</h3><br/><br/>
    <table class="table" v-if="CAsdata.length!=0">
            <thead class="thead-light">
                <td>Numéro</td>
                <td>Nom</td>
                <td>Chiffre d' affaire</td>
            </thead>
            <tbody>
                <tr  v-for="CAdata in CAsdata" :key="CAdata.numclient">
                <td>{{CAdata.numclient}}</td>
                <td>{{CAdata.nom}}</td>
                <td>{{CAdata.Ca}}</td>
                </tr>
            </tbody>
        </table>
        <div class="alert alert-danger" v-else>
        Aucun client effectue de commande sur de cette année...
        </div>
</div>
</template>
<script>
export default {
  name: 'CaFind',
  data(){
    return{
      annee:this.$route.params.annee,
      CAsdata:[],
      nom:"",
      ca:"",
      }
  },
  mounted(){
    fetch("http://localhost:5000/Ca/"+this.annee).then((data)=>data.json()).then((data)=>this.CAsdata=data);
  }, 
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

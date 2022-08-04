<template>
 <div class="container">
  <router-link to="/Commande" class="btn btn-secondary">Table Commande</router-link><br/><br/>
    <h3>Produits commandés par {{id}} entre {{date1}} et {{date2}}:</h3>
    <table class="table" v-if="commandesdata.length!=0">
            <thead class="thead-light">
            <tr>
                <td>Design</td>
                <td>pu</td>
                <td>Total des quantités</td>
                <td>Total prix</td>
                
            </tr>
            </thead>
            <tbody>
                <tr  v-for="commandedata in commandesdata" :key="commandedata.numclient">
                <td>{{commandedata.design}}</td>
                <td>{{commandedata.pu}}</td>
                <td>{{commandedata.sumQTE}}</td>
                <td>{{commandedata.Total}}</td>
                </tr>
            </tbody>
        </table>
        <div v-else class="alert alert-danger">Aucun produit commandé...</div>
</div>
</template>

<script>
export default {
  name: 'CommandeFind',
  data(){
      return{
           id:this.$route.params.id,
           date1:this.$route.params.date1,
          date2:this.$route.params.date2,
          UrlEdit:"/Commande/Edit/",
          "commandesdata":[],
      }
  },
  mounted(){
    fetch("http://localhost:5000/Commande/"+this.id+"/"+this.date1+"/"+this.date2).then((data)=>data.json()).then((data)=>this.commandesdata=data);
  
  },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

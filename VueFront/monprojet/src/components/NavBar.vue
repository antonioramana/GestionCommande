<template>
 <div>
 <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
   <li :class="activeTab=='Home'?'active':''"><router-link to="/" class="nav-link" @click="activeTab='Home'">Acueil</router-link></li>    
   <li :class="activeTab=='Client'?'active':''"><router-link to="/Client" class="nav-link" @click="activeTab='Client'">Client</router-link></li>    
   <li :class="activeTab=='Produit'?'active':''"><router-link to="/Produit" class="nav-link" @click="activeTab='Produit'">Produit</router-link></li>    
   <li :class="activeTab=='Commande'?'active':''"><router-link to="/Commande" class="nav-link" @click="activeTab='Commande'">Commande</router-link></li>    
   <li :class="activeTab=='Facture'?'active':''"><router-link to="/Facture" class="nav-link" @click="activeTab='Facture'">Traitement</router-link></li>    
 </ul>
 </nav>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return{
      activeTab:"Home",
     }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    

}
/*a {
  color: #42b983;
}*/
</style>

<template>
<div class="container">
 <div class="part1">
    <h3>Bienvenu sur notre projet sur la gestion du commande</h3>
       Cette application nous permet de gerer les clients,  les produits ,les commandes et les factures  des clients dans un point de vente... 
   </div>
   <div class="part2">  
      <a href="https://github/antonioramana" class="btn btn-outline-success">Gihub du developpeur</a>
</div> 
</div>
</template>

<script>
export default {
  name:'HomeComp',
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  text-decoration:none;
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin:10px;
}
 .part1{
  display: inline-block;  
 }
 .part2{
   margin-top:20px;
  display: inline-block;  
 }
   

</style>

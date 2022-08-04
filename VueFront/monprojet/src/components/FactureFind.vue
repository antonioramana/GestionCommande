<template>
<router-link to="/Facture/" class="btn btn-outline-secondary">Retour</router-link><br/><br/>
 <div v-bind:id="facture" class="container">
 <h4>Facture :</h4><br/><br/>
  <div class="info">
  <div class="right">Facture Numéro : FCT-{{numfact}}/{{date}}</div>
  <div class="right">Date : {{date}}</div>
  <div class="left">Numéro client: {{id}}</div>
  <div class="left">Nom: {{nom}}</div>
   </div><br/>
    <table class="table">
            <thead class="thead-light">
            <tr>
                <td>Design</td>
                <td>Pu</td>
                <td>Quantité</td>
                <td>Montant</td>
                
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
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td>Total</td>
                <td>{{total}}</td>
            </tr>
            </tfoot>
        </table>
  <div class="lettre">Arreté à la somme de </div>        
</div>
<button @click="genererPdf()" class="btn btn-secondary">Télécharger en pdf</button>

</template>
<script>
import jsPdf from "jspdf";
export default {
  name: 'CommandeFind',
  data(){
      return{
          facture:"facture",
          numfact:Math.floor(Math.random()*100000),
          nom:"",
          total:0,
           id:this.$route.params.id,
           date:this.$route.params.date,
          "commandesdata":[],
      }
  },
  mounted(){
    fetch("http://localhost:5000/Facture/"+this.id+"/"+this.date).then((data)=>data.json()).then((data)=>{this.commandesdata=data;this.nom=data[0].nom;});  
    fetch("http://localhost:5000/Ca/"+this.id+"/"+this.date).then((data)=>data.json()).then((data)=>{this.total=data[0].Ca});  
  },
    methods:{
     genererPdf(){
      var doc= new jsPdf("p","pt","a4");
      doc.html(document.querySelector("#facture"),{
        callback: function(pdf){
          pdf.save("Facture.pdf");
        }
      })
         }
    },
        
  
    
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
  font-size: 1.2em;
  width:60%;
}
.lettre{
  text-align:left;
  font-size: 1.5em;
  width:60%;
}
.table{
  width:60%;
  
}
.right{
  margin-left:30%;
}
.left{
  text-align:left;
}
button{
  margin-top:10px;
}
</style>

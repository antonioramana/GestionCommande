<template >
<div v-if="show" class="alert  alert-danger">
  {{textshow}}
</div>
<div class="container">
 <div class="find">
    <h3>Obtenir la facture d'un client:</h3>
        <label for="">Numero :</label> <select v-model="createdata.numclient1">
                                            <option v-for="clientdata in clientsdata" v-bind:key="clientdata.numclient">{{clientdata.numclient}}</option>
                                    </select>
        <label for="">Date :</label> <input type="date" v-model="createdata.date">
        <button @click="getFacture()">Obtenir Facture</button>
</div>
  <div class="find">  
      <h3>Obtenir les chiffres d' affaire de chaque client dans une année :</h3>
  
        <label for="">Annee :</label> <input type="number" v-model="createdata.annee" min="0">
        <button @click="getCa()">Obtenir les chiffres d'affaire</button>
    
</div>
</div>
</template>

<script>
export default {
  name:'FacTure',
   data(){
    return{
      show:false,
      textshow:"",
      clientsdata:[],
      "createdata":{
      "numclient1":"",
      "date":"",
      "annee":"",
        },}
  },
   mounted(){
          fetch("http://localhost:5000/Client/get").then((data)=>data.json()).then((data)=>{this.clientsdata=data;this.createdata.numclient1=data[0].numclient;this.createdata.numclient2=data[0].numclient;});  
  },
   methods:{
  getFacture(){
      if(!this.createdata.date){
        this.show=true;
        this.textshow="Veuillez entrer la date de facture...";
      }else{
    this.$router.push("/Facture/Find/"+this.createdata.numclient1+"/"+this.createdata.date)
  }
  },
    getCa(){
      if(!this.createdata.annee){
        this.show=true;
        this.textshow="Veuillez entrer l' année du chiffre d' affaire...";
      }else{
    this.$router.push("/Ca/Find/"+this.createdata.annee);
    }
  },      
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
width:50%;
}
input[type=text],input[type=number], select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: grey;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.find {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align:center;
  margin:40px;
}

</style>

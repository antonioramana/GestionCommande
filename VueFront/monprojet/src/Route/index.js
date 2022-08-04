import{createRouter,createWebHistory} from "vue-router";
import HomeComp from '../components/Home.vue';
import ClientCreate from '../components/ClientCreate.vue';
import ClientTable from '../components/ClientTable.vue';
import ClientEdit from '../components/ClientEdit.vue';
import ClientFind from '../components/ClientFind.vue';
import ProduitCreate from '../components/ProduitCreate.vue';
import ProduitTable from '../components/ProduitTable.vue';
import ProduitEdit from '../components/ProduitEdit.vue';
import ProduitFind from '../components/ProduitFind.vue';
import CommandeCreate from '../components/CommandeCreate.vue';
import CommandeEdit from '../components/CommandeEdit.vue';
import CommandeTable from '../components/CommandeTable.vue';
import CommandeFind from '../components/CommandeFind.vue';
import Facture from '../components/Facture.vue';
import FactureFind from '../components/FactureFind.vue';
import CaFind from '../components/CaFind.vue';
const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component: HomeComp},
        {path:'/Client/Create',component: ClientCreate},
        {path:'/Client',component: ClientTable},
        {path:'/Client/Edit/:id',component: ClientEdit},
        {path:'/Client/Find/:id',component: ClientFind},
        {path:'/Produit/Create',component: ProduitCreate},
        {path:'/Produit',component: ProduitTable},
        {path:'/Produit/Edit/:id',component: ProduitEdit},
        {path:'/Produit/Find/:id',component: ProduitFind},
        {path:'/Commande/Create',component: CommandeCreate},
        {path:'/Commande',component: CommandeTable},
        {path:'/Commande/Edit/:id',component: CommandeEdit},
        {path:'/Commande/Find/:id/:date1/:date2',component: CommandeFind},
        {path:'/Facture',component: Facture},
        {path:'/Facture/Find/:id/:date',component: FactureFind},
        {path:'/Ca/Find/:annee',component: CaFind},
    ],
    
})
export default router;
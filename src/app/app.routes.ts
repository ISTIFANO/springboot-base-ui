import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CreateProduitComponent } from './OpProduit/create-produit/create-produit.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: AppComponent },
    { path: 'produits', component: ProduitComponent } ,
        { path: 'ajouterProduct', component: CreateProduitComponent } 

];


import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.service'; 
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-produit',
  imports :[  RouterLink,NgFor,NgIf,CurrencyPipe],
  standalone : true,
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService,private router: Router) {}

  ngOnInit(): void {    
    this.loadProduit();
  }

  loadProduit(): void {

    this.produitService.getAllProducts().subscribe(
      (products) => {
        this.produits = products;        
      },
      (error) => {
        console.log(error);
      }
    );
  }
  supprimerProduit(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.deleteProduct(id).subscribe(() => {
        this.produits = this.produits.filter(p => p.id !== id);
        alert('Produit supprimé avec succès');
      });
    }
  }
  modifierProduit( id :number){
    this.router.navigate(['/produits/update',id]);
  }
}

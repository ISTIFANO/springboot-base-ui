import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.service'; 

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produit: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.loadProduit();
  }

  loadProduit(): void {
    this.produitService.getAllProducts().subscribe(
      (products) => {
        this.produit = products;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { ProduitService } from '../../services/produit.service'; 
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports :[  RouterLink,NgFor,NgIf,CurrencyPipe],
  standalone : true,
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    console.log("kd");
    
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
}

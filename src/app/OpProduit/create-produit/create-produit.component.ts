import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { ProduitService } from '../../services/produit.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-produit',
  imports: [ReactiveFormsModule, CommonModule],
  standalone : true,
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css'] 
})
export class CreateProduitComponent implements OnInit {
  produitForm!: FormGroup;

  constructor(
    private produitservice: ProduitService,
    private formBuilder: FormBuilder 
  ) {}

  ngOnInit(): void {
    this.produitForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: [''],
      prix: [0, [Validators.required, Validators.min(0)]],
      quantite: [0, [Validators.required, Validators.min(0)]],
      image: [''],
      userId: [null, Validators.required]
    });
  }
  onSubmit(): void {
    if (this.produitForm.valid) {
      this.produitservice.addProduct(this.produitForm.value).subscribe({
        next: res => alert('Produit ajouter avec succ!'),
        error: err => alert('Erreur de l ajout du produit')
      });
    }
  }
}

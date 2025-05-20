import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private BaseUrl = 'api/produits';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.BaseUrl}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private BaseUrl = 'http://localhost:8080/api/produits';

  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.BaseUrl}`);
  }

  getProductById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.BaseUrl}/${id}`);
  }

  addProduct(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.BaseUrl}`, produit);
  }

  updateProduct(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.BaseUrl}/${id}`, produit);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BaseUrl}/${id}`);
  }
}

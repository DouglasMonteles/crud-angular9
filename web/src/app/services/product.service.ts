import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar, 
    private httpClient: HttpClient,
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', { 
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top', 
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.baseUrl, product)
      .pipe(
        map(obj => obj),
        catchError(error => this.errorHandle(error)),
      );
  }

  read(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseUrl)
      .pipe(
        map(obj => obj),
        catchError(error => this.errorHandle(error)),
      );
  }

  readById(id: string): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.baseUrl}/${id}`)
      .pipe(
        map(obj => obj),
        catchError(error => this.errorHandle(error)),
      );
  }

  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.httpClient.put<ProductModel>(url, product)
      .pipe(
        map(obj => obj),
        catchError(error => this.errorHandle(error)),
      );
  }

  delete(id: string): Observable<ProductModel> {
    return this.httpClient.delete<ProductModel>(`${this.baseUrl}/${id}`)
      .pipe(
        map(obj => obj),
        catchError(error => this.errorHandle(error)),
      );
  }

  errorHandle(error: any): Observable<any> {
    this.showMessage('Ocorreu um erro', true);
    return EMPTY;
  }

}

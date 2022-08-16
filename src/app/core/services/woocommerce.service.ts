import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RootObject } from '../interfaces/woo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  private readonly uri: string;
  constructor(private http: HttpClient) {
    this.uri = `${environment.wp_url}/wp-json/wc/store`;
  }

  getCart(): Observable<RootObject> {
    return this.http.get<RootObject>(`${this.uri}/cart?consumer_key=${environment.consumer_key}&consumer_secret=${environment.consumer_secret}`);
  }
}

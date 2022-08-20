import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {WooInterface} from '../interfaces/woo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  private readonly uri: string;
  private readonly accessApi = `consumer_key=${environment.consumer_key}&consumer_secret=${environment.consumer_secret}`;

  constructor(private http: HttpClient) {
    this.uri = `${environment.wp_url}/wp-json/wc/store`;
  }

  getCart(): Observable<WooInterface> {
    return this.http.get<WooInterface>(`${this.uri}/cart?${this.accessApi}`, {});
  }

  removeItem(key: string): Observable<WooInterface> {
    return this.http.post<WooInterface>(`${this.uri}/cart/remove-item?key=${key}&${this.accessApi}`, {});
  }
}

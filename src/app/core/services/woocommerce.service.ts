import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ProductInterface} from "@core/interfaces";

@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  private readonly uri: string;
  private readonly accessApi = `consumer_key=${environment.consumer_key}&consumer_secret=${environment.consumer_secret}`;

  constructor(private http: HttpClient) {
    this.uri = `${environment.wp_url}/wp-json/wc/store`;
  }

  removeItem(key: string): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(`${this.uri}/cart/remove-item?key=${key}&${this.accessApi}`, {});
  }
}

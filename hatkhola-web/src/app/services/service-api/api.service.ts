import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import * as endpoints from '../api.endpoints';
@Injectable()

export class TransactionService {
    private readonly ROOT_URL = "http://localhost:8083";

    constructor(private injector: Injector,
        private http: HttpClient) {

    }

    public fetchAllProducts(token: string): Observable<any> {
        const headers = new HttpHeaders({ 'Authorization': 'bearer ' + 'token' })
        return this.http.get<any>(this.ROOT_URL + endpoints.FETCH_ALL_PRODUCT, { headers });
    }



}
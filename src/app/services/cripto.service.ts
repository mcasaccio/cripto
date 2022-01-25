import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MarketsResponse } from "../interfaces/market.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CriptoService {
  constructor(private http: HttpClient) {}

  private _api = 'https://api.coingecko.com/api/v3'

  getAll(): Observable<MarketsResponse[]> {
    return this.http.get<MarketsResponse[]>(
      `${this._api}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
  }
}

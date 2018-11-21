import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Papel {
  sigla: string,
  desc: string,
  quantidade: number
}

@Injectable({
    providedIn: 'root'
})
export class CarteiraService {

    private uri = 'http://localhost:8000/api/carteira';
    constructor(private http: HttpClient) {

    }

    getCarteira() {
        return this.http.get<Papel[]>(this.uri)
    }
}

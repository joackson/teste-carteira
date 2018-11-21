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

  uri = 'http://localhost:8000/api/carteira';

  constructor(private http: HttpClient) {     
  }

  async getCarteira() {
    console.log("Recuperando carteira")
    let retorno = await this.http.get<Papel[]>('http://localhost:8000/api/carteira')
//    retorno.json().bpi[currency].rate;
    console.log("Aguardando...retorno")
    console.log(retorno)
    return retorno
  }

  
}

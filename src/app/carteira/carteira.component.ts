import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss'],
  animations: [routerTransition()]
})
export class CarteiraComponent implements OnInit {

  public carteira: Array<any> = [];

  constructor() {
    this.carteira.push(
      {
        sigla: 'PETR4',
        desc: 'Petrobrás',
        quantidade: 100
      }
    )

  }

  ngOnInit() {
  }
}

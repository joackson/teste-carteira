import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { CarteiraService, Papel } from './carteira.service';


@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss'],
  animations: [routerTransition()]
})
export class CarteiraComponent implements OnInit {

//  public carteira: Observable<Papel[]>;
public carteira;//: Observable<Papel[]>;

  constructor(private service : CarteiraService) {

    console.log("constructor --> recuperando" )

  }

  async ngOnInit() {

    await this.service.getCarteira().then(
      data => {
        console.log(data)
//        this.carteira = data
        data.subscribe(value =>  this.carteira = value, err => console.log(err), () => console.log('Done'))
      }).catch(err => console.error(err)).finally(() => console.log('Done carteira'))
 /*   this.carteira.push(
      {
        sigla: 'PETR4',
        desc: 'Petrobrás',
        quantidade: 100
      }
    )*/  }
    
}

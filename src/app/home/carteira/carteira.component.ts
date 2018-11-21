import { Component, OnInit } from '@angular/core';
import { CarteiraService, Papel } from './carteira.service';

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss']
})
export class CarteiraComponent implements OnInit {
    
    public carteira;

    constructor(private service : CarteiraService) {
    }
    
    ngOnInit() {
        this.service.getCarteira().subscribe(
            value => {
                this.carteira = value
                console.log(value)
            },
            err => console.log(err),
            () => console.log('Done')
        )
    }    
}

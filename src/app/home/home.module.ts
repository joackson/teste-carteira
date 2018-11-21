import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,  
        TranslateModule,     
        NgbDropdownModule.forRoot()
    ],
    declarations: [HomeComponent, SidebarComponent, HeaderComponent]
})
export class HomeModule {}

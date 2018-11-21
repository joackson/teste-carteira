import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, LoginRoutingModule],
    declarations: [LoginComponent]
})
export class LoginModule { }

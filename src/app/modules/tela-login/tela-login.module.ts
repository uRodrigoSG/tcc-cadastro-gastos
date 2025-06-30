import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TelaLoginRoutingModule } from './tela-login-routing.module';
import { TelaLoginComponent } from './tela-login.component';



@NgModule({
  declarations: [TelaLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    TelaLoginRoutingModule
  ]
})
export class TelaLoginModule { }

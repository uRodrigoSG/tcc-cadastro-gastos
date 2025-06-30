import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from '../components/cabecalho/cabecalho.component';
import { LoginComponent } from '../components/login/login.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from '../components/rodape/rodape.component';


@NgModule({
  declarations: [
    CabecalhoComponent,
    LoginComponent,
    RodapeComponent,
  ], 
  exports: 
  [
    CommonModule,
    RouterModule,
    CabecalhoComponent,
    RodapeComponent,
    LoginComponent,

  ],      
  imports: [CommonModule,
    RouterModule,]             
})
export class SharedModule {}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  standalone: false,  
  styleUrls: ['./cabecalho.component.css'] 
})
export class CabecalhoComponent {
  @Output() irParaLogin = new EventEmitter<void>();

  onChangeBotaoLogin(): void {
    this.irParaLogin.emit();
  }
}

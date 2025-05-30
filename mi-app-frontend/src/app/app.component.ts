import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    ToolbarModule,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-frontend';

  // Método dentro de la clase
  openWhatsapp() {
    window.open('https://wa.me/573042245899?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios.', '_blank');
  }
  openGmail() {
  window.location.href = 'c.guayabo@gmail.com?subject=Consulta&body=Hola, quiero más información sobre sus servicios.';
}

}

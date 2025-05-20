import { Component } from '@angular/core';
import { CardModule } from 'primeng/card'; // 👈 importa el módulo de PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // solo si aún no lo tienes en main.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CardModule // 👈 agrégalo aquí
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-app-frontend';
}


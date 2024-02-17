import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RakiComponent } from './raki/raki.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RakiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}

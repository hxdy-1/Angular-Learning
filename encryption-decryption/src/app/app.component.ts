import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncryptionComponent } from './encryption/encryption.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EncryptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'encryption-decryption';
}

import { Component } from '@angular/core';
import CryptoJS from 'crypto-js';
import { encrypt, decrypt } from '../utils/encryption';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encryption',
  templateUrl: './encryption.component.html',
  styleUrls: ['./encryption.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class EncryptionComponent {
  valueToEncrypt: string;
  encryptionKey: string;
  encryptedValue: string;

  encryptedValueToDecrypt: string;
  decryptionKey: string;
  decryptedValue: any;

  constructor() {}

  private generateKey(): string {
    return CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
  }

  encrypt(): void {
    if (!this.valueToEncrypt) {
      alert('Please enter a value to encrypt.');
      return;
    }
    this.encryptionKey = this.generateKey();
    this.encryptedValue = encrypt(this.valueToEncrypt, this.encryptionKey);
    console.log('Encrypted Value:', this.encryptedValue);
    console.log('Generated Key:', this.encryptionKey);
  }

  decrypt(): void {
    if (!this.encryptedValueToDecrypt || !this.decryptionKey) {
      alert('Please enter both encrypted value and key.');
      return;
    }
    console.log('Encrypted Value to Decrypt:', this.encryptedValueToDecrypt);
    console.log('Decryption Key:', this.decryptionKey);
    this.decryptedValue = decrypt(
      this.encryptedValueToDecrypt,
      this.decryptionKey
    );
    console.log('Decrypted Value:', this.decryptedValue);
  }
}

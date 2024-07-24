import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  constructor() {}

  encrypt(value: any, key: string): string {
    try {
      const iv = CryptoJS.lib.WordArray.random(16);
      const encrypted = CryptoJS.AES.encrypt(
        typeof value === 'object' ? JSON.stringify(value) : value,
        CryptoJS.enc.Hex.parse(key),
        { iv: iv }
      );
      return iv.toString() + ':' + encrypted.toString();
    } catch (error: any) {
      console.error('Encryption failed:', error.message);
      return '';
    }
  }

  decrypt(encryptedValue: string, key: string): any {
    try {
      const parts = encryptedValue.split(':');
      if (parts.length !== 2) {
        throw new Error('Invalid encrypted value format');
      }
      const iv = CryptoJS.enc.Hex.parse(parts[0]);
      const encryptedText = parts[1];
      const decrypted = CryptoJS.AES.decrypt(
        encryptedText,
        CryptoJS.enc.Hex.parse(key),
        { iv: iv }
      ).toString(CryptoJS.enc.Utf8);

      try {
        return JSON.parse(decrypted);
      } catch (error: any) {
        return decrypted;
      }
    } catch (error: any) {
      console.error('Decryption failed:', error.message);
      return '';
    }
  }
}

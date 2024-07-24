// import CryptoJS from 'crypto-js';

// export function encrypt(value: any, key: string): string {
//   try {
//     const iv = CryptoJS.lib.WordArray.random(16);
//     const encrypted = CryptoJS.AES.encrypt(
//       typeof value === 'object' ? JSON.stringify(value) : value,
//       CryptoJS.enc.Hex.parse(key),
//       { iv: iv }
//     );
//     return iv.toString() + ':' + encrypted.toString();
//   } catch (error) {
//     console.error('Encryption failed:', error.message);
//     return '';
//   }
// }

// export function decrypt(encryptedValue: string, key: string): any {
//   try {
//     const parts = encryptedValue.split(':');
//     if (parts.length !== 2) {
//       throw new Error('Invalid encrypted value format');
//     }
//     const iv = CryptoJS.enc.Hex.parse(parts[0]);
//     const encryptedText = parts[1];
//     const decrypted = CryptoJS.AES.decrypt(
//       encryptedText,
//       CryptoJS.enc.Hex.parse(key),
//       { iv: iv }
//     ).toString(CryptoJS.enc.Utf8);

//     try {
//       return JSON.parse(decrypted);
//     } catch (error) {
//       return decrypted;
//     }
//   } catch (error) {
//     console.error('Decryption failed:', error.message);
//     return '';
//   }
// }

import _0x4036f4 from 'crypto-js';

export function encrypt(_0x302edf, _0x120c13) {
  try {
    const _0x2d4aa7 = _0x4036f4['lib']['WordArray']['random'](0x10);
    const _0x4e61a2 = _0x4036f4['AES']['encrypt'](
      typeof _0x302edf === 'object' ? JSON['stringify'](_0x302edf) : _0x302edf,
      _0x4036f4['enc']['Hex']['parse'](_0x120c13),
      { iv: _0x2d4aa7 }
    );
    return _0x2d4aa7['toString']() + ':' + _0x4e61a2['toString']();
  } catch (_0x4b7f21) {
    console['error']('Encryption\x20failed:', _0x4b7f21['message']);
    return '';
  }
}

export function decrypt(_0x1da0fa, _0x5714b2) {
  try {
    const _0x45f090 = _0x1da0fa['split'](':');
    if (_0x45f090['length'] !== 0x2) {
      throw new Error('Invalid\x20encrypted\x20value\x20format');
    }
    const _0x1c370a = _0x4036f4['enc']['Hex']['parse'](_0x45f090[0x0]);
    const _0x2bde91 = _0x45f090[0x1];
    const _0x432c29 = _0x4036f4['AES']
      ['decrypt'](_0x2bde91, _0x4036f4['enc']['Hex']['parse'](_0x5714b2), {
        iv: _0x1c370a,
      })
      ['toString'](_0x4036f4['enc']['Utf8']);
    try {
      return JSON['parse'](_0x432c29);
    } catch (_0x20d2e6) {
      return _0x432c29;
    }
  } catch (_0x255c50) {
    console['error']('Decryption\x20failed:', _0x255c50['message']);
    return '';
  }
}

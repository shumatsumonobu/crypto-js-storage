import {AesStorage} from 'crypto-js-storage';

AesStorage.setItem('myCat', 'Tom', 'Secret Passphrase');
const cat = AesStorage.getItem('myCat', 'Secret Passphrase');
console.log(cat);// =>Tom
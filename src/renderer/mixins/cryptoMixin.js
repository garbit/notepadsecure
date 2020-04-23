const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
let key = 'ADD_KEY_GENERATION_STEP';
key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);

export default {
  methods: {
    encrypt(plainText) {
      const buffer = Buffer.from(plainText);
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
      console.log(result.toString());
      return result;
    },
    decrypt(encrypted) {
      console.log(encrypted);
      const iv = encrypted.slice(0, 16);
      encrypted = encrypted.slice(16);
      const decipher = crypto.createDecipheriv(algorithm, key, iv);
      const result = Buffer.concat([decipher.update(encrypted), decipher.final()]);
      return result;
    },
  },
};

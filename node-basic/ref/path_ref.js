const path = require('path')

console.log(__filename); 
console.log(path.basename(__filename)); // fayl nomi
console.log(path.dirname(__filename)); // fayl turgan papkagacha yol
console.log(path.extname(__filename)); // fayl malumot turi

console.log(path.parse(__filename)); // parse object koronishida

console.log(path.join(__dirname, '/newFolder', '/newFile.html')); // papka va fallarni qowib chiqaradi
console.log(path.resolve(__dirname, 'newFolder', '/newFile.html')); // 





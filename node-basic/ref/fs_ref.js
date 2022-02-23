const fs = require('fs');
const path = require('path');

// // FILE SYSTEM
// fs.mkdir(path.join(__dirname,
//   'notes'),
//   (err) => {
//     if(err) throw err;
//     console.log('folder created')
//     fs.writeFile(
//       path.join(__dirname, 'notes', 'file.txt'),
//       'Bu yerda text bolishi kerak',
//       (err) => {
//         if(err) { throw err;}
//         console.log('Fayl yaratildi.')
//         fs.appendFile(
//           path.join(__dirname, 'notes', 'file.txt'), 
//           'Bu yerdagi fayl yangilandi',
//           (err) => { 
//             if(err) throw err;
//             console.log('fayl yangilandi.')
//             }
//         );
//       } 
//     );

// })

// fs.rmdir(path.join(__dirname, 'notes'), (err) => {
//   if(err) throw err.path;
//   console.log('folder was removed')
// });




// fs.rm(path.join(__dirname, 'notes', 'file.txt'),
//   (err) => {
//     if(err) throw err;
//     console.log('Fayl ochirildi')
//   }
// );

// Buffer korinishidagi malumotni 2 hil usulda oqish mumkin 
// 1
// fs.readFile(
//   path.join(__dirname, 'notes', 'file.txt'),
//   (err, data) => {
//     if(err) throw err;
//     console.log(Buffer.from(data).toString())
//   })
// 2
// fs.readFile(
//   path.join(__dirname, 'notes', 'file.txt'),
//   'utf-8',
//   (err, data) => {
//     if(err) throw err;
//     console.log(data)
//   })

// fs.rename(path.join(__dirname, 'newnotes1'), path.join(__dirname, 'notes'),
//   err => { 
//     if(err) throw err;
//     console.log('Changes folder name.')
//   }  
// );
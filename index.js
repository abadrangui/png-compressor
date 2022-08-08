// import { readFile } from 'fs/promises';
// import sharp from 'sharp';
// // import { } from './assets/png/'

// const IMGURL = './assets/png/'
// const NEWPATH = './assets/compressed/'

// const compress = async () => {
//   for (let index = 1; index < 61; index++) {
//     const file = await readFile(new URL(`${IMGURL}${index}.PNG`, import.meta.url))
//     await sharp(file)
//       .png({
//         quality: 90,
//         compressionLevel: 9,
//         adaptiveFiltering: true,
//         force: true,
//       })
//       .resize(1024, 1024)
//       .withMetadata()
//       .toFile(`${NEWPATH}${index}.png`)
//   }
// }

// compress()
import { webcrypto } from 'node:crypto'

console.log(webcrypto.getRandomValues(new Uint8Array(1))[0])
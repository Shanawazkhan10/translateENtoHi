const { translate } = require('free-translate');
const data = require('./data.json');

Object.keys(data).forEach(async function (key) {
    // console.log('Key : ' + key + ', Value : ' + data[key])
    const translatedText = await translate(data[key], { from: 'en', to: 'hi' });
    console.log(`"${key}"` + ":" + `"${translatedText}",`); // こんにちは世界 
})

// const axios = require('axios');

// async function translateEnglishToHindi(text) {
//   const result = await axios.get('https://translate.googleapis.com/translate_a/single', {
//     params: {
//       client: 'gtx',
//       sl: 'en',
//       tl: 'hi',
//       dt: 't',
//       q: text
//     }
//   });

//   return result.data[0][0][0];
// }

// translateEnglishToHindi('hello').then(translation => {
//   console.log(translation);
// });

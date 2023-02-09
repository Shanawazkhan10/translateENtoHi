const { translate } = require('free-translate');
const data = require('./data.json');

Object.keys(data).forEach(async function (key) {
    // console.log('Key : ' + key + ', Value : ' + data[key])
    const translatedText = await translate(data[key], { from: 'en', to: 'hi' });
    console.log(`"${key}"` + ":" + `"${translatedText}",`); // こんにちは世界 
})

var apiKey = "AIzaSyAjfHc2_lyu1HGG4wKAIjPtpUEyRFvuz58";
var s = "Your Text to Translate";
var googleTranslate = require('google-translate')(apiKey);
googleTranslate.translate(s, 'es', function(err, translation) {
    console.log("OrginalText: " + translation.originalText);
    console.log('Translated Text: ' + translation.translatedText);
});
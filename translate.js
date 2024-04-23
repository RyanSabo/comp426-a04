const apiKey = "";  // API key omitted.
const apiUrl = "https://api.textcortex.com/v1/texts/translations";

// Function to translate text
async function translateText(text) {
    const inputTranslate = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            "source_lang": "en",
            "target_lang": "es",
            "text": text
        })
    };

    try {
        let response = await fetch(apiUrl, inputTranslate);
        let data = await response.json();
        return data.data.outputs[0].text;
    } catch (error) {
        console.error('Error translating text:', error);
        return 'Error translating text.';
    }
}

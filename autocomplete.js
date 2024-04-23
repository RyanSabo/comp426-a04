const apiKey = "";  // API key omitted.
const apiUrl = "https://api.textcortex.com/v1/texts/completions";

// Function to autocomplete text
async function autocompleteText(text) {
    const inputAutocomplete = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },
        body: JSON.stringify({
            "text": text
        })
    };

    try {
        let response = await fetch(apiUrl, inputAutocomplete);
        let data = await response.json();
        return data.data.outputs[0].text;
    } catch (error) {
        console.error('Error autocompleting text:', error);
        return 'Error autocompleting text.';
    }
}

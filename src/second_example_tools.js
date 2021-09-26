const search_object = {
    apple: 'MacOS, IOS, IPhone, AirPods, MacBook...',
    google: 'Search Engine, Very Big Number, Android, Google Glasses',
    tesla: 'Tesla Cars, Roadster, S3',
    microsoft: 'Windows, Corporation, Monopoly, Game Industry...',
    linux: 'Apple, Google, Tesla, Microsoft, Android, Free Software, Open Source, Freedom...'
}

function getSearchResults(search_word) {
    if (!search_word) {
        return [];
    }
    const search_arr = Object.keys(search_object);

    return search_arr.filter(v => v.toLowerCase().indexOf(search_word.toLowerCase()) !== -1);
}

function drawResults(wrapper, arr) {
    wrapper.innerText = '';
    if (arr.length) {
        for (const text of arr) {
            const el = document.createElement('li');
            el.innerText = text;
            wrapper.appendChild(el);
        }
    }
}

export {getSearchResults, drawResults}

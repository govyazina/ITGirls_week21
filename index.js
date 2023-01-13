function findGif() {
    const q = search.value;
    const url = new URL("https://api.giphy.com/v1/gifs/search");
    url.searchParams.set("api_key", 'yjRHDaCvFJWniYNFVN4AkzCCpJHPBcqN');
    url.searchParams.set('q', q);
    url.searchParams.set('limit', '5');
    fetch(url).then(response => response.json()).then(result => {
        const gifs = result.data;
        let string = '';
        for (const gif of gifs) {
            string += `<img src="${gif.images.fixed_height.url}" alt="${gif.alt_text}">`
        }
        document.querySelector('.result').innerHTML = string;
    });

}
async function findGif() {
    const q = search.value;
    const url = new URL("https://api.giphy.com/v1/gifs/search");
    url.searchParams.set("api_key", 'yjRHDaCvFJWniYNFVN4AkzCCpJHPBcqN');
    url.searchParams.set('q', q);
    url.searchParams.set('limit', '5');
    let gifs = await fetch(url)
        .then(response => response.json())
        .then(result => result.data);
    let string = '';
    for (const gif of gifs) {
        string += `<img src="${gif.images.fixed_height.url}" alt="${gif.alt_text || gif.title}">`
    }
    document.querySelector('.result').innerHTML = string;


}
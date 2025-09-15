const API_URL = 'https://api.thecatapi.com/v1/images/search';

async function chamarAPI() {
    const resp = await fetch(API_URL)
    if(resp.status === 200) {
        const obj = await resp.json()
        console.log(obj)
    }
}
chamarAPI()
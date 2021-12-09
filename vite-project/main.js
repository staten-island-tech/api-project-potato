import './style.css'

const URL = "https://api.tcgdex.net/v2/";

async function getData(URL) {
  const response = await fetch(URL);
  console.log(response);

}
getData(URL);
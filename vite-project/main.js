import './style.css'

const URL = "http://api.icndb.com/jokes/random";

async function getData(URL){

  const response = await fetch(URL);
  const data = await response.json();
}
getData(URL)
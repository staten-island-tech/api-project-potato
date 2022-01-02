import "../styles/style.css";

const apiEntry = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";


console.log(fetch(apiEntry));


fetch(apiEntry)
    .then((response) => response.json()) 
    .then((data) => console.log(data)); 

async function fetchData(apiEntry) {
    try {
        const response = await fetch(apiEntry);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}
fetchData(apiEntry);


const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
    const quote = await fetchData(apiEntry);
    apiResponseDOM.innerHTML = ` "${quote.message}" -Donald Trump`;
};
putQuoteInHTML();
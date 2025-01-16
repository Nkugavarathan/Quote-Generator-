//
// let quote = document.getElementById("quote");
// let author = document.getElementById("author");

// const api = "https://api.quotable.io/random";

// async function getQuote(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     quote.innerHTML = `"${data.content}"`;
//     author.innerHTML = `- ${data.author}`;
//   } catch (error) {
//     console.error("Error fetching quote:", error);
//     quote.innerHTML = "Failed to fetch a quote.";
//     author.innerHTML = "";
//   }
// }

// getQuote(api);

let quote = document.getElementById("quote");
let author = document.getElementById("author");

const api = "https://quotes-api-self.vercel.app/quote";

async function getQuote(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.innerHTML = "Failed to fetch advice.";
    author.innerHTML = "";
  }
}

getQuote(api);

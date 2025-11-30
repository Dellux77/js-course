import fetch from "node-fetch";

async function getDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log("Random Dog Image URL:", data.message);
}

getDog();

require("dotenv").config();

async function getImages(query) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );
  const { data } = await response.json();
  console.log(data[0].url);
}
getImages("cat");

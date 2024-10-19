async function getImageData(number) {
  let response = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=cars&limit=${number}&api_key=JKZNKxMTTfmmVwAiqN7IEgLqkowji1ac`,
    // `https://api.giphy.com/v1/gifs/search?q=cars&limit=${number}&api_key=mr1JjRMRLL19l9JgfF8Pj4uJmBMSpth4`,
    {
      mode: "cors",
    }
  );
  let responseJson = await response.json();

  let images = responseJson.data;
  let imageData = [];

  images.forEach((element) => {
    imageData.push({
      url: element.images.original.url,
      // url: element.images.480w_still.url,
      title: element.title,
      id: crypto.randomUUID(),
    });
  });

  console.log(images);

  return imageData;
}

export default getImageData;

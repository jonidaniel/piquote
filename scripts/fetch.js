let API_NINJAS_KEY;
let UNSPLASH_KEY;

/* Fetches a quote using jQuery AJAX
 *
 * Utilizes API Ninjas' Quotes API
 *
 * Params – none
 * Returns – quoteData (Promise)
 */
async function fetchQuote() {
  // Introduce a variable for the quote data
  // let quoteData; // You don't need this line, why? Closure?

  // Make an AJAX call
  await $.ajax({
    url: "https://api.api-ninjas.com/v1/quotes",
    method: "get",
    headers: { "X-Api-Key": API_NINJAS_KEY },
    success: (data) => {
      $quoteData = data; // You don't need the '$' sign here
    },
    error: (error) => {
      console.log(error.status + " error");
      $quoteData = error; // You don't need the '$' sign here
    },
  });

  // Return the quote data (as a promise)
  return $quoteData;
}

/* Fetches an image using jQuery AJAX
 *
 * Utilizes Unsplash API's random photo endpoint
 *
 * Params – none
 * Returns – imgData (Promise)
 */
async function fetchImage() {
  // Introduce a variable for the image data
  // let imgData; // You don't need this line, why? Closure?

  // Make an AJAX call
  await $.ajax({
    url: `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_KEY}`,
    method: "get",
    success: (data) => {
      $imgData = data; // You don't need the '$' sign here
    },
    error: (error) => {
      console.log(error.status + " error");
      $imgData = error; // You don't need the '$' sign here
    },
  });

  // Return the image data (as a promise)
  return $imgData;
}

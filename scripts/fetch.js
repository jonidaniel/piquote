/* Fetches an image and a quote using jQuery AJAX
 *
 * Utilizes Unsplash API's random photo endpoint and API Ninjas' Quotes API
 *
 * Params – none
 * Returns – { $imageData (Promise), $quoteData (Promise) }
 */
async function fetchImageAndQuote() {
  // Introduce variables for image data and quote data
  // let imgData; // You don't need this line, why? Closure?
  // let quoteData; // You don't need this line, why? Closure?

  // Make an AJAX call to fetch the image data
  await $.ajax({
    url: "https://api.unsplash.com/photos/random?client_id=lrVhFg8r0-qGbnC7vCqD_gZE9nG1NAxJG3R42nfk23E",
    method: "get",
    success: (data) => {
      $imgData = data; // You don't need the '$' sign here
    },
    error: (error) => {
      console.log(error.status + " error");
      $imgData = error; // You don't need the '$' sign here
    },
  });

  // Make an AJAX call to fetch the quote data
  await $.ajax({
    url: "https://api.api-ninjas.com/v1/quotes",
    method: "get",
    headers: { "X-Api-Key": "REBH1bj+cY8AAOSYAQV9+Q==8CkjSeLCASHUYj6l" },
    success: (data) => {
      $quoteData = data; // You don't need the '$' sign here
    },
    error: (error) => {
      console.log(error.status + " error");
      $quoteData = error; // You don't need the '$' sign here
    },
  });

  // Return the image data and quote data (as a promise)
  return { $imgData, $quoteData };
}
// /* Fetches a quote using jQuery AJAX
//  *
//  * Utilizes API Ninjas' Quotes API
//  *
//  * Params – none
//  * Returns – quoteData (Promise)
//  */
// async function fetchQuote() {
//   // Introduce a variable for the quote data
//   // let quoteData; // You don't need this line, why? Closure?

//   // Make an AJAX call
//   await $.ajax({
//     url: "https://api.api-ninjas.com/v1/quotes",
//     method: "get",
//     headers: { "X-Api-Key": "REBH1bj+cY8AAOSYAQV9+Q==8CkjSeLCASHUYj6l" },
//     success: (data) => {
//       $quoteData = data; // You don't need the '$' sign here
//     },
//     error: (error) => {
//       console.log(error.status + " error");
//       $quoteData = error; // You don't need the '$' sign here
//     },
//   });

//   // Return the quote data (as a promise)
//   return $quoteData;
// }

// /* Fetches an image using jQuery AJAX
//  *
//  * Utilizes Unsplash API's random photo endpoint
//  *
//  * Params – none
//  * Returns – imgData (Promise)
//  */
// async function fetchImage() {
//   // Introduce a variable for the image data
//   // let imgData; // You don't need this line, why? Closure?

//   // Make an AJAX call
//   await $.ajax({
//     url: "https://api.unsplash.com/photos/random?client_id=lrVhFg8r0-qGbnC7vCqD_gZE9nG1NAxJG3R42nfk23E",
//     method: "get",
//     success: (data) => {
//       $imgData = data; // You don't need the '$' sign here
//     },
//     error: (error) => {
//       console.log(error.status + " error");
//       $imgData = error; // You don't need the '$' sign here
//     },
//   });

//   // Return the image data (as a promise)
//   return $imgData;
// }

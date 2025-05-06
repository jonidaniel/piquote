/* Displays the image and quote on the webpage
 *
 * Handles the resolved promise returned originally by the asynchronous fetchImageAndQuoteData function,
 * also handles errors if the promise gets rejected
 *
 * Params – $data (Promise), e (Event)
 * Returns – none
 */
function displayImageAndQuote($data, e) {
  // Form image and quote components and add them to the page
  $data
    .then((data) => {
      // Set the image URL, description and dimensions into variables
      $URL = data.$imgData.urls.full;
      $desc = data.$imgData.alt_description;
      $imgWidth = data.$imgData.width;
      $imgHeight = data.$imgData.height;
      // Set the quote text and quote author into variables
      $text = data.$quoteData[0].quote;
      $author = data.$quoteData[0].author;

      // Set height and calculate width for the image's div container,
      // which we'll create next
      $divHeight = 400;
      $divWidth = ($divHeight / $imgHeight) * $imgWidth;

      /* Form an image component and a blockquote element with the fetched data
       * It's not possible to assign a background image an alt attribute
       * That's why we assign the image's container a title attribute here
       * The title attribute handles usability and accessibility concerns
       * (i.e. it substitutes the usual alt attribute used when dealing with img elements)
       *
       * Why is the image component a div element and not an img element?
       * Well, this was the only way I could make the image edge softening (with box-shadow and white inset) work
       * The image is later set as the div element's background image
       */
      $image = $(`<div id="img" title="${$desc}"></div>`);
      $quote = $(
        `<blockquote>${$text}<footer>${$author}</footer></blockquote>`
      );

      // Set the image component's and blockquote element's styles
      $image.css({
        // Prettier extension removes the quotation marks around some attributes?
        width: $divWidth,
        height: $divHeight,
        // The image URL is set as the div element's background-image attribute
        "background-image": `url("${$URL}")`,
        "background-size": "cover",
        // The image edge softening is implemented here
        "box-shadow": "0 0 8px 8px white inset",
        margin: "auto",
      });
      $quote.css({
        "margin-up": 20,
        "margin-left": 100,
        "margin-right": 100,
      });

      // Make the image component and blockquote element fade in slowly
      $image.hide().fadeIn(4000, () => {
        // Change the try button text back to 'Try',
        // also make the button enabled again
        e.target.innerText = "Try";
        e.target.disabled = false;
      });
      $quote.hide().fadeIn(4000);

      // If a previous image component exists, then replace it with the new one...
      if ($("#img").length) $("#img").replaceWith($image);
      // ...or if it doesn't exist, then append the new image component to the webpage body
      else $("body").append($image);
      // If a previous blockquote element exists, then replace it with the new one...
      if ($("blockquote").length) $("blockquote").replaceWith($quote);
      // ...or if it doesn't exist, then append the new blockquote element to the webpage body
      else $("body").append($quote);
    })
    .catch((error) => {
      // Log the error to console
      console.log(error.status + " error");

      // If exists, remove previous error information from the page
      if ($("p").length) $("p").remove();

      // Display error information on the page
      $("body").append(
        `<p>Something went wrong:</br>${error.status} error</p>`
      );

      // Change the try button text back to 'Try',
      // also make the button enabled again
      e.target.innerText = "Try";
      e.target.disabled = false;
    });
}

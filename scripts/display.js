/* Displays the image and quote
 *
 * asd
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
      $width = data.$imgData.width;
      $height = data.$imgData.height;
      // Set the quote text and quote author into variables
      $text = data.$quoteData[0].quote;
      $author = data.$quoteData[0].author;

      // Hardcode height and calculate width for the image's div container,
      // which we'll create next
      $newHeight = 400;
      $newWidth = ($newHeight / $height) * $width;

      // Form an image component and a blockquote element with the fetched data
      // It's not possible to assign a background image an alt attribute
      // That's why we assign the image's container a title attribute here
      // The title attribute handles usability and accessibility concerns
      // (i.e. it substitutes the usual alt attribute used when dealing with img elements)
      $image = $(`<div id="img" title="${$desc}"></div>`);
      $quote = $(
        `<blockquote>${$text}<footer>${$author}</footer></blockquote>`
      );

      // Set the image component's and blockquote element's styles
      $image.css({
        // Prettier extension removes the quotation marks around some attributes?
        margin: "auto",
        width: $newWidth,
        height: $newHeight,
        "background-image": `url("${$URL}")`,
        "background-size": "cover",
        "box-shadow": "0 0 8px 8px white inset",
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
      console.log(error);

      // If exists, remove previous error information
      if ($("p").length) $("p").remove();
      // Display error information
      $("body").append(
        `<p>Something went wrong:</br>${error.status} error</p>`
      );

      // Change the try button text back to 'Try',
      // also make the button enabled again
      e.target.innerText = "Try";
      e.target.disabled = false;
    });
}

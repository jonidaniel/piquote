/* Handles try button clicks
 *
 * Is invoked via a click listener
 *
 * Params – none
 * Returns – none
 */
function handleClick(e) {
  // If previous image or quote elements exist, then slide them up
  if ($("img").length) $("img").slideUp();
  if ($("blockquote").length) $("blockquote").slideUp();

  // Display 'Loading' text on the try button while the image and quote are loading,
  // also make the button disabled
  e.target.innerText = "Loading";
  e.target.disabled = true;

  // Fetch image data and quote data
  // $data is a promise
  $data = fetchImageAndQuote();

  // Form image and quote components and add them to the page
  $data
    .then((data) => {
      // Set the image URL and image description in variables
      $URL = data.$imgData.urls.full;
      $desc = data.$imgData.alt_description;
      // Set the quote text and quote author in variables
      $text = data.$quoteData[0].quote;
      $author = data.$quoteData[0].author;

      // Form image and blockquote elements with the fetched data
      $img = $(`<img src="${$URL}" alt="${$desc}" height="400" />`);
      $quote = $(
        `<blockquote>${$text}<footer>${$author}</footer></blockquote>`
      );

      // Set the image and blockquote elements' styles
      $img.css({ display: "block", margin: "auto" }); // Prettier extension removes the quotation marks around 'display' and 'margin'?
      $quote.css({ "margin-up": 20, "margin-left": 50, "margin-right": 50 });

      // Make the image and blockquote elements fade in slowly
      $img.hide().fadeIn(4000);
      $quote.hide().fadeIn(4000);

      // Change the try button text back to 'Try',
      // also make the button enabled again
      e.target.innerText = "Try";
      e.target.disabled = false;

      // If a previous image element exists, then replace it with the new one...
      if ($("img").length) $("img").replaceWith($img);
      // ...or if it doesn't exist, then append the new image element to the webpage body
      else $("body").append($img);
      // If a previous blockquote element exists, then replace it with the new one...
      if ($("blockquote").length) $("blockquote").replaceWith($quote);
      // ...or if it doesn't exist, then append the new blockquote element to the webpage body
      else $("body").append($quote);
    })
    .catch((error) => {
      console.log(error);
    });
}

/* Initializes the webpage
 *
 * Sets style for the webpage, creates its header and creates the try button
 *
 * Params – none
 * Returns – none
 */
function main() {
  // Set the webpage body some style
  $("body").css("text-align", "center");

  // Create the webpage header
  $header = $("<h1>Piquote</h1>"); // Would it be better to write 'const header = $("<h1>Piquote</h1>")'?

  // Create the try button
  $btn = $(`<button class="btn btn-primary">Try</button>`);
  // Set the try button one more style attribute
  $btn.css("margin-bottom", 20);
  // Add a click listener to the try button
  $btn.on("click", handleClick); // Also 'btn.click(handleClick)' works

  // Append the page header and try button to the webpage body
  $("body").append($header);
  $("body").append($btn);
}

main();

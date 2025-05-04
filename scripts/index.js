function handleClick() {
  // Fetch image data
  // imgData is a promise
  $imgData = fetchImage();

  // Form an image component and add it to the page
  // No need for catch block here, errors are handled already in fetchImage
  $imgData
    .then((data) => {
      // Set the image URL and image description in variables
      $URL = data.urls.full;
      $desc = data.description;

      // Form an image element with the fetched data
      $img = $(`<img src="${$URL}" alt="${$desc}" height="400" />`);
      // Set the image element styles
      $img.css({ display: "block", margin: "auto" }); // Prettier extension removes the quotation marks around 'display' and 'margin'?
      // Make the image element fade in slowly
      $img.hide().fadeIn(5000, () => console.log("Image fade-in complete"));

      // If a previous image element exists, then replace it with the new one...
      if ($("img").length) $("img").replaceWith($img);
      // ...or if it doesn't exist, then append the new image element to the webpage body
      else $("body").append($img);
    })
    .catch((error) => {
      console.log(error);
    });

  // Fetch quote data
  // quoteData is a promise
  $quoteData = fetchQuote();

  // Form a quote component and add it to the page
  // No need for catch block here, errors are handled already in fetchQuote
  $quoteData
    .then((data) => {
      // Set the quote text and quote author in variables
      $text = data[0].quote;
      $author = data[0].author;

      // Form a blockquote element with the fetched data
      $quote = $(
        `<blockquote>${$text}<footer>${$author}</footer></blockquote>`
      );
      // Make the blockquote element fade in slowly
      $quote.hide().fadeIn(5000, () => console.log("Quote fade-in complete"));

      // If a previous blockquote element exists, then replace it with the new one...
      if ($("blockquote").length) $("blockquote").replaceWith($quote);
      // ...or if it doesn't exist, then append the new blockquote element to the webpage body
      else $("body").append($quote);
    })
    .catch((error) => {
      console.log(error);
    });

  // LAITA NÄÄ TAPAHTUUN SAMAAN AIKAAN TÄSSÄ
  // // If a previous image element exists, then replace it with the new one...
  // if ($("img").length) $("img").replaceWith($img);
  // // ...or if it doesn't exist, then append the new image element to the webpage body
  // else $("body").append($img);
  // // If a previous blockquote element exists, then replace it with the new one...
  // if ($("blockquote").length) $("blockquote").replaceWith($quote);
  // // ...or if it doesn't exist, then append the new blockquote element to the webpage body
  // else $("body").append($quote);
}

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

function fetchQuote() {}

function fetchImage() {
  // Make an AJAX call to Unsplash API's random photo endpoint
  $("<div />").load(
    "https://api.unsplash.com/photos/random?client_id=lrVhFg8r0-qGbnC7vCqD_gZE9nG1NAxJG3R42nfk23E",
    function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        // Log error in console
        console.log(xhr.status + " " + xhr.statusText);
      }
      if (statusTxt == "success") {
        // Set the image URL and image description in variables
        const imgURL = JSON.parse(responseTxt).urls.full;
        const imgDesc = JSON.parse(responseTxt).description;

        // Form an image element with fetched data
        $img = $(`<img src="${imgURL}" alt="${imgDesc}" height="600" />`);
        // Set the image element some styles
        $img.css({ display: "block", margin: "auto" });

        // Append the image element to the webpage body
        $("body").append($img);
      }
    }
  );

  // Go fetch a quote
  fetchQuote();
}

function handleClick() {
  fetchImage();
}

function main() {
  // Set the webpage body styling
  $("body").css("text-align", "center");

  // Create a try button
  $btn = $("<button>Try</button>"); // Is it better to write 'const btn = $("<button>Try</button>")'?
  // Set the try button styling
  $btn.css("display", "inline-block");
  // Add a click listener to the try button
  $btn.on("click", handleClick); // Also 'btn.click(handleClick)' works

  // Append the try button to the webpage body
  $("body").append($btn);
}

main();

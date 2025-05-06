/* Handles try button clicks
 *
 * Is invoked via the click listener assigned to the button in the main function
 *
 * Params – none
 * Returns – none
 */
function handleClick(e) {
  // If previous image component or quote element exists, then slide it up
  if ($("#img").length) $("#img").slideUp(1000);
  if ($("blockquote").length) $("blockquote").slideUp(1000);

  // Display 'Wait' text on the try button while the image and quote are loading,
  // also make the button disabled
  e.target.innerText = "Wait";
  e.target.disabled = true;

  // Fetch image data and quote data
  // $data is a promise
  $data = fetchImageAndQuoteData();

  // Display the fetched data
  displayImageAndQuote($data, e);
}

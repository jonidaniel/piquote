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
  $btn.on("click", (e) => handleClick(e));

  // Append the page header and try button to the webpage body
  $("body").append($header);
  $("body").append($btn);
}

main();

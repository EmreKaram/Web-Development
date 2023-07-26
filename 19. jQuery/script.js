$(document).ready(function () {
  $("h1").css("color", "red");
  // First property is css property and second is value.
});
// We can also use like that instead of putting script(cdn) tag in end of the html file.

$("h1").css("color", "red");
// It will change the color of h1 tag to red.

$("h1").addClass("big-title margin-50");
// We can add multiple classes at once.
$("h1").removeClass("big-title");
// We can remove multiple classes at once.

$("h1").hasClass("margin-50");
// It will return true or false. In this case it will return true.

$("h1").text("Bye");
// It will change the text of h1 tag.

$("button").html("<em>Hey</em>");
// It will change the text of button tag.<em> tag will make the text italic.

$("img").attr("src");
// It will return the source of the image.

$("a").attr("href", "https://www.yahoo.com");
// It will change the href of the anchor tag.

console.log($("h1").atrt("class"));
// It will return the class of the h1 tag. In this case it will return "big-title margin-50".

$("h1").click(function () {
  $("h1").css("color", "purple");
});
// It will change the color of h1 tag to purple when we click on it.

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}
// It will change the color of h1 tag to purple when we click on any button.

$("body").keypress(function (event) {
  console.log(event.key);
});
// It will print to log the key we press.

$("body").keypress(function (event) {
  $("h1").text(event.key);
});
// It will change the text of h1 tag to the key we press.

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
// It will change the color of h1 tag to purple when we hover on it.

$("h1").on("click", function () {
  $("h1").css("color", "purple");
});
// It will change the color of h1 tag to purple when we hover on it.

$("h1").before("<button>New</button>");
// It will add button before h1 tag.

$("h1").after("<button>New</button>");
// It will add button after h1 tag.

$("h1").prepend("<button>New</button>");
// It will add button inside h1 tag at the start.

$("h1").append("<button>New</button>");
// It will add button inside h1 tag at the end.

$("button").remove();
// It will remove all the buttons.

$("button").on("click", function () {
  $("h1").hide();
});
// It will hide the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").toggle();
});
// It will toggle the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").fadeOut();
});
// It will fade out the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").fadeIn();
});
// It will fade toggle the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").fadeToggle();
});
// It will fade toggle the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").slideUp();
});
// It will slide up the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").slideDown();
});
// It will slide down the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").slideToggle();
});
// It will slide toggle the h1 tag when we click on any button.

$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
// It will animate the h1 tag when we click on any button.

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
    }
);
// It will animate the h1 tag when we click on any button. It will slide up and down and then change the opacity.

// Never memorize the functions. Just remember the syntax and use it when needed. We can always google it.
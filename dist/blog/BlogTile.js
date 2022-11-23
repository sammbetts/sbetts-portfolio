function toText(block) {
  var tag = document.createElement("div");
  tag.innerHTML = block;
  block = tag.innerText;
  return block;
}

function convertDate(date) {
  var dateArray = date.slice(0, 10).split("-");
  var year = dateArray.shift();
  dateArray.push(year);
  console.log(date);
  return dateArray.join("/");
}

export function BlogTile() {

  var truncatedContent = content.substring(0, 150).concat("...");
  var truncatedTitle = title.substring(0, 30).concat("...");

  return React.createElement(
    "div",
    { "class": "blog.tileContainer" },
    React.createElement(
      "link",
      { target: "_blank", rel: "noopener noreferrer", href: "" + link },
      React.createElement("img", { className: classes.image, src: "" + thumbnail })
    ),
    React.createElement(
      "div",
      { "class": "blog.contentContainer" },
      React.createElement(
        "link",
        { target: "_blank", rel: "noopener noreferrer", href: "" + link },
        React.createElement(
          "typography",
          { variant: "h6" },
          truncatedTitle
        )
      ),
      React.createElement(
        "typography",
        { variant: "overline" },
        convertDate(pubDate)
      ),
      React.createElement(
        "div",
        { "class": "blog.bodyTextContainer" },
        React.createElement(
          "typography",
          { variant: "body2" },
          toText(truncatedContent)
        )
      )
    )
  );
};
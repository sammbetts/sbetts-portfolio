function toText(block) {
  let tag = document.createElement("div");
  tag.innerHTML = block;
  block = tag.innerText;
  return block;
}

function convertDate(date) {
  let dateArray = date.slice(0, 10).split("-");
  let year = dateArray.shift();
  dateArray.push(year);
  console.log(date);
  return dateArray.join("/");
}

export function BlogTile() {

  var truncatedContent = content.substring(0, 150).concat("...");
  var truncatedTitle = title.substring(0, 30).concat("...");

  return (
    <div class="blog.tileContainer">
      <link target="_blank" rel="noopener noreferrer" href={`${link}`}>
        <img className={classes.image} src={`${thumbnail}`}></img>
      </link>
      <div class="blog.contentContainer">
        <link target="_blank" rel="noopener noreferrer" href={`${link}`}>
          <typography variant="h6">{truncatedTitle}</typography>
        </link>
        <typography variant="overline">{convertDate(pubDate)}</typography>
        <div class="blog.bodyTextContainer">
          <typography variant="body2">{toText(truncatedContent)}</typography>
        </div>
      </div>
    </div>
  );
};

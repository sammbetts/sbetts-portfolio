import React from "react";
import { BlogTile } from "./BlogTile";

export function BlogContainer() {

  const [myBlog, setMyBlog] = React.useState([]);
  const blogApi =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samantha-louise1810";

  React.useEffect(() => {
    fetch(blogApi)
      .then((res) => res.json())
      .then((data) => {
        setMyBlog(data);
      });
  }, [blogApi]);

  function displayBlogs() {
    return (
      myBlog.items &&
      myBlog.items.map((blog) => {
        return (
          blog.categories.length > 0 && (
            <BlogTile key={blog.pubDate} blogData={blog} />
          )
        );
      })
    );
  }

  return <div class="blog.container">{displayBlogs()}</div>;
};

ReactDOM.render((<BlogContainer/>),document.getElementById(".blog-container"));

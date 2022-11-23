var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React from "react";
import { BlogTile } from "./BlogTile";

export function BlogContainer() {
  var _React$useState = React.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      myBlog = _React$useState2[0],
      setMyBlog = _React$useState2[1];

  var blogApi = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40samantha-louise1810";

  React.useEffect(function () {
    fetch(blogApi).then(function (res) {
      return res.json();
    }).then(function (data) {
      setMyBlog(data);
    });
  }, [blogApi]);

  function displayBlogs() {
    return myBlog.items && myBlog.items.map(function (blog) {
      return blog.categories.length > 0 && React.createElement(BlogTile, { key: blog.pubDate, blogData: blog });
    });
  }

  return React.createElement(
    "div",
    { "class": "blog.container" },
    displayBlogs()
  );
};

ReactDOM.render(React.createElement(BlogContainer, null), document.getElementById("blog_container"));
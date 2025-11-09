// Routing Logic
const posts = require("./posts");
const layout = require("./layout");

function handleRoutes(req, res) {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(layout("Home", `
      <h1>Welcome to My Blog</h1>
      <p>This is a simple Node.js blog using only the HTTP module.</p>
    `));

  } else if (req.url === "/posts") {
    const postHTML = posts
      .map(p => `<div class="post"><h2>${p.title}</h2><p>${p.desc}</p></div>`)
      .join("");
    res.end(layout("Posts", `<h1>Blog Posts</h1>${postHTML}`));

  } else {
    res.statusCode = 404;
    res.end(layout("404", `<h1>404 - Page Not Found</h1><p>The page you requested does not exist.</p>`));
  }
}

module.exports = handleRoutes;

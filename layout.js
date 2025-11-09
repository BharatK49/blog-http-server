// HTML template with inline navigation and styling
module.exports = function layout(title, body) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
                <style>
                    body{font-family:Arial;margin:2rem auto;max-width:800px;line-height:1.6}
                    nav a{margin-right:1rem;color:#007bff;text-decoration:none}
                    nav a:hover{text-decoration:underline}
                    .post{border-bottom:1px solid #ddd;padding:1rem 0}
                </style>
        </head>
        <body>
            <nav><a href="/">Home</a><a href="/posts">Posts</a></nav><hr/>
            ${body}
        </body>
    </html>`;
};

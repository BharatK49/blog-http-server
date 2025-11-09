// Main Node host server
const http = require("http");
const handleRoutes = require("./routes");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

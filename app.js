const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   fs.readFile(path.join(__dirname, "index.html"), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text-html" });
  //     res.end(content);
  //   });
  let filePath = path.join(__dirname, req.url == "/" ? "index.html" : req.url);
  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        console.log("File not found");
      } else throw err;
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
  res.end;
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running  on port ${PORT}`));

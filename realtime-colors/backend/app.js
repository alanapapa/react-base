const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Привет!");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
  console.log("Пользователь подключен!");

  socket.emit("receive", lastColor);

  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    io.emit("receive", color);
  });

  socket.on("disconnect", () => {
    console.log("Пользователь отсоединен.");
  });
});

http.listen(3001, () => console.log("Сервер запущен 🚀 🚀"));

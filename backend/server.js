import app from "./app.js";
import { initSocket } from "./socket.js";

const server = app.listen();
server.on("error", error => console.log(`Error en servidor ${error}`));
initSocket(server);
const { V } = require("../index");
const app = new V();
app.load("./controllers").static("./public");
app.global.message = "Hello World!";
app.start(9081).then( (server) => console.log("Server has started on PORT: 9081") );
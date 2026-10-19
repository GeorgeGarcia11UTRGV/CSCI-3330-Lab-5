import express from "express";
import path from "node:path"

const app = express();
const port = 3000;

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.static(path.join(import.meta.dirname, "3330-homework3")));

// app.get("/", (req, res) => {
//     res.send("<h1>Hello from the server app</h1>");
// })

app.get("/about", (req, res) => {
    res.send("<h1>Hello from the server app - about site</h1>");
})


app.get("/", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public", "index.html"));
})

app.get("/project", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "3330-homework3", "index.html"))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 
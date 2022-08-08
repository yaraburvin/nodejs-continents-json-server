import { doesNotReject } from "assert";
import express from "express";
import { AFRICA, ANTARCTICA, ASIA, EUROPE, NORTHAMERICA, OCEANIA, SOUTHAMERICA } from "./continents";
import filePath from "./filePath";

const app = express();

app.get("/", (req, res) => {
  const pathToFile = filePath("/index.html");
  res.sendFile(pathToFile);
});

app.get("/africa", (req, res) => {
  res.json(AFRICA);
});

app.get("/antarctica", (req, res) => {
  res.json(ANTARCTICA);
});

app.get("/asia", (req, res) => {
  res.json(ASIA);
});

app.get("/europe", (req, res) => {
  res.json(EUROPE);
});

app.get("/north-america", (req, res) => {
  res.json(NORTHAMERICA);
});

app.get("/oceania", (req, res) => {
  res.json(OCEANIA);
});

app.get("/south-america", (req, res) => {
  res.json(SOUTHAMERICA);
});

// using 4000 by convention, but could be changed
const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});

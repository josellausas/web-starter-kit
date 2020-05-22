import * as express from "express";
import * as path from "path";
import { Question } from '../@types/Question';

// Using imported interfaces
const questions : Question[] = [{
  title: "How to log in?",
  content: "Quesito plz plz",
  answerCount: 2
},{
  title: "What is going on?",
  content: "yeah, this is a common question, hope it goes well...",
  answerCount: 2
},{
  title: "Is TypeScript EZ?",
  content: "Who can say? I dunno",
  answerCount: 2
}];

const port : string | number = process.env.port || 1337;

const app = express();

app.listen(port);
app.use(express.static("public"))

console.log(`Listening on port ${port}`);

app.get("/questions", (_req, res) => {
  res.json(questions);
});

// Development version
app.get("/main.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"))
});

// Release version
app.get("/bundle.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "dist", "bundle.js"))
});
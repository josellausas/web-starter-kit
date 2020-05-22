import * as express from "express";
import { Question } from '../@types/Question';

// Using imported interfaces
const questions : Question[] = [{
  title: "How to log in?",
  content: "Quesito plz plz",
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

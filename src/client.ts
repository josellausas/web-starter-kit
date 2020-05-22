import { Question } from "../@types/Question";

// Give it its own context
(() : void =>{
  let questions : Question[] = [];

  async function init() : Promise<void> {
    const request = await fetch("/questions");
    questions = await request.json();
    console.log(questions);
  }
})();

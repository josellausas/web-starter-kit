import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Question } from "../../@types/Question";
import { Dashboard } from './components/Dashboard';
import { store } from './store';

;(function() {
  // Give it its own context
  let questions : Question[] = [];
  function render() : void {
    console.log(store.getState());
    document.getElementById("Questions").innerHTML = questions.map(
      ({title, content}) => `
        <li class="list">
          <div>
            <h6 class="my=0">
              ${title}
            </h6>
            <small class="text">
              ${content}
            </small>
          </div>
        </li>
      `
    ).join("");
    ReactDOM.render(<Dashboard/>, document.getElementById("app"));
  }

  async function init() : Promise<void> {
    // console.log(store.getState());
    const request = await fetch("/questions");
    questions = await request.json();
    console.log(questions);
    render();
  }

    // async function handleSubmitQuestionForm () : Promise<void> {
    //   event.preventDefault(); // Prevent the page from refreshing
    //   const title : string = document.forms["QuestionForm" as any][0].value;
    //   const content : string = document.forms["QuestionForm" as any][1].value;
    //   const request = await fetch(`new?title=${title}&content=${content}`);
    //   const json = await request.json();
    //   questions = json.questions;
    //   render();
    // }
  init();
})()

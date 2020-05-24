import * as React from "react";

import { Question } from '../../../@types/Question';

export interface QuestionsProps {
  data: Question[];
}

export const Questions = (props: QuestionsProps) => {
  const questionData = props.data.map(({title, content}) => (
    <li className="list">
      <div>
        <h6 className="my=0">
          {title}
        </h6>
        <small className="text">
          {content}
        </small>
      </div>
    </li>
  ))
  return (
    <div>
      <ul className="list-group">
        {questionData}
      </ul>
    </div>
  )
}

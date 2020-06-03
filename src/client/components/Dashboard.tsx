import * as React from "react";



function Button(props: {onClick: ()=>void}){
  return <button onClick={props.onClick} >+1</button>;
}

function Display(props: {counter: number;}){
  return <div>{props.counter}</div>
}

export interface DashboardProps {
}

export const Dashboard = (props: DashboardProps) => {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => setCounter(counter + 1);
  return (
  <>
    <h1>Hello Dashboard!</h1>
    <Display counter={counter} />
    <Button onClick={handleClick} />
  </>);
}
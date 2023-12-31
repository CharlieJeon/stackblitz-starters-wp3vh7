import { FC, useState } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [number, setNumber] = useState(1);
  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
        <Left1 number={number}></Left1>
        <Right1
          number={number}
          onIncrease={() => {
            setNumber(number + 1);
          }}
        ></Right1>
      </div>
    </div>
  );
};

function Left1(props) {
  return (
    <div>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number}></Left2>
    </div>
  );
}

function Left2(props) {
  return (
    <div>
      <h1>Left2 : {props.number}</h1>
      <Left3 number={props.number} />
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3 : {props.number}</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1 : {props.number}</h1>
      <Right2
        number={props.number}
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right2>
    </div>
  );
}

function Right2(props) {
  return (
    <div>
      <h1>Right2 : {props.number}</h1>
      <Right3
        number={props.number}
        onIncrease={() => {
          props.onIncrease();
        }}
      ></Right3>
    </div>
  );
}

function Right3(props) {
  return (
    <div>
      <h1>Right3 : {props.number}</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          props.onIncrease();
        }}
      ></input>
    </div>
  );
}

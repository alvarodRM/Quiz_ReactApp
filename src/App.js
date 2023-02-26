//import logo from './logo.svg'; 
//import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import {questionAnswer} from './redux/actions';

function App(props) {
  return (
    <Game quiz={props.quizzes[props.currentQuiz]}
        onQuestionAnswer={(answer)=>{
            props.dispatch(questionAnswer(props.currentQuiz, answer))
        }} />
  );
}

function mapStateToProps(state){
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);

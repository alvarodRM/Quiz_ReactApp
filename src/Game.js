import React from 'react';
export default class Game extends React.Component {
    render() {
        return (
            <div>
                {this.props.quiz.question}
                <input type="text"
                    value={this.props.quiz.userAnswer || ''}
                    onChange={(e)=>this.props.onQuestionAnswer(e.target.value)}/>
            </div>
        );
    }
}
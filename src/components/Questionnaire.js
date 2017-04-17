import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FIELDS } from '../constants.js';
import { submitField } from '../madlibs';

require('./Questionnaire.scss');


class QuestionPair extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.object,
    submitField: PropTypes.func.isRequired,
  };

  handleChange(e){
    this.props.submitField(this.props.name, e.target.value);
  }

  render(){
    const answerBox = (
      <input
        type="text"
        defaultValue={this.props.answer}
        onBlur={this.handleChange.bind(this)}
      />
    );

    return (
      <li>
        <label>
          <div>{this.props.question}</div>
          {answerBox}
        </label>
      </li>
    );
  }
}


class Questionnaire extends Component {
  static propTypes = {
    fieldOrder: PropTypes.array.isRequired,
    fieldAnswers: PropTypes.object.isRequired,
    submitField: PropTypes.func.isRequired,
  };

  render(){
    const questions = this.props.fieldOrder.map(
      k => <QuestionPair
        key={k}
        name={k}
        question={FIELDS[k]}
        answer={this.props.fieldAnswers[k]}
        submitField={this.props.submitField}
      />
    );

    return (
      <div className="questionnaire_container">
        <h1>About Me</h1>
        <ul>
          {questions}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    fieldOrder: state.fieldOrder,
    fieldAnswers: state.fieldAnswers,
  };
}

function mapDispatchToProps(dispatch){
  return {
    submitField: (fieldName, answer) => {
      dispatch(submitField(fieldName, answer))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire);

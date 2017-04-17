import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { getTextTemplate } from '../constants.js';
import { submitEssay } from '../madlibs';

require('./EssayPreview.scss');

class EssayLine extends React.Component {
  static propTypes = {
    fieldName: PropTypes.string.isRequired,
    fieldAnswer: PropTypes.object,
  };


  render(){
    if(!this.props.fieldAnswer){
      return null;
    }
    const payload=this.props.fieldAnswer;
    const line = getTextTemplate(this.props.fieldName)[payload.templateIndex];
    const frags = line.split('$answer');

    //capitalize if answer is at beginning of string
    const answer = frags[0].length ? payload.answer : payload.answer.charAt(0).toUpperCase() + payload.answer.slice(1);

    return (
      <span>
        {frags[0]}
        <strong>
          {answer}
        </strong>
        {frags[1]}
        { " " }
      </span>
    );
  }
}


class EssayPreview extends Component {
  static propTypes = {
    fieldOrder: PropTypes.array.isRequired,
    fieldAnswers: PropTypes.object.isRequired,
    submitEssay: PropTypes.func.isRequired
  };

  handleClick(){
    // collect final lines
    const essayLines = this.props.fieldOrder.map(
      fieldName => {
        const payload = this.props.fieldAnswers[fieldName]
        const template = getTextTemplate(fieldName)[payload.templateIndex];
        const line = template.replace('$answer', payload.answer);

        return line.charAt(0).toUpperCase() + line.slice(1);
      }
    );

    this.props.submitEssay(essayLines.join(' '));
  }

  render(){
    const essayLines = this.props.fieldOrder.map(
      k => <EssayLine
        key={k}
        fieldName={k}
        fieldAnswer={this.props.fieldAnswers[k]}
      />
    );

    const showButton = (this.props.fieldOrder.length === Object.keys(this.props.fieldAnswers).length);

    return (
      <div className="essaypreview_container">
        <h1>Your essay text</h1>
        <div>
          {essayLines}
        </div>
        {showButton && (
          <button onClick={this.handleClick.bind(this)}>
            Edit
          </button>
        )}
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
    submitEssay: (essay) => {
      dispatch(submitEssay(essay))
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EssayPreview);

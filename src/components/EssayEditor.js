import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { startOver, submitEssay } from '../madlibs';

require('./EssayEditor.scss');


class EssayEditor extends Component {
  static propTypes = {
    essayText: PropTypes.string.isRequired,
    startOver: PropTypes.func.isRequired,
    submitEssay: PropTypes.func.isRequired
  };

  handleClick(){
    this.props.startOver();
  }

  handleChange(e){
    this.props.submitEssay(e.target.value);
  }

  render(){
    return (
      <div className="essayeditor_container">
        <h1>Your essay text</h1>
        <textarea defaultValue={this.props.essayText} onBlur={this.handleChange.bind(this)} />
        <button className="reset" onClick={this.handleClick.bind(this)}>
          Start over
        </button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    essayText: state.essayText
  };
}

function mapDispatchToProps(dispatch){
  return {
    startOver: () => {
      dispatch(startOver())
    },
    submitEssay: (essay) => {
      dispatch(submitEssay(essay))
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EssayEditor);
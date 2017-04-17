import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Questionnaire from './Questionnaire';
import EssayPreview from './EssayPreview';
import EssayEditor from './EssayEditor';

require('./App.scss');

class App extends Component {
  static propTypes = {
    essayText: PropTypes.string.isRequired,
  };

  render() {
    const contents = [];

    if(this.props.essayText.length){
      contents.push(<EssayEditor key="EssayEditor" />);
    }else{
      contents.push(<Questionnaire key="Questionnaire" />);
      contents.push(<EssayPreview key="EssayPreview" />);
    }

    return(
      <div className="appContainer">
        {contents}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
     essayText: state.essayText
  };
}

export default connect(
  mapStateToProps
)(App);

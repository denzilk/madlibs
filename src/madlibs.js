import {
  FIELD_NAMES,
  getTextTemplate
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const SUBMIT_ESSAY = 'MADLIBS.SUBMIT_ESSAY';
export const START_OVER = 'MADLIBS.START_OVER';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {
  },

  essayText: '',
};


// Reducer
// ----------------------------------------------------------------------------


export function reducer(state = INITIAL_STATE, action) {
  const payload = action.payload;

  switch (action.type) {
    case SUBMIT_FIELD: {
      // ignore if we've left data blank,  or if data hasn't changed
      switch(true){
        case  (!payload.answer.length):
        case  ( state.fieldAnswers[payload.fieldName] ) &&
              ( state.fieldAnswers[payload.fieldName].answer === payload.answer):
          return state;
        default:
      }

      const max = getTextTemplate(payload.fieldName).length;
      const randomIndex = Math.floor(Math.random() * max);

      const newAnswer = {
        answer: payload.answer,
        templateIndex: randomIndex,
      };

      return {
        ...state,
        fieldAnswers: {
          ...state.fieldAnswers,
          [payload.fieldName]: newAnswer
        }
      };
    }


    case SUBMIT_ESSAY: {
      return {
        ...state,
        essayText: payload.essay
      }
    }


    case START_OVER: {
      return {
        ...INITIAL_STATE
      }
    }


    default:
      return state;
  }

}



// Action creators
// ----------------------------------------------------------------------------

export function submitField(fieldName, answer) {
  return { type: SUBMIT_FIELD, payload: {fieldName, answer} };
}

export function submitEssay(essay) {
  return { type: SUBMIT_ESSAY, payload: {essay} };
}

export function startOver() {
  return { type: START_OVER };
}

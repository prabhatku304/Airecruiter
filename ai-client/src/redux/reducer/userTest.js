import {
  TECHNICAL_TEST_SUBMIT_PENDING,
  PERSONALITY_TEST_SUBMIT_PENDING,
} from "../action/userTest/type";

const DEFAULT_STATE = {
  isTechnicalTestSubmitPending: false,
  isPersonaltyTestSubmitPending: false,
  error: null,
};

export const testReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case TECHNICAL_TEST_SUBMIT_PENDING:
      return {
        ...state,
        isTechnicalTestSubmitPending: payload,
      };
    case PERSONALITY_TEST_SUBMIT_PENDING:
      return {
        ...state,
        isPersonaltyTestSubmitPending: payload,
      };

    default:
      return state;
  }
};

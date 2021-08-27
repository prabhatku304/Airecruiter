export const reduxPayload = (type, data) => {
  return {
    type,
    payload: data,
  };
};

export const errorPayload = (type, error) => {
  return {
    type,
    error,
  };
};

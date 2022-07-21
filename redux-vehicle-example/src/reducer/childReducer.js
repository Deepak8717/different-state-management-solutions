const initialization = {};

const childReducer = (state = initialization, action) => {
  switch (action.type) {
    case "All":
      return {
        cdata: "All Vehicle",
      };
    default:
      return state;
  }
};

export default childReducer;

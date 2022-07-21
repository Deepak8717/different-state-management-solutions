const reducer = (state, action) => {
  switch (action.type) {
    case "Car":
      return {
        vehicle: "It is a car",
      };
    case "Bike":
      return {
        vehicle: "It is a bike",
      };
    case "Bus":
      return {
        vehicle: "It is bus",
      };
    default:
      return "No";
  }
};

export default reducer;

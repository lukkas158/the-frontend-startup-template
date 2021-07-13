const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";

const initialUser = {
  state: "idle",
  error: null,
  user: {
    id: "",
    name: "",
    dateOfBirth: "",
    email: "",
    access: "",
    refreshToken: "",
  },
};

function userReducer(state = initialUser, action) {
  switch (action.type) {
    case ADD_USER:
      return action.payload;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}

export function addUser(user) {
  return { type: ADD_USER, payload: user };
}

export const userSelector = (state) => ({
  user: state.user,
  isLogged: Boolean(state.user.id),
});
export default userReducer;

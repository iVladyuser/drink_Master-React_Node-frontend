export const selectUserData = state => state.auth.userData;
export const selectUserDataAge = state => state.auth.userData.age;
export const selectAge = state => state.auth.age;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectError = state => state.auth.error;
export const selectIsLoading = state => state.auth.isLoading;

export const selectIsLoading = state => state.auth.isLoading;
export const selectEmail = state => state.auth.user.email;
export const selectName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserBirthDate = state => state.auth.user.dateBirth;
export const selectavatarURL = state => state.auth.user.avatarURL;

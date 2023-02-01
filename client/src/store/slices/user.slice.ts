import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  id: string;
  name: string;
  username: string;
  nickName: string;
  firstName: string;
  lastName: string;
  email: string;
  topics: string[];
  frequencyTweetPosting: number;
  profilePic?: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  id: '',
  name: '',
  username: '',
  nickName: '',
  firstName: '',
  lastName: '',
  email: '',
  topics: [],
  frequencyTweetPosting: 6,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    activeUser: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.familyName;
      state.email = action.payload.email;
      state.topics = action.payload.topics;
    },

    deactivateUser: (state) => {
      state.isLoggedIn = false;
      state.id = '';
      state.name = '';
      state.username = '';
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.topics = [];
    },
  },
});

export const { activeUser, deactivateUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

export interface Tweet {
  id: number;
  status: string;
  text: string;
}

export interface TweetState {
  tweets: Tweet[]
};

const initialState: TweetState = {
  tweets: [],
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    selectionTweets: (state, action) => {
      return action.payload;
    },

    queueTweets: (state, action) => {
      const specificTweet = state.tweets.findIndex(tweet => tweet.id === action.payload.id);
      if (state.tweets[specificTweet].status === 'selection') {
        state.tweets[specificTweet].status = 'queue';
      }
      return state;
    },

    deleteTweet: (state, action) => {
      state.tweets.filter(tweet => tweet.id !== action.payload.id);
    },
  }
});

export const { selectionTweets, queueTweets, deleteTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
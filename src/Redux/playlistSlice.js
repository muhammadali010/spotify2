import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  featuredPlaylists: [],
  topMixes: [],
  madeForYou: [],
  recentlyPlayed: [],
  jumpBackIn: [],
  uniquelyYours: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setFeaturedPlaylists: (state, action) => {
      state.featuredPlaylists = action.payload;
    },
    setTopMixes: (state, action) => {
      state.topMixes = action.payload;
    },
    setMadeForYou: (state, action) => {
      state.madeForYou = action.payload;
    },
    setRecentlyPlayed: (state, action) => {
      state.recentlyPlayed = action.payload;
    },
    setJumpBackIn: (state, action) => {
      state.jumpBackIn = action.payload;
    },
    setUniquelyYours: (state, action) => {
      state.uniquelyYours = action.payload;
    },
  },
});

export const {
  setFeaturedPlaylists,
  setTopMixes,
  setMadeForYou,
  setRecentlyPlayed,
  setJumpBackIn,
  setUniquelyYours,
} = playlistSlice.actions;

export default playlistSlice.reducer;

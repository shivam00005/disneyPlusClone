import { configureStore } from '@reduxjs/toolkit';
import movieReduce from '../features/Movies/movieSlice'
import userReducer from '../features/Movies/movieSlice'
import userSlice from '../features/users/userSlice';


export const store = configureStore({
  reducer: {
    movie: movieReduce,
    user: userSlice
  },
});

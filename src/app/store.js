import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReduce from '../features/Movies/movieSlice'


export const store = configureStore({
  reducer: {
    movie: movieReduce
  },
});

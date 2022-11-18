import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import movieReduce from '../features/Movies/movieSlice'
import userSlice from '../features/users/userSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieReduce,

  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

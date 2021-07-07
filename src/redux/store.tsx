import { configureStore } from '@reduxjs/toolkit';
import resultReducer from './resultSlice';

export default configureStore({
  reducer: {
    result: resultReducer,
  },
});
export type RootState = ReturnType<typeof resultReducer>;

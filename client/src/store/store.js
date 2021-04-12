import { configureStore } from '@reduxjs/toolkit'

import snackbarReducer from 'slice/snackbarSlice'
import loadingReducer from 'slice/loadingSlice'
import questionsReducer from 'slice/questionsSlice'

export default configureStore({
  reducer: {
    loading: loadingReducer,
    snackbar: snackbarReducer,
    questions: questionsReducer
  },
});

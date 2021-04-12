import {
  createSlice
} from "@reduxjs/toolkit";
import {
  startLoading,
  stopLoading
} from "./loadingSlice";

import api from "../services/api";

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    questionsList: [],
  },
  reducers: {
    setQuestionsInList: (state, action) => {
      state.questionsList = action.payload
    },
    addToQuestionsList: (state, action) => {
      state.questionsList = [...state.questionsList, ...action.payload]
    },
  },
})

export const { setQuestionsInList, addToQuestionsList } = questionsSlice.actions

export const getQuestions = (data, order = 'desc', score = 0, pagesize = 1, page = 1, sort = 'activity', cb = () => {}) => async dispatch => {
  const { tag, score, limit, sort } = data;

  try {
    dispatch(startLoading())

    const queryName = 'questions'
    const query = `query{
      ${queryName}(tag: "${tag}", order: "${order}", score: ${score}, pagesize: ${limit}, page: ${page}, sort: "${sort}") {
        tags,
        owner{
          reputation,
          profile_image,
          display_name,
          link
        },
        is_answered,
        view_count,
        accepted_answer_id,
        answer_count,
        score,
        last_activity_date,
        creation_date,
        last_edit_date,
        question_id,
        content_license,
        link,
        title,
      }
    }`;

    const url = `/graphql`
    const response = await api.post(url, query)

    if (response) {
      dispatch(page === 0 ? setQuestionsInList(response[queryName]) : addToQuestionsList(response[queryName]))
      dispatch(stopLoading())
      cb(true)
    }
  } catch (e) {
    dispatch(stopLoading())
    console.error(e)
    cb(false)
  }
}

export const selectQuestiosList = (state) => state.questions.questionsList;

export default questionsSlice.reducer

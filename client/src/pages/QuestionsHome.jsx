import React from 'react'

import Header from 'component/Header';
import QuestionFilter from 'component/QuestionsWrapper/QuestionFilter'
import QuestionList from 'component/QuestionsWrapper/QuestionList'

const QuestionsHome = () => {
  return (
    <>
      <Header />
      <QuestionFilter />
      <QuestionList />
    </>
  )
}

export default QuestionsHome

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import { selectQuestiosList } from 'slice/questionsSlice'

import styles from 'style/Questions/QuestionsList.module.css'

const QuestionList = (props) => {
  const [allQuestions, setAllQuestions] = useState([])

  const question = useSelector(selectQuestiosList)

  useEffect(() => {
    if (question > allQuestions.length) {
      setAllQuestions(question)
    }
  }, [question, allQuestions])

  return (
    <section className={styles.Section}>
      {question.length > 0 &&
        question.map((item) => (
          <div
            key={item.question_id}
            className={styles.Profile + ' ' + styles.ProfleWide}
          >
            <h3 className={styles.ProfileTitle}>{item.title}</h3>
            <div className={styles.ContentInit}>
              <div className={styles.ProfileImg}>
                <img src={item.owner.profile_image} alt={item.title} />
              </div>
            </div>
            <div className={styles.ContentMain}>
              <div className={styles.ProfileStats}>
                <p className={styles.ProfileStatsTitle}>Score</p>
                <h5 className={styles.ProfileStatsInfo}>
                  {item.score} {item.score === 1 ? 'ponto' : 'pontos'}
                </h5>
              </div>
              <div className={styles.ProfileStats}>
                <p className={styles.ProfileStatsTitle}>
                  Contagem de respostas
                </p>
                <h5>
                  {item.answer_count}
                  {item.answer_count === 1 ? 'resposta' : 'respostas'}
                </h5>
              </div>
              <div className={styles.ProfileStats}>
                <p className={styles.ProfileStatsTitle}>
                  Quantidade de vizualiaçõess
                </p>
                <h5 className={styles.ProfileStatsInfo}>
                  {item.view_count}{' '}
                  {item.view_count === 1 ? 'visita' : 'visitas'}
                </h5>
              </div>
              <div className={styles.ProfileStats}>
                <p className={styles.ProfileStatsTitle}>Tags</p>
                <div className={styles.TagsContent}>
                  {item.tags.map((tag) => (
                    <h5 key={tag}>{tag}</h5>
                  ))}
                </div>
              </div>
              <div className={styles.Date}>
                <h5>
                  Data de criação: {format(item.creation_date, 'dd/MM/yyyy')}
                </h5>
              </div>
            </div>
          </div>
        ))}
      {question.length === 0 && (
        <div className={styles.Feedback}>
          <h5>Não há resultados</h5>
        </div>
      )}
    </section>
  )
}

export default QuestionList

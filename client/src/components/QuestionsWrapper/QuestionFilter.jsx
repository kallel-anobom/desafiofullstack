import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import Select from 'react-select'

import styles from 'style/Questions/QuestionsFilter.module.css'
import stylesInput from 'style/Input.module.css'
import stylesSelect from 'style/Select.module.css'

import ButtonCustom from 'component/ButtonCustom'

import { startLoading } from 'slice/loadingSlice'
import { getQuestions } from 'slice/questionsSlice'

const QuestionFilter = props => {
  const dispatch = useDispatch();

  const initialValues = {
    tag: '',
    limit: '',
    score: '',
    sort: ''
  }

  const optionsSelect = [
    { value: 'activity', label: 'activity' },
    { value: 'creation', label: 'creation' },
    { value: 'votes', label: 'votes' },
    { value: 'week', label: 'week' },
    { value: 'month', label: 'month' }
  ];

  const handleSubmit = values => {
    dispatch(startLoading());

    const { tag, score, sort, limit } = values;
    const resultValues = {
      tag,
      score,
      sort: sort.value,
      limit
    };

    const result = dispatch(getQuestions(resultValues))
    console.log(result);
    return result;
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => {
          const { values, handleChange, setFieldValue, handleSubmit } = props;

          return (
            <>
              <form onSubmit={handleSubmit} className={styles.QuestionFilter}>
                <h2>Buscar na API</h2>
                <div className={styles.Container}>
                  <div className={styles.Input}>
                    <label>Tag</label>
                    <input
                      id="tag"
                      name="tag"
                      type="text"
                      className={stylesInput.Input}
                      onChange={handleChange('tag')}
                      value={values.tag}
                    />
                  </div>
                  <div className={styles.Input}>
                    <label>Limit</label>
                    <input
                      id="limit"
                      name="limit"
                      type="number"
                      className={stylesInput.Input}
                      onChange={handleChange('limit')}
                      value={values.limit}
                    />
                  </div>
                  <div className={styles.Input}>
                    <label>Score</label>
                    <input
                      id="score"
                      name="score"
                      type="number"
                      className={stylesInput.Input}
                      onChange={handleChange('score')}
                      value={values.score}
                    />
                  </div>
                  <div className={styles.Input}>
                    <label>Sort</label>
                    <Select
                      value={props.values.sort}
                      onChange={(selectedOption) => {
                        setFieldValue("sort", selectedOption )
                      }}
                      isSearchable={true}
                      options={optionsSelect}
                      name="sort"
                      isLoading={false}
                      className={stylesSelect.Select}
                    />
                  </div>
                </div>
                <div className={styles.ButtonCustom}>
                  <ButtonCustom >Buscar</ButtonCustom>
                </div>
              </form>
            </>
          )
        }}
      </Formik>
    </>
  )
};

export default QuestionFilter;

import { memo } from 'react'
import { categoryList } from '../data/data'
import CategoryOption from './CategoryOption'
import { nanoid } from 'nanoid'
import FormError from './FormError'
import { useGlobalContext } from '../context'

function ArticleInfo ({ totalSteps }) {
  const { step, article, handleChange, formErrors } = useGlobalContext()
  const { category, author } = article

  return (
    <section>
      <h2>
        Step {step} of {totalSteps}: Article Info
      </h2>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-category'>Category:</label>

        <select
          name='category'
          id='article-category'
          value={category}
          onChange={e => handleChange(e.target)}
        >
          {categoryList.map(item => {
            return (
              <CategoryOption optionName={item} key={nanoid()}></CategoryOption>
            )
          })}
        </select>
        {formErrors.categoryError && (
          <FormError error={formErrors.categoryError}></FormError>
        )}
      </div>

      <div className='article-form__control-wrapper'>
        <label htmlFor='article-author'>Author:</label>
        <input
          id='article-author'
          type='text'
          name='author'
          value={author}
          onChange={e => {
            handleChange(e.target)
          }}
        />
        {formErrors.authorError && (
          <FormError error={formErrors.authorError}></FormError>
        )}
      </div>
    </section>
  )
}
export default memo(ArticleInfo)

import { memo } from 'react'
import FormError from './FormError'
import { useGlobalContext } from '../context'

function ArticleContent ({ totalSteps }) {
  const { step, article, handleChange, formErrors } = useGlobalContext()

  const { title, body } = article
  return (
    <section>
      <h2>
        Step {step} of {totalSteps}: Article Content
      </h2>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-title'>Title:</label>
        <input
          id='article-title'
          type='text'
          name='title'
          value={title}
          onChange={e => handleChange(e.target)}
        />
        {formErrors.titleError && (
          <FormError error={formErrors.titleError}></FormError>
        )}
      </div>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-body'>Text:</label>
        <textarea
          id='article-body'
          type='text'
          name='body'
          value={body}
          onChange={e => handleChange(e.target)}
          rows={3}
        ></textarea>
        {formErrors.bodyError && (
          <FormError error={formErrors.bodyError}></FormError>
        )}
      </div>
    </section>
  )
}
export default memo(ArticleContent)

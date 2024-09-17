import { useGlobalContext } from '../context'

function ArticleContent () {
  const { step, article, handleChange, formErrors } = useGlobalContext()
  const { title, body } = article
  return (
    <section>
      <h2>Step {step} of 4: Article Content</h2>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-title'>Title:</label>
        <input
          id='article-title'
          type='text'
          name='title'
          value={title}
          onChange={e => handleChange(e)}
        />
        {formErrors.titleError && (
          <p className='error'>{formErrors.titleError}</p>
        )}
      </div>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-body'>Text:</label>
        <textarea
          id='article-body'
          type='text'
          name='body'
          value={body}
          onChange={e => handleChange(e)}
          rows={3}
        ></textarea>
        {formErrors.bodyError && (
          <p className='error'>{formErrors.bodyError}</p>
        )}
      </div>
    </section>
  )
}
export default ArticleContent

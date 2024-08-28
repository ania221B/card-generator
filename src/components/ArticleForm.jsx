import { useGlobalContext } from '../context'

function ArticleForm () {
  const { article, handleChange, handleSubmission } = useGlobalContext()
  const { category, title, body, author } = article
  return (
    <form
      action='#'
      autoComplete='false'
      className='article-form'
      onSubmit={handleSubmission}
    >
      <fieldset>
        <legend>Article Content</legend>
        <div class='article-form__control-wrapper'>
          <label htmlFor='article-category'>Category:</label>

          <select
            name='category'
            id='article-category'
            value={category}
            onChange={e => handleChange(e)}
          >
            <option value=''>--Pick one option--</option>
            <option value='Business'>Business</option>
            <option value='Education'>Education</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Environment'>Environment</option>
            <option value='Fashion'>Fashion</option>
            <option value='Food & Drink'>Food & Drink</option>
            <option value='Health'>Health</option>
            <option value='Lifestyle'>Lifestyle</option>
            <option value='Personal Growth'>Personal Growth</option>
            <option value='Productivity'>Productivity</option>
            <option value='Sports'>Sports</option>
            <option value='Technology'>Technology</option>
            <option value='Travel'>Travel</option>
          </select>
        </div>
        <div class='article-form__control-wrapper'>
          <label htmlFor='article-title'>Title:</label>
          <input
            id='article-title'
            type='text'
            name='title'
            value={title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div class='article-form__control-wrapper'>
          <label htmlFor='article-body'>Text:</label>
          <textarea
            id='article-body'
            type='text'
            name='body'
            value={body}
            onChange={e => handleChange(e)}
            rows={1}
          ></textarea>
        </div>

        <div class='article-form__control-wrapper'>
          <label htmlFor='article-author'>Author:</label>
          <input
            id='article-author'
            type='text'
            name='author'
            value={author}
            onChange={e => handleChange(e)}
          />
        </div>
      </fieldset>
      <button className='button' type='submit'>
        Generate Card
      </button>
    </form>
  )
}
export default ArticleForm

import { useGlobalContext } from '../context'

function ArticleForm () {
  const { article, handleChange, handleSubmission } = useGlobalContext()
  const { category, title, body, author, theme } = article
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
            <option value='business'>Business</option>
            <option value='education'>Education</option>
            <option value='entertainment'>Entertainment</option>
            <option value='environment'>Environment</option>
            <option value='fashion'>Fashion</option>
            <option value='food & drink'>Food & Drink</option>
            <option value='health'>Health</option>
            <option value='lifestyle'>Lifestyle</option>
            <option value='personal growth'>Personal Growth</option>
            <option value='productivity'>Productivity</option>
            <option value='sports'>Sports</option>
            <option value='technology'>Technology</option>
            <option value='travel'>Travel</option>
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

        <div className='article-form__control-wrapper'>
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

      <fieldset>
        <legend>Article Visuals</legend>
        <header>Choose a theme</header>
        <div>
          <input
            type='radio'
            name='theme'
            id='soft-purple-theme'
            value='soft-purple'
            onChange={e => handleChange(e)}
            checked={theme === 'soft-purple'}
          />
          <label htmlFor='soft-purple'>Soft Purple</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='soft-blue-theme'
            value='soft-blue'
            onChange={e => handleChange(e)}
            checked={theme === 'soft-blue'}
          />
          <label htmlFor='soft-blue'>Soft Blue</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='stormy-pink-theme'
            value='stormy-pink'
            onChange={e => handleChange(e)}
            checked={theme === 'stormy-pink'}
          />
          <label htmlFor='stormy-pink'>Stormy Pink</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='vintage-pink-theme'
            value='vintage-pink'
            onChange={e => handleChange(e)}
            checked={theme === 'vintage-pink'}
          />
          <label htmlFor='vintage-pink'>Vintage Pink</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='coffee-time-theme'
            value='coffee-time'
            onChange={e => handleChange(e)}
            checked={theme === 'coffee-time'}
          />
          <label htmlFor='coffee-time'>Coffee Time</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='summer-theme'
            value='summer'
            onChange={e => handleChange(e)}
            checked={theme === 'summer'}
          />
          <label htmlFor='summer'>Summer</label>
        </div>
        <div>
          <input
            type='radio'
            name='theme'
            id='nature-theme'
            value='nature'
            onChange={e => handleChange(e)}
            checked={theme === 'nature'}
          />
          <label htmlFor='nature'>Nature</label>
        </div>
      </fieldset>
      <button className='button' type='submit'>
        Generate Card
      </button>
    </form>
  )
}
export default ArticleForm

import { useGlobalContext } from '../context'
import { categoryList } from '../data/data'
import CategoryOption from './CategoryOption'
import { nanoid } from 'nanoid'

function ArticleInfo () {
  const { step, article, handleChange, formErrors } = useGlobalContext()
  const { category, author } = article

  return (
    <section>
      <h2>Step {step} of 4: Article Info</h2>
      <div className='article-form__control-wrapper'>
        <label htmlFor='article-category'>Category:</label>

        <select
          name='category'
          id='article-category'
          value={category}
          onChange={e => handleChange(e)}
        >
          <option value=''>--Pick one option--</option>

          {categoryList.map(item => {
            return (
              <CategoryOption optionName={item} key={nanoid()}></CategoryOption>
            )
          })}
        </select>
        {formErrors.categoryError && (
          <p className='error'>{formErrors.categoryError}</p>
        )}
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
        {formErrors.authorError && (
          <p className='error'>{formErrors.authorError}</p>
        )}
      </div>
    </section>
  )
}
export default ArticleInfo

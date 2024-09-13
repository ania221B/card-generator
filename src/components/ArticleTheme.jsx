import { useGlobalContext } from '../context'
import { themeList } from '../data/data'
import RadioItem from './RadioItem'
import { nanoid } from 'nanoid'

function ArticleTheme () {
  const { step, article } = useGlobalContext()
  return (
    <section>
      <h2>Step {step} of 4: Article Theme</h2>
      <fieldset>
        <legend>Choose a theme</legend>

        {themeList.map(item => {
          return (
            <RadioItem
              item={article.theme}
              itemName={item}
              itemType='theme'
              key={nanoid()}
            >
              <div className='avatar theme-preview'>
                <div className={`bg-${item}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </RadioItem>
          )
        })}
      </fieldset>
    </section>
  )
}
export default ArticleTheme

import { useGlobalContext } from '../context'
import { themeList } from '../data/data'
import ThemeItem from './ThemeItem'
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
            <ThemeItem
              themeName={item}
              article={article}
              key={nanoid()}
            ></ThemeItem>
          )
        })}
      </fieldset>
    </section>
  )
}
export default ArticleTheme

import { useGlobalContext } from '../context'
import { avatarList } from '../data/data'
import RadioItem from './RadioItem'
import { nanoid } from 'nanoid'

function ArticleAvatar ({ totalSteps }) {
  const { step, article } = useGlobalContext()

  return (
    <section>
      <h2>
        Step {step} of {totalSteps}: Avatar
      </h2>
      <fieldset>
        <legend>Choose an avatar</legend>

        {avatarList.map(item => {
          return (
            <RadioItem
              item={article.avatar}
              itemName={item}
              itemType='avatar'
              key={nanoid()}
            >
              <div className={`avatar bg-${item}`}></div>
            </RadioItem>
          )
        })}
      </fieldset>
    </section>
  )
}
export default ArticleAvatar

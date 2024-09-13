import { useGlobalContext } from '../context'
import { avatarList } from '../data/data'
import RadioItem from './RadioItem'
import { nanoid } from 'nanoid'

function ArticleAvatar () {
  const { step, article } = useGlobalContext()
  return (
    <section>
      <h2>Step {step} of 4: Avatar</h2>
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

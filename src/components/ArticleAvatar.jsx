import { useGlobalContext } from '../context'
import { avatarList } from '../data/data'
import AvatarItem from './AvatarItem'
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
            <AvatarItem
              avatarName={item}
              article={article}
              key={nanoid()}
            ></AvatarItem>
          )
        })}
      </fieldset>
    </section>
  )
}
export default ArticleAvatar

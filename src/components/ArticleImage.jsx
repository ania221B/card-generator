import { useGlobalContext } from '../context'
import { imageList } from '../data/data'
import RadioItem from './RadioItem'
import { nanoid } from 'nanoid'

function ArticleImage ({ totalSteps }) {
  const { step, article } = useGlobalContext()

  return (
    <section>
      <h2>
        Step {step} of {totalSteps}: Image
      </h2>
      <fieldset>
        <legend>Choose an image</legend>

        {imageList.map(item => {
          return (
            <RadioItem
              item={article.image}
              itemName={item}
              itemType='image'
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
export default ArticleImage

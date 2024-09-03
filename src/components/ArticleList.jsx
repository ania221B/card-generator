import { nanoid } from 'nanoid'
import { useGlobalContext } from '../context'
import Card from './Card'

function ArticleList () {
  const { articleList } = useGlobalContext()
  return (
    <ul className='grid-auto-fit' role='list'>
      {articleList.map(articleItem => {
        return (
          <li key={nanoid()}>
            <Card article={articleItem}></Card>
          </li>
        )
      })}
    </ul>
  )
}
export default ArticleList

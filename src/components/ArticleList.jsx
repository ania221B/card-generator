import { useGlobalContext } from '../context'
import Card from './Card'

function ArticleList () {
  const { articleList } = useGlobalContext()
  return (
    <ul className='grid-auto-fit' role='list'>
      {articleList.map(articleItem => {
        return <Card article={articleItem}></Card>
      })}
    </ul>
  )
}
export default ArticleList

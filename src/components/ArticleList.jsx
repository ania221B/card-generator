import { nanoid } from 'nanoid'
import { useGlobalContext } from '../context'
import Card from './Card'

function ArticleList () {
  const { articleList } = useGlobalContext()

  if (articleList.length === 0) {
    return (
      <header
        className='container min-height centered-content'
        data-container='small'
        style={{
          maxWidth: '55ch'
        }}
      >
        <h2>
          You have no cards with article previews yet. Go to the previous page
          to generate some ☺️
        </h2>
      </header>
    )
  }
  return (
    <ul className='grid-auto-fit min-height' role='list'>
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

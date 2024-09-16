import { nanoid } from 'nanoid'
import { useGlobalContext } from '../context'
import Card from './Card'

function ArticleList () {
  const { articleList } = useGlobalContext()

  if (articleList.length === 0) {
    return (
      <header
        className='container'
        data-container='small'
        style={{
          minHeight: '36rem',
          display: 'grid',
          placeItems: 'center',
          maxWidth: '55ch',
          marginBlock: 'auto'
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
    <ul
      className='grid-auto-fit'
      role='list'
      style={{
        minHeight: '36rem'
      }}
    >
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

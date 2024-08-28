import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import Card from './components/Card'
import { useGlobalContext } from './context'

function App () {
  const { defaultArticle } = useGlobalContext()
  return (
    <main>
      <section className='section'>
        <div className='container flow'>
          <h1>Card Generator</h1>
          <ArticleForm></ArticleForm>
          <Card article={defaultArticle}></Card>
        </div>
      </section>
      <section className='section'>
        <div className='container' data-container='large'>
          <ArticleList></ArticleList>
        </div>
      </section>
    </main>
  )
}

export default App

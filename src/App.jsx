import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import Card from './components/Card'
import { useGlobalContext } from './context'

function App () {
  const { defaultArticle } = useGlobalContext()
  return (
    <main>
      <section className='section'>
        <div className='container  flow' style={{ '--flow-spacer': '3em' }}>
          <header className='flow' style={{ '--flow-spacer': '1.5em' }}>
            <h1 className='main-title'>Cardify</h1>
            <p className='text-center'>
              Go from article to a preview card like the one below. All it takes
              is filling a short form.
            </p>
          </header>
          <div className='columns'>
            <ArticleForm></ArticleForm>
            <Card article={defaultArticle}></Card>
          </div>
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

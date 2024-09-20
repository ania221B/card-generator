import { useEffect } from 'react'
import ArticleForm from './components/ArticleForm'
import ArticleList from './components/ArticleList'
import Card from './components/Card'
import FormDialog from './components/FormDialog'
import { useGlobalContext } from './context'

function App () {
  const {
    page,
    defaultArticle,
    displayNextPage,
    displayPreviousPage,
    isModalOpen,
    modalRef,
    handleClickOutside,
    defaultTheme,
    applyTheme
  } = useGlobalContext()

  useEffect(() => {
    isModalOpen ? modalRef.current.showModal() : modalRef.current.close()
  }, [isModalOpen])

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

  useEffect(() => {
    applyTheme()
  }, [defaultTheme])
  return (
    <main>
      <section
        className={
          page === 1
            ? 'section section--full-screen reveal'
            : 'section section--full-screen hidden'
        }
      >
        <div className='container columns'>
          <header className='grid-row'>
            <h1 className='main-title'>Cardify</h1>
            <p className='text-center'>
              Go from article to a preview card like the one here. All it takes
              is filling a short form.
            </p>
            <button
              type='button'
              className='button'
              button-type='outline'
              onClick={displayNextPage}
              aria-label='Go to from to get started'
            >
              Get Started
            </button>
          </header>

          <Card article={defaultArticle}></Card>
        </div>
      </section>

      <section
        className={
          page === 2
            ? 'section section--full-screen reveal'
            : 'section section--full-screen hidden'
        }
      >
        <div className='container grid-row' data-container='small'>
          <ArticleForm></ArticleForm>
          <div className='button-wrapper'>
            <div className='buttons'>
              <button
                type='button'
                className='button'
                button-type='outline'
                onClick={displayPreviousPage}
                aria-label='Go to previous page'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='m9.402 12.5l1.636 2.942q.143.293-.075.497t-.49.044l-5.187-3.306q-.378-.242-.378-.677t.378-.677l5.187-3.306q.273-.161.49.044t.076.497L9.402 11.5H21q.214 0 .357.143T21.5 12t-.143.357T21 12.5z'
                  />
                </svg>
              </button>
              <button
                type='button'
                className='button'
                button-type='outline'
                onClick={displayNextPage}
                aria-label='Go to next page'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='M13.527 15.983q-.273.161-.49-.044t-.076-.497l1.637-2.942H3q-.213 0-.357-.143T2.5 12t.143-.357T3 11.5h11.598l-1.636-2.942q-.143-.293.075-.497t.49-.044l5.187 3.306q.378.243.378.677t-.378.677z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className={
          page === 3
            ? 'section section--full-screen reveal'
            : 'section section--full-screen hidden'
        }
      >
        <div className='container grid-row' data-container='large'>
          <ArticleList></ArticleList>
          <div className='button-wrapper container' data-container='small'>
            <div className='buttons'>
              <button
                type='button'
                className='button'
                button-type='outline'
                onClick={displayPreviousPage}
                aria-label='Go to previous page'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='32'
                  height='32'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='currentColor'
                    d='m9.402 12.5l1.636 2.942q.143.293-.075.497t-.49.044l-5.187-3.306q-.378-.242-.378-.677t.378-.677l5.187-3.306q.273-.161.49.044t.076.497L9.402 11.5H21q.214 0 .357.143T21.5 12t-.143.357T21 12.5z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FormDialog></FormDialog>
    </main>
  )
}

export default App

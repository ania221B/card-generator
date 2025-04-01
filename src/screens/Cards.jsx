import ArticleList from '../components/ArticleList'
import { useGlobalContext } from '../context'

function Cards () {
  const { page, displayPreviousPage } = useGlobalContext()
  return (
    <section
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
    </section>
  )
}
export default Cards

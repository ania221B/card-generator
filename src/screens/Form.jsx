import ArticleForm from '../components/ArticleForm'
import Buttons from '../components/Buttons'
import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'

function Form () {
  const { page, getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button => button.navigation === 'screen' && button.content !== 'Get Started'
  )
  return (
    <section
      className={
        page === 2
          ? 'section section--full-screen reveal'
          : 'section section--full-screen hidden'
      }
    >
      <div className='container grid-row' data-container='small'>
        <ArticleForm></ArticleForm>
        <Buttons
          buttons={filteredButtons.map(button => ({
            ...button,
            onClick: getButtonOnClick(button.action, button.navigation)
          }))}
        ></Buttons>
      </div>
    </section>
  )
}
export default Form

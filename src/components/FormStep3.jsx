import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleTheme from './ArticleTheme'
import Buttons from './Buttons'

function FormStep3 () {
  const { getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button => button.navigation === 'form' && button.content !== 'Generate'
  )
  return (
    <>
      <ArticleTheme></ArticleTheme>
      <Buttons
        buttons={filteredButtons.map(button => {
          const buttonAction = getButtonOnClick(
            button.action,
            button.navigation
          )
          return {
            ...button,
            onClick: buttonAction
          }
        })}
      ></Buttons>
    </>
  )
}
export default FormStep3

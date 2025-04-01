import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleContent from './ArticleContent'
import Buttons from './Buttons'

function FormStep2 () {
  const { getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button => button.navigation === 'form' && button.content !== 'Generate'
  )
  return (
    <>
      <ArticleContent></ArticleContent>
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
export default FormStep2

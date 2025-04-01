import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleAvatar from './ArticleAvatar'
import Buttons from './Buttons'

function FormStep4 () {
  const { getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button => button.navigation === 'form' && button.content !== 'Generate'
  )
  return (
    <>
      <ArticleAvatar></ArticleAvatar>
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
export default FormStep4

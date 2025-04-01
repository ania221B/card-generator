import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleInfo from './ArticleInfo'
import Buttons from './Buttons'

function FormStep1 () {
  const { getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button =>
      button.navigation === 'form' &&
      button.action !== 'prev' &&
      button.content !== 'Generate'
  )
  return (
    <>
      <ArticleInfo></ArticleInfo>
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
export default FormStep1

import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleImage from './ArticleImage'
import Buttons from './Buttons'

function FormStep5 () {
  const { getButtonOnClick } = useGlobalContext()
  const filteredButtons = navigationButtons.filter(
    button => button.navigation === 'form' && button.action !== 'next'
  )
  return (
    <>
      <ArticleImage></ArticleImage>
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
export default FormStep5

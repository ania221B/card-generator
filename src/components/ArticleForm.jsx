import { useMemo } from 'react'
import { useGlobalContext } from '../context'
import { navigationButtons } from '../data/data'
import ArticleAvatar from './ArticleAvatar'
import ArticleContent from './ArticleContent'
import ArticleImage from './ArticleImage'
import ArticleInfo from './ArticleInfo'
import ArticleTheme from './ArticleTheme'
import Buttons from './Buttons'

function ArticleForm () {
  const { step, handleSubmission, getButtonOnClick } = useGlobalContext()

  const filteredButtons = useMemo(() => {
    if (step === 1) {
      return navigationButtons.filter(
        button =>
          button.navigation === 'form' &&
          button.action !== 'prev' &&
          button.content !== 'Generate'
      )
    } else if (step === 5) {
      return navigationButtons.filter(
        button => button.navigation === 'form' && button.action !== 'next'
      )
    }

    return navigationButtons.filter(
      button => button.navigation === 'form' && button.content !== 'Generate'
    )
  }, [step])

  return (
    <form
      action='#'
      autoComplete='false'
      className='article-form'
      onSubmit={handleSubmission}
    >
      <div className='article-form__wrapper'>
        {step === 1 && <ArticleInfo></ArticleInfo>}
        {step === 2 && <ArticleContent></ArticleContent>}
        {step === 3 && <ArticleTheme></ArticleTheme>}
        {step === 4 && <ArticleAvatar></ArticleAvatar>}
        {step === 5 && <ArticleImage></ArticleImage>}

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
      </div>
    </form>
  )
}
export default ArticleForm

import React from 'react'
import { useMemo } from 'react'
import { navigationButtons } from '../data/data'
import ArticleAvatar from './ArticleAvatar'
import ArticleContent from './ArticleContent'
import ArticleImage from './ArticleImage'
import ArticleInfo from './ArticleInfo'
import ArticleTheme from './ArticleTheme'
import Buttons from './Buttons'
import { useGlobalContext } from '../context'

function ArticleForm () {
  const { step, handleSubmission, getButtonOnClick } = useGlobalContext()
  const formSteps = [
    <ArticleInfo></ArticleInfo>,
    <ArticleContent></ArticleContent>,
    <ArticleTheme></ArticleTheme>,
    <ArticleAvatar></ArticleAvatar>,
    <ArticleImage></ArticleImage>
  ]
  const totalSteps = formSteps.length

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
        {/* {step === 1 && <ArticleInfo totalSteps={totalSteps}></ArticleInfo>}
        {step === 2 && (
          <ArticleContent totalSteps={totalSteps}></ArticleContent>
        )}
        {step === 3 && <ArticleTheme totalSteps={totalSteps}></ArticleTheme>}
        {step === 4 && <ArticleAvatar totalSteps={totalSteps}></ArticleAvatar>}
        {step === 5 && <ArticleImage totalSteps={totalSteps}></ArticleImage>} */}
        {formSteps[step - 1] &&
          React.cloneElement(formSteps[step - 1], { totalSteps })}
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

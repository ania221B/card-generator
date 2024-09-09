import { useGlobalContext } from '../context'
import ArticleAvatar from './ArticleAvatar'
import ArticleContent from './ArticleContent'
import ArticleImage from './ArticleImage'
import ArticleInfo from './ArticleInfo'
import ArticleTheme from './ArticleTheme'

function ArticleForm () {
  const { step, handleSubmission, displayPrevStep, displayNextStep } =
    useGlobalContext()
  if (step === 1) {
    return (
      <form
        action='#'
        autoComplete='false'
        className='article-form'
        onSubmit={handleSubmission}
      >
        <ArticleInfo></ArticleInfo>

        <div className='button-wrapper'>
          <div className='buttons'>
            <button
              type='button'
              onClick={displayNextStep}
              className='button'
              button-type='primary'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    )
  }
  if (step === 2) {
    return (
      <form
        action='#'
        autoComplete='false'
        className='article-form'
        onSubmit={handleSubmission}
      >
        <ArticleContent></ArticleContent>

        <div className='button-wrapper'>
          <div className='buttons'>
            <button
              type='button'
              onClick={displayPrevStep}
              className='button'
              button-type='outline'
            >
              Back
            </button>
            <button
              type='button'
              onClick={displayNextStep}
              className='button'
              button-type='primary'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    )
  }
  if (step === 3) {
    return (
      <form
        action='#'
        autoComplete='false'
        className='article-form'
        onSubmit={handleSubmission}
      >
        <ArticleTheme></ArticleTheme>

        <div className='button-wrapper'>
          <div className='buttons'>
            <button
              type='button'
              onClick={displayPrevStep}
              className='button'
              button-type='outline'
            >
              Back
            </button>
            <button
              type='button'
              onClick={displayNextStep}
              className='button'
              button-type='primary'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    )
  }
  if (step === 4) {
    return (
      <form
        action='#'
        autoComplete='false'
        className='article-form'
        onSubmit={handleSubmission}
      >
        <ArticleAvatar></ArticleAvatar>

        <div className='button-wrapper'>
          <div className='buttons'>
            <button
              type='button'
              onClick={displayPrevStep}
              className='button'
              button-type='outline'
            >
              Back
            </button>
            <button
              type='button'
              onClick={displayNextStep}
              className='button'
              button-type='primary'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    )
  }
  if (step === 5) {
    return (
      <form
        action='#'
        autoComplete='false'
        className='article-form'
        onSubmit={handleSubmission}
      >
        <ArticleImage></ArticleImage>

        <div className='button-wrapper'>
          <div className='buttons'>
            <button
              type='button'
              onClick={displayPrevStep}
              className='button'
              button-type='outline'
            >
              Back
            </button>
            <button className='button' type='submit' button-type='primary'>
              Generate
            </button>
          </div>
        </div>
      </form>
    )
  }
}
export default ArticleForm

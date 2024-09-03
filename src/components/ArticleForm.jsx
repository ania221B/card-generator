import { useGlobalContext } from '../context'
import ArticleAvatar from './ArticleAvatar'
import ArticleContent from './ArticleContent'
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

        <div className='buttons'>
          <button type='button' onClick={displayNextStep}>
            Next
          </button>
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

        <div className='buttons'>
          <button type='button' onClick={displayPrevStep}>
            Back
          </button>
          <button type='button' onClick={displayNextStep}>
            Next
          </button>
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

        <div className='buttons'>
          <button type='button' onClick={displayPrevStep}>
            Back
          </button>
          <button type='button' onClick={displayNextStep}>
            Next
          </button>
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

        <div className='buttons'>
          <button type='button' onClick={displayPrevStep}>
            Back
          </button>
          <button className='button' type='submit'>
            Generate
          </button>
        </div>
      </form>
    )
  }
}
export default ArticleForm

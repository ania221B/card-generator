import { nanoid } from 'nanoid'
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export function useGlobalContext () {
  return useContext(GlobalContext)
}

function AppContext ({ children }) {
  const [page, setPage] = useState(1)
  const [step, setStep] = useState(1)
  const [defaultTheme, setDefaultTheme] = useState('soft-purple')
  const [defaultAvatar, setDefaultAvatar] = useState('diagonal-stripes')
  const [defaultImage, setDefaultImage] = useState('hypnotic')
  const [article, setArticle] = useState({
    id: nanoid(),
    category: '',
    title: '',
    body: '',
    author: '',
    readTime: '',
    date: '',
    theme: defaultTheme,
    avatar: defaultAvatar,
    image: defaultImage
  })
  const [defaultArticle, setDefaultArticle] = useState({
    id: nanoid(),
    category: 'Food & Drink',
    title: 'The Art & Science of Tea',
    body: `Tea, a timeless beverage, offers a world of flavours, health benefits, and rituals. Discover how tea transforms from leaf to cup in this insightful journey.`,
    author: 'Lucy Whitmore',
    readTime: 4,
    date: getFormatedDate(new Date(2024, 7, 19)),
    dateTime: getFormatedDate(new Date(2024, 7, 19)),
    theme: defaultTheme,
    avatar: defaultAvatar,
    image: defaultImage
  })
  const [articleList, setArticleList] = useState([])
  const [formErrors, setFormErrors] = useState({
    categoryError: '',
    titleError: '',
    bodyError: '',
    authorError: ''
  })

  /**
   * Chceks if there are any fields with no value
   * @param {Object} article An object with data inputted by user
   * @returns {Array} Error messages for any missing fields
   */
  function validateForm (article) {
    const { category, title, body, author } = article
    const errors = {}
    if (!category.trim()) {
      errors.categoryError = 'Please select category from the list'
    }

    if (!title.trim()) {
      errors.titleError = 'Please provide a title of your article'
    }

    if (!body.trim()) {
      errors.bodyError = 'Please provide a text content of your article'
    }

    if (!author.trim()) {
      errors.authorError = `Please provide article author's name`
    }
    return errors
  }

  /**
   * Updates the article variable with data inputed by user, validates the data and updates error state
   * @param {InputEvent} e The input change event object
   */
  function handleChange (e) {
    const { name, value } = e.target

    setArticle({ ...article, [name]: value })

    const existingErrors = { ...formErrors }
    const updatedArticle = { ...article, [name]: value }
    const fieldsWithErrors = validateForm(updatedArticle)

    if (name === 'category') {
      existingErrors.categoryError = fieldsWithErrors.categoryError || ''
    }
    if (name === 'title') {
      existingErrors.titleError = fieldsWithErrors.titleError || ''
    }
    if (name === 'body') {
      existingErrors.bodyError = fieldsWithErrors.bodyError || ''
    }
    if (name === 'author') {
      existingErrors.authorError = fieldsWithErrors.authorError || ''
    }

    setFormErrors(prevErrors => ({
      ...prevErrors,
      [`${name}Error`]: ''
    }))
  }

  /**
   * Handles submission of form data
   * @param {SubmitEvent} e Form submit event object
   */
  function handleSubmission (e) {
    e.preventDefault()
    const existingErrors = validateForm(article)

    const { category, title, body, author, theme, avatar, image } = article

    setFormErrors(existingErrors)

    const isFormValid = Object.keys(existingErrors).length === 0

    if (isFormValid) {
      // alert('Success!')

      setArticleList([
        ...articleList,
        {
          id: nanoid(),
          category: makeCapitalizedText(category),
          title: makeCapitalizedText(title),
          body: shortenText(body),
          author: makeCapitalizedText(author),
          readTime: body ? calculateReadingTime(body) : 0,
          date: getFormatedDate(new Date()),
          dateTime: getDateTimeString(new Date()),
          theme,
          avatar,
          image
        }
      ])
      setArticle({
        id: nanoid(),
        category: '',
        title: '',
        body: '',
        author: '',
        readTime: '',
        date: '',
        theme: defaultTheme,
        avatar: defaultAvatar,
        image: defaultImage
      })

      setTimeout(() => {
        setStep(1)
        setPage(3)
      }, 300)
      setFormErrors({})
    } else {
      alert('Please fill in all form fields.')
    }
  }

  /**
   * Displays next page/screen by increasing the value of page variable
   */
  function displayNextPage () {
    setPage(currentPage => {
      return currentPage + 1
    })
  }

  /**
   * Displays previous page/screen by decreasing the value of page variable
   */
  function displayPreviousPage () {
    setPage(currentPage => {
      return currentPage - 1
    })
  }

  /**
   * Increases the value of step variable
   */
  function increaseStep () {
    setStep(currentStep => {
      return currentStep + 1
    })
  }

  /**
   * Decreases the value of step variable
   */
  function decreaseStep () {
    setStep(currentStep => {
      return currentStep - 1
    })
  }

  /**
   * Displays next form step by preventing default behaviour and increasing the value of step variable
   */
  function displayNextStep (e) {
    e.preventDefault()
    increaseStep()
  }

  /**
   * Displays previous form step by preventing default behaviour and decreasing the value of step variable
   */
  function displayPrevStep (e) {
    e.preventDefault()
    decreaseStep()
  }

  /**
   * Shortens article text to first 25 words and applies ellipsis at the end if appropriate
   * @param {String} text The body/text content of the article
   * @returns {String} Text content of the article shortened to first 25 words
   */
  function shortenText (text) {
    const textPortion = text.split(' ').slice(0, 26)
    const lastWord = textPortion[textPortion.length - 1]
    const lastWordIndex = text.indexOf(lastWord)
    const shortText = text.substring(0, lastWordIndex).trim()
    return shortText.endsWith('.') ? shortText : shortText + '...'
  }

  /**
   * Calculates article reading time based on the lenght of the article text content
   * @param {String} text The body/text content of the article
   * @returns {Number} Time needed to read the article
   */
  function calculateReadingTime (text) {
    const avgReadingSpeed = 225
    const wordsToRead = text.split(' ').length
    const time = Math.ceil(wordsToRead / avgReadingSpeed)

    return time
  }

  /**
   * Formats date, so that it is displayed in the 3-character month name 1 or 2-digit day, 4-digit year format
   * @param {Date} date Current date
   * @returns {String} String with formatted date
   */
  function getFormatedDate (date) {
    const monthsInAYear = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]
    const year = date.getFullYear()
    const month = monthsInAYear[date.getMonth()]
    const day = date.getDate()
    return `${month} ${day}, ${year}`
  }

  /**
   * Converts date to a hyphenated string for the use in `dateTime` parameter
   * @param {Date} date Current date
   * @returns {String} Hyphenated string with date
   */
  function getDateTimeString (date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate()
    return `${year}-${month}-${day}`
  }

  /**
   * Converts text string into all lowercase hyphenated version of the said text string
   * @param {String} string Text to convert
   * @returns {String} All lowercase, hyphenated string
   */
  function makeHyphenatedLowerCase (string) {
    return string.toLowerCase().replace(' ', '-')
  }

  /**
   * Creates a capitalized version of standard text with spaces or a hyphenated text
   * @param {String} string Text to capitalize
   * @returns {String} Capitalized text string
   */
  function makeCapitalizedText (string) {
    const capitalized = []
    if (string.includes(' ')) {
      string.split(' ').forEach(item => {
        const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
        capitalized.push(newItem)
      })
    } else {
      string.split('-').forEach(item => {
        const newItem = item.substring(0, 1).toUpperCase() + item.substring(1)
        capitalized.push(newItem)
      })
    }
    return capitalized.join(' ')
  }

  return (
    <GlobalContext.Provider
      value={{
        page,
        setPage,
        step,
        setStep,
        article,
        setArticle,
        defaultArticle,
        setDefaultArticle,
        defaultTheme,
        setDefaultTheme,
        articleList,
        setArticleList,
        formErrors,
        setFormErrors,
        handleChange,
        handleSubmission,
        displayNextPage,
        displayPreviousPage,
        displayNextStep,
        displayPrevStep,
        getFormatedDate,
        makeHyphenatedLowerCase,
        makeCapitalizedText
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext

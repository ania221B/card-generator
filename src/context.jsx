import { nanoid } from 'nanoid'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useDebounce } from '@uidotdev/usehooks'

const GlobalContext = createContext()
export function useGlobalContext () {
  return useContext(GlobalContext)
}

function AppContext ({ children }) {
  const [triggerAnimation, setTriggerAnimation] = useState(false)
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
  const [modalState, setModalState] = useState('closed')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)
  const [inputChange, setInputChange] = useState({ name: '', value: '' })
  const debouncedValue = useDebounce(inputChange, 500)

  /**
   * Chceks if there are any fields with no value
   * @param {Object} article An object with data inputted by user
   * @returns {Array} Error messages for any missing fields
   */
  const validateForm = useCallback(article => {
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
  }, [])
  /**
   * Updates the article variable with data inputed by user, sets data for validation
   * @param {Object} item Object with name and value properties
   */
  const handleChange = useCallback(item => {
    const { name, value } = item

    setArticle(article => ({ ...article, [name]: value }))

    if (name === 'theme' || name === 'image' || name === 'avatar') return

    setInputChange({ name, value })
  }, [])

  /**
   * Validates form and updates existing errors
   */
  useEffect(() => {
    if (!debouncedValue.name) return

    const { name, value } = debouncedValue

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
  }, [debouncedValue])

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
      openDialog()
    }
  }

  /**
   * Displays next page/screen by increasing the value of page variable and triggers validation
   */
  const displayNextPage = useCallback(() => {
    setPage(currentPage => {
      return currentPage + 1
    })
    setTriggerAnimation(true)
  }, [])

  /**
   * Displays previous page/screen by decreasing the value of page variable and triggers validation
   */
  const displayPreviousPage = useCallback(() => {
    setPage(currentPage => {
      return currentPage - 1
    })
    setTriggerAnimation(true)
  }, [])

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
  const displayNextStep = useCallback(_ => {
    increaseStep()
  }, [])

  /**
   * Displays previous form step by preventing default behaviour and decreasing the value of step variable
   */
  const displayPrevStep = useCallback(_ => {
    decreaseStep()
  }, [])

  /**
   * Determines function to be executed on button click
   * @param {String} action action property from button object
   * @param {String} navigation navigation property from button object
   * @returns function to be executed when button is clicked
   */

  const getButtonOnClick = useCallback(
    (action, navigation) => e => {
      if (navigation === 'form') {
        e.preventDefault()
      }

      if (navigation === 'screen') {
        return action === 'prev' ? displayPreviousPage() : displayNextPage()
      } else {
        return action === 'prev' ? displayPrevStep() : displayNextStep()
      }
    },
    [displayNextPage, displayPreviousPage, displayNextStep, displayPrevStep]
  )

  /**
   * Shortens article text to first 25 words and applies ellipsis at the end if appropriate
   * @param {String} text The body/text content of the article
   * @returns {String} Text content of the article shortened to first 25 words
   */
  function shortenText (text) {
    const textPortion = text.split(' ').slice(0, 26)
    if (textPortion.length === 1) {
      return textPortion
    }
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

  /**
   * Opens the modal
   */
  function openDialog () {
    if (!modalRef.current) return

    setIsModalOpen(true)
    modalRef.current.showModal()
    setModalState('opened')
  }

  /**
   * Triggers the closing of the modal and enables the animation to run
   */
  function closeDialog () {
    if (!modalRef.current) return

    setIsModalOpen(false)
    setModalState('is-closing')
    modalRef.current.addEventListener('animationend', disableDialog)
  }

  /**
   * Closes the modal
   * @param {AnimationEvent} e End of animation that hides the modal
   */
  function disableDialog (e) {
    if (e.animationName === 'hideDialog') {
      setModalState('closed')
      modalRef.current.close()
      modalRef.current.removeEventListener('animationend', disableDialog)
    }
  }

  /**
   * Executes appropriate function depending on modal state
   */
  const toggleDialog = useCallback(() => {
    isModalOpen ? closeDialog() : openDialog()
  }, [isModalOpen])

  /**
   * Closes the modal when user clicks outside of it
   * @param {MouseEvent} e Click event occurring outside the modal
   */
  function handleClickOutside (e) {
    const modalContent = modalRef.current.querySelector('.dialog__content')

    if (modalRef.current && !modalContent.contains(e.target)) {
      closeDialog()
    }
  }

  /**
   * Applies color theme to body
   */
  function applyTheme () {
    document.body.classList.add(`${defaultTheme}`)
  }

  const values = useMemo(
    () => ({
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
      isModalOpen,
      setIsModalOpen,
      modalRef,
      handleChange,
      handleSubmission,
      displayNextPage,
      displayPreviousPage,
      displayNextStep,
      displayPrevStep,
      getButtonOnClick,
      getFormatedDate,
      makeHyphenatedLowerCase,
      makeCapitalizedText,
      modalState,
      handleClickOutside,
      closeDialog,
      openDialog,
      toggleDialog,
      disableDialog,
      applyTheme,
      triggerAnimation,
      setTriggerAnimation,
      inputChange,
      setInputChange
    }),
    [
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
      isModalOpen,
      setIsModalOpen,
      modalRef,
      handleChange,
      handleSubmission,
      displayNextPage,
      displayPreviousPage,
      displayNextStep,
      displayPrevStep,
      getButtonOnClick,
      getFormatedDate,
      makeHyphenatedLowerCase,
      makeCapitalizedText,
      modalState,
      handleClickOutside,
      closeDialog,
      openDialog,
      toggleDialog,
      disableDialog,
      applyTheme,
      triggerAnimation,
      setTriggerAnimation,
      inputChange,
      setInputChange
    ]
  )

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  )
}

export default AppContext

import { nanoid } from 'nanoid'
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export function useGlobalContext () {
  return useContext(GlobalContext)
}

function AppContext ({ children }) {
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

  function handleChange (e) {
    setArticle({ ...article, [e.target.name]: e.target.value })
  }

  function handleSubmission (e) {
    e.preventDefault()
    const { category, title, body, author, theme, avatar, image } = article
    if (!category || !title || !body || !author) {
      alert('Please fill in all form fields.')
      return
    }

    setArticleList([
      ...articleList,
      {
        id: nanoid(),
        category: makeCapitalizedText(category),
        title: makeCapitalizedText(title),
        body: shortenText(body),
        author: makeCapitalizedText(author),
        readTime: calculateReadingTime(body),
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
    setStep(1)
  }

  function increaseStep () {
    setStep(currentStep => {
      return currentStep + 1
    })
  }
  function decreaseStep () {
    setStep(currentStep => {
      return currentStep - 1
    })
  }

  function displayNextStep (e) {
    e.preventDefault()
    increaseStep()
  }
  function displayPrevStep (e) {
    e.preventDefault()
    decreaseStep()
  }

  function shortenText (text) {
    const textPortion = text.split(' ').slice(0, 26)
    const lastWord = textPortion[textPortion.length - 1]
    const lastWordIndex = text.indexOf(lastWord)
    const shortText = text.substring(0, lastWordIndex).trim()
    return shortText.endsWith('.') ? shortText : shortText + '...'
  }

  function calculateReadingTime (text) {
    const avgReadingSpeed = 225
    const wordsToRead = text.split(' ').length
    const time = Math.ceil(wordsToRead / avgReadingSpeed)

    return time
  }

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

  function getDateTimeString (date) {
    const year = date.getFullYear()
    const month = date.getMonth().toString().padStart(2, '0')
    const day = date.getDate()
    return `${year}-${month}-${day}`
  }

  function makeHyphenatedLowerCase (string) {
    return string.toLowerCase().replace(' ', '-')
  }

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
        step,
        setStep,
        article,
        setArticle,
        defaultArticle,
        setDefaultArticle,
        articleList,
        setArticleList,
        handleChange,
        handleSubmission,

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

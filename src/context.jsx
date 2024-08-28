import { nanoid } from 'nanoid'
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export function useGlobalContext () {
  return useContext(GlobalContext)
}

function AppContext ({ children }) {
  const [defaultTheme, setDefaultTheme] = useState('soft-purple')
  const [article, setArticle] = useState({
    id: nanoid(),
    category: '',
    title: '',
    body: '',
    author: '',
    readTime: '',
    date: '',
    theme: defaultTheme
  })
  const [defaultArticle, setDefaultArticle] = useState({
    id: nanoid(),
    category: 'Food & Drink',
    title: 'The Art and Science of Tea',
    body: `Tea, a timeless beverage, offers a world of flavours, health benefits, and rituals. Discover how tea transforms from leaf to cup in this insightful journey.`,
    author: 'Lucy Whitmore',
    readTime: 4,
    date: getFormatedDate(new Date(2024, 7, 19)),
    dateTime: getFormatedDate(new Date(2024, 7, 19)),
    theme: defaultTheme
  })
  const [articleList, setArticleList] = useState([])

  function handleChange (e) {
    setArticle({ ...article, [e.target.name]: e.target.value })
  }

  function handleSubmission (e) {
    e.preventDefault()
    const { category, title, body, author, theme } = article
    if (!category || !title || !body || !author) {
      alert('Please fill in all form fields.')
      return
    }

    setArticleList([
      ...articleList,
      {
        id: nanoid(),
        category,
        title,
        body: shortenText(body),
        author,
        readTime: calculateReadingTime(body),
        date: getFormatedDate(new Date()),
        dateTime: getDateTimeString(new Date()),
        theme
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
      theme: defaultTheme
    })
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
  return (
    <GlobalContext.Provider
      value={{
        article,
        setArticle,
        defaultArticle,
        setDefaultArticle,
        articleList,
        setArticleList,
        handleChange,
        handleSubmission,
        getFormatedDate
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppContext

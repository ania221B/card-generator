function Card ({ article }) {
  const {
    category,
    title,
    body,
    author,
    readTime,
    date,
    dateTime,
    theme,
    avatar,
    image
  } = article
  return (
    <article className={`${theme} card-wrapper`}>
      <div className='card flow'>
        <div className={`card__img bg-${image}`}></div>
        <div className='card__content'>
          <header>
            <div className='card__content__meta'>
              <p className='category badge'>{category}</p>
              <p className='read-time'>
                <span>{readTime}</span> min read
              </p>
              <p className='publish-date'>
                <time dateTime={dateTime}>{date}</time>
              </p>
            </div>
            <h2 className='ff-secondary fs-800'>{title}</h2>
          </header>
          <p>{body}</p>
          <footer>
            <div className='card__content__author'>
              <div className={`avatar bg-${avatar}`}></div>
              <p>{author}</p>
            </div>
          </footer>
        </div>
        <a
          href='http://'
          target='_blank'
          rel='noopener noreferrer'
          className='button link-button'
          button-type='outline'
        >
          <span>Read full article</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M13.527 15.983q-.273.161-.49-.044t-.076-.497l1.637-2.942H3q-.213 0-.357-.143T2.5 12t.143-.357T3 11.5h11.598l-1.636-2.942q-.143-.293.075-.497t.49-.044l5.187 3.306q.378.243.378.677t-.378.677z'
            />
          </svg>
        </a>
      </div>
    </article>
  )
}
export default Card

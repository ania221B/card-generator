function Card () {
  return (
    <article className='card flow'>
      <div className='card__img'>
        <img
          src='./images/lidiya-pavlikova-y_gKWLrw3N4-unsplash.jpg'
          alt='half full jug with tea, fruit and flower blend'
        />
      </div>
      <div className='card__content'>
        <header>
          <div className='card__content__meta'>
            <p className='category badge'>Food & Drink</p>
            <p className='read-time'>
              <span>4 min</span> read
            </p>
            <p className='publish-date'>
              <time datetime=''>August 19, 2024</time>
            </p>
          </div>
          <h2 className='ff-secondary fs-800'>The Art and Science of Tea</h2>
        </header>
        <p>
          Tea, a timeless beverage, offers a world of flavours, health benefits,
          and rituals. Discover how tea transforms from leaf to cup in this
          insightful journey.
        </p>
        <footer>
          <div className='card__content__author'>
            <picture>
              <img
                src='./images/pexels-lucas-pezeta-1878522.jpg'
                alt='Lucy Whitmore'
              />
            </picture>
            <p>Lucy Whitmore</p>
          </div>
        </footer>
      </div>
      <a
        href='http://'
        target='_blank'
        rel='noopener noreferrer'
        className='button'
        button-type='outline'
      >
        Read full article
      </a>
    </article>
  )
}
export default Card

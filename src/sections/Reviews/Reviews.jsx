import './Reviews.css'
import  reviews  from './constants.js'
import { stars } from '../../assets/icons'

const Reviews = () => {
  return (
    <section className='reviews-section'>
      <h1>Avaliações</h1>
      <h2 className='cta'>Dê uma nova vida ao seu carro!</h2>
      <article className='article-reviews'>
        { reviews.map((review) => (
            <div key={review.cliente} className='review'>
              <div className="cliente">
                    <div>
                        <img src={review.imgURL} alt={review.cliente} className='avatar' />
                    </div>
                    <div className="feedback">
                        <h3 className='review-text'>{review.cliente}</h3>
                        <p className='review-text'>{review.feedback}</p>
                        <img src={stars} alt="stars" className='stars' />
                    </div>
                </div>
            </div>
         ))
        }
      </article>
    </section>
  )
}

export default Reviews
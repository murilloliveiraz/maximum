import { AboutUs, ContactUs, Footer, Hero, OurServices, Reviews } from './sections'
import Nav from './components/Nav/Nav'

const App = () => {

  return (
    <main >
      <section className='hero'>
        <Nav/>
        <Hero />
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
        < OurServices/>
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <ContactUs/>
      </section>
      <Footer />
    </main>
  )
}

export default App

import About from '@/components/About'
import Footer from '@/components/Footer'
// import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Products />
			<Testimonials />
			{/* <Contact /> */}
			<Footer />
		</>
	)
}

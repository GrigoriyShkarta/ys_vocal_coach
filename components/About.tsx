import Image from 'next/image'
import React from 'react'

import yana from '@/assets/ys_coach.jpeg'

const About = () => {
	return (
		<section id='about' className='py-20 bg-white relative overflow-hidden'>
			<div className='container mx-auto px-6 relative z-10'>
				<div className='flex flex-col lg:flex-row items-center justify-between'>
					<div className='lg:w-[65%] mb-10 md:mb-0 md:pr-10 relative'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
							Про <span className='text-red-500'>коуча</span>
						</h2>
						<p className='text-gray-600 mb-4'>
							Привіт, я Яна — викладач сучасного, рок- та екстремального вокалу,
							співачка, музикант та автор пісень. Маю понад 15 років досвіду в
							музиці та 8 років у вокалі. Я автор навчальних продуктів для
							вокалістів і викладачів вокалу, а також веду вокальний блог, де
							ділюся корисними порадами та прийомами. За свою кар’єру я провела
							тисячі уроків вокалу, організувала вокальні марафони, в яких брали
							участь сотні учасників, провела більше 50-ти майстер-класів з
							екстремальних прийомів для вокалістів і викладачів, випустила
							власні збірки вокальних вправ у стилі рок.
						</p>
						<p className='text-gray-600 mb-4'>
							Моя мета — передати якісні знання та допомогти розкрити потенціал
							кожного голосу. У своїй роботі використовую лише науково
							обґрунтовану інформацію, засновану на дослідженнях, анатомії та
							фізіології голосу.
						</p>
					</div>

					<div className='max-w-[450px] w-full relative'>
						<div className='bg-gray-200 h-80 w-full rounded-lg overflow-hidden max-sm:h-[250px] relative'>
							{/* Здесь будет изображение коуча */}
							<Image
								src={yana}
								alt='ys_vocalcoach'
								fill
								className='object-cover'
							/>
						</div>
						<div className='absolute -bottom-5 -left-5 h-20 w-20 bg-red-500 rounded-full z-10'></div>
						<div className='absolute -top-5 -right-5 h-32 w-32 border-4 border-red-500 rounded-full'></div>
					</div>
				</div>
			</div>

			{/* Большой кружок слева */}
			<div className='absolute -left-20 top-1/2 transform -translate-y-1/2 h-96 w-96 bg-red-100 rounded-full z-0 max-sm:top-[200px]'></div>
		</section>
	)
}

export default About

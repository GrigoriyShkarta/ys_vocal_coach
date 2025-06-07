import React from 'react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-white py-12'>
			<div className='container mx-auto px-6'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='mb-6 md:mb-0'>
						<Link
							href='/'
							className='text-2xl font-bold text-red-500 hover:text-red-400 transition-colors'
						>
							YS <span className='text-white'>VOCAL COACH</span>
						</Link>
						<p className='text-gray-400 mt-2'>
							Сучасний, рок та ектремальний вокалю.
						</p>
					</div>

					{/* <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left'>
						<div>
							<h3 className='font-semibold mb-2'>Навигация</h3>
							<ul className='space-y-1'>
								<li>
									<Link
										href='#about'
										className='text-gray-400 hover:text-white transition-colors'
									>
										О коуче
									</Link>
								</li>
								<li>
									<Link
										href='#products'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Продукты
									</Link>
								</li>
								<li>
									<Link
										href='#testimonials'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Отзывы
									</Link>
								</li>
								<li>
									<Link
										href='#contact'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Контакты
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='font-semibold mb-2'>Продукты</h3>
							<ul className='space-y-1'>
								<li>
									<Link
										href='#'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Мастер-класс
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Рок клуб
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Fire Up Your Drive
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-gray-400 hover:text-white transition-colors'
									>
										Rock Etudes
									</Link>
								</li>
							</ul>
						</div> */}
					{/* </div> */}
				</div>

				<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm'>
					<p>© {new Date().getFullYear()} VocalMaster. Усі права захищені.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

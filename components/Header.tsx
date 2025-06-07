'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<motion.header
			className='fixed w-full bg-black bg-opacity-80 z-50 backdrop-blur-sm'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
		>
			<div className='container mx-auto px-6 py-4 flex justify-between items-center'>
				<motion.div whileHover={{ scale: 1.05 }}>
					<span className='text-2xl font-bold text-red-500 hover:text-red-400 transition-colors'>
						YS <span className='text-white'>VOCAL COACH</span>
					</span>
				</motion.div>

				<nav className='hidden md:flex space-x-8'>
					{['about', 'products', 'testimonials', 'contact'].map(
						(item, index) => (
							<motion.div
								key={item}
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.1 * index }}
							>
								<Link
									href={`#${item}`}
									className='text-white hover:text-red-400 transition-colors'
								>
									{item === 'about' && 'Про коуча'}
									{item === 'products' && 'Продукти'}
									{item === 'testimonials' && 'Відгуки'}
								</Link>
							</motion.div>
						)
					)}
				</nav>

				<motion.button
					className='md:hidden text-white'
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</motion.button>
			</div>

			{/* Мобильное меню */}
			{isOpen && (
				<motion.div
					className='md:hidden bg-gray-900'
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
				>
					<div className='container mx-auto px-6 py-4 flex flex-col space-y-4'>
						{['about', 'products', 'testimonials', 'contact'].map(item => (
							<motion.div
								key={item}
								initial={{ x: -20, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ type: 'spring', stiffness: 300 }}
							>
								<Link
									href={`#${item}`}
									className='block text-white hover:text-red-400 transition-colors py-2'
									onClick={() => setIsOpen(false)}
								>
									{item === 'about' && 'О коуче'}
									{item === 'products' && 'Продукты'}
									{item === 'testimonials' && 'Отзывы'}
									{item === 'contact' && 'Контакты'}
								</Link>
							</motion.div>
						))}
					</div>
				</motion.div>
			)}
		</motion.header>
	)
}

export default Header

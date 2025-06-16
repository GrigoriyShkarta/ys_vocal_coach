'use client'

import React from 'react'
import AbstractElements from './AbstractElements'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa' // Иконка стрелки
import Link from 'next/link'

const Hero = () => {
	const handleScroll = () => {
		const nextSection = document.getElementById('about')
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section className='relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 overflow-hidden'>
			{/* Абстрактный фон */}
			<AbstractElements />

			{/* Легкая подсветка */}
			<div className='absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0' />
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20 blur-2xl pointer-events-none z-0' />

			{/* Контент */}
			<motion.div
				className='container mx-auto px-6 z-10 text-center flex-1 flex flex-col justify-center'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<motion.h1
					className='text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
				>
					Розкрий <span className='text-red-500'>свій вокальний</span> потенціал
				</motion.h1>

				<motion.p
					className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto drop-shadow-md'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
				>
					Сучасний, рок та екстремальний вокал с професійним коучем. Навчання,
					яке працює!
				</motion.p>

				<Link href={`#products`}>
					<motion.button
						className='relative bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 overflow-hidden w-fit mx-auto'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							delay: 0.6,
							type: 'spring',
							stiffness: 200,
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className='absolute inset-0 bg-red-500 opacity-30 blur-2xl rounded-full animate-pulse' />
						<span className='relative cursor-pointer'>Почати навчання</span>
					</motion.button>
				</Link>
			</motion.div>

			{/* Стрелка вниз */}
			<motion.div
				className='absolute bottom-8 z-10 cursor-pointer'
				onClick={handleScroll}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'easeInOut',
				}}
			>
				<FaChevronDown
					className='text-white text-3xl animate-bounce-slow'
					size={100}
				/>
			</motion.div>
		</section>
	)
}

export default Hero

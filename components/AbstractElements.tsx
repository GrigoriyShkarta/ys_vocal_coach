'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const VocalAbstractElements = () => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return null

	return (
		<div className='absolute inset-0 overflow-hidden pointer-events-none'>
			{/* Мягкий градиентный фон */}
			<motion.div
				className='absolute w-[120%] h-[120%] bg-gradient-to-br from-[#ed6b15]/10 via-[#ff99cc]/10 to-[#ffffff]/10 rounded-full blur-3xl'
				style={{
					top: '-10%',
					left: '-10%',
				}}
				animate={{
					scale: [1, 1.05, 1],
					rotate: [0, 10, 0],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			{/* Большие волны */}
			<motion.div
				className='absolute w-[80vw] h-[80vw] border border-white/10 rounded-full'
				style={{
					top: '30%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.05, 0.08, 0.05],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<motion.div
				className='absolute w-[60vw] h-[60vw] border border-rose-400/10 rounded-full'
				style={{
					top: '30%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				animate={{
					scale: [1, 1.08, 1],
					opacity: [0.04, 0.06, 0.04],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
			/>

			{/* Дрейфующие большие частицы */}
			{Array.from({ length: 5 }).map((_, i) => (
				<motion.div
					key={i}
					className='absolute bg-white/10 rounded-full'
					style={{
						width: `${10 + Math.random() * 10}px`,
						height: `${10 + Math.random() * 10}px`,
						top: `${Math.random() * 90}%`,
						left: `${Math.random() * 90}%`,
					}}
					animate={{
						y: ['0%', '10%', '0%'],
						x: ['0%', '5%', '0%'],
						opacity: [0.2, 0.1, 0.2],
					}}
					transition={{
						duration: 20 + i * 5,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: i,
					}}
				/>
			))}

			{/* Легкий блик в центре */}
			<motion.div
				className='absolute bg-white/5 rounded-full'
				style={{
					width: '20vw',
					height: '20vw',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.05, 0.1, 0.05],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
		</div>
	)
}

export default VocalAbstractElements

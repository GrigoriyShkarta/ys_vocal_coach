'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(false)
	const [isClient, setIsClient] = useState(false)

	// Use router here, but only call `useRouter` hook once (before any conditional logic).
	const router = useRouter()

	useEffect(() => {
		// This ensures that the code only runs on the client side
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (!isClient) return

		const handleStart = () => setLoading(true)
		const handleComplete = () => setLoading(false)

		// Ensure router is available before setting up event listeners
		if (router) {
			router.events.on('routeChangeStart', handleStart)
			router.events.on('routeChangeComplete', handleComplete)
			router.events.on('routeChangeError', handleComplete)

			return () => {
				router.events.off('routeChangeStart', handleStart)
				router.events.off('routeChangeComplete', handleComplete)
				router.events.off('routeChangeError', handleComplete)
			}
		}
	}, [isClient, router])

	return (
		<>
			{loading && (
				<motion.div
					className='fixed inset-0 bg-black z-50 flex items-center justify-center'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
				>
					<motion.div
						animate={{
							rotate: 360,
							scale: [1, 1.2, 1],
						}}
						transition={{
							rotate: {
								duration: 1,
								repeat: Infinity,
								ease: 'linear',
							},
							scale: {
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'reverse',
							},
						}}
						className='h-16 w-16 border-4 border-red-500 border-t-transparent rounded-full'
					/>
				</motion.div>
			)}

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		</>
	)
}

export default PageTransition

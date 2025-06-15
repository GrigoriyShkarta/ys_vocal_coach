'use client'

import { motion } from 'framer-motion'
import { Product } from '../types/types'
import Image from 'next/image'

interface ProductCardProps {
	product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	return (
		<motion.div
			className='bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col relative text-white'
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{ duration: 0.5 }}
			whileHover={{
				y: -5,
				boxShadow:
					'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
			}}
		>
			<Image
				src={product?.bg}
				alt={product.title}
				className='absolute w-full h-full left-0 top-0 z-0'
			/>
			<div className='absolute inset-0 bg-black/55 z-0' />
			<div className='z-10 flex flex-col justify-between h-full'>
				<motion.div
					className={`h-2 `}
					whileHover={{ scaleX: 1.1, originX: 0 }}
					style={{ backgroundColor: product.color }}
				/>

				<div className='p-6 flex-grow '>
					<h3 className='text-xl font-bold mb-3'>{product.title}</h3>
					<p className=''>{product.description}</p>
				</div>

				<div className='px-6 pb-6 flex-col justify-between'>
					{/* <div className='flex justify-between items-center mb-4'>
						<span className='text-[24px] font-medium'>{product.price}</span>
					</div> */}

					<a href={product.link} target='_blank'>
						<motion.button
							className='w-full bg-[#ef4444] text-white py-2 rounded-lg cursor-pointer'
							whileHover={{
								backgroundColor: '#ef4444',
								scale: 1.02,
							}}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							Детальніше
						</motion.button>
					</a>
				</div>
			</div>
		</motion.div>
	)
}

export default ProductCard

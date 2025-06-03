'use client'

import { Testimonial } from '@/types/types'
import { motion } from 'framer-motion'

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Алексей',
		position: 'Вокалист рок-группы',
		text: 'После марафона Fire Up Your Drive мой вокал стал мощнее и выносливее. Теперь могу отыграть целый концерт без усталости!',
		avatar: 'A',
	},
	{
		id: 2,
		name: 'Марина',
		position: 'Эстрадная певица',
		text: 'Работа с коучем полностью изменила мой подход к вокалу. Теперь я понимаю, как правильно использовать свой голос.',
		avatar: 'M',
	},
	{
		id: 3,
		name: 'Иван',
		position: 'Участник рок-клуба',
		text: 'Рок-клуб - это не просто занятия, а настоящее сообщество единомышленников. Прогресс за полгода - колоссальный!',
		avatar: 'I',
	},
]

const Testimonials = () => {
	return (
		<section id='testimonials' className='py-20 bg-black text-white'>
			<div className='container mx-auto px-6'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Відгуки <span className='text-red-500'>учнів</span>
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							className='bg-gray-900 p-8 rounded-lg'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
							}}
							whileHover={{ y: -5 }}
						>
							<div className='flex items-center mb-6'>
								<motion.div
									className='h-12 w-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4'
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.5 }}
								>
									{testimonial.avatar}
								</motion.div>
								<div>
									<h3 className='text-xl font-semibold'>{testimonial.name}</h3>
									<p>{testimonial.position}</p>
								</div>
							</div>
							<p className='text-gray-300'>&quot;{testimonial.text}&quot;</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials

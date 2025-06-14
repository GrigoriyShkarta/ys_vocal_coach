'use client'

import { Testimonial } from '@/types/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Марина Кіладзе',
		position: 'Cпівачка, викладач вокалу',
		text: `
			Дякую тобі за майстер-клас 🫶💋 Це був неймовірний досвід! Мені було дуже комфортно, затишно в роботі з тобою.. що зараз аж сумно розлучатися. 🤗

			За 1,5 години майстер-класу ти цілком змінила мої уявлення, щодо меж власних можливостей! Вся інформація дуже структурована, зрозуміла та цікава.🔥 Я отримала від цього майстер-класу все що мені було необхідно ! Твій зворотний зв'язок це просто у саме ❤️ Було багато практики за цей тиждень, я змогла відшукати той жаданий дісторшн, драйв та інше. Навіть заспівала уривок пісні з використанням екстриму.. я в шоці😭 та захваті✨ Дякую🥰 буду і далі продовжувати працювати в цьому напрямку та  з нетерпінням чекаю на твій курс✨
		`,
		avatar: '/images/kil.jpg',
	},
	{
		id: 2,
		name: 'Марія Гординська',
		position: 'Вокалістка',
		text: `Важко на словах виказати ту радість, яка переповнює мене від цього марафону...це перший крок до моєї мрії дитинства, і я рада, що зробила його саме з Вами, Яно🥰
Якби не Ви, я і не знала б, що є такі талановиті викладачі! Порівнюючи з досвідом на іншому курсі вокалу, можу сказати, що інформація викладена чітко, ясно, стисло, дозовано (часто дають  інформацію всю підряд і неможливо за раз запам'ятати), з прекрасними прикладами всім відомих пісень та практичними вправами. Я у захваті! Нехай Вам щастить ✨`,
		avatar: '/images/gord.jpg',
	},
	{
		id: 3,
		name: 'Захар Сидорук',
		position: 'Вокаліст, композитор',
		text: `Якщо Ви шукаєте професійного наставника з вокалу - Вам до Яни!

Я вдячний алгоритмам, що підкинув мені відео, де Яна співає, скрімить, гролить, дісторшить і все в одному флаконі, і вирішив, що теж так хочу. Адже вокалісти зазвичай сильні в чомусь одному, а Яна - майстер голосу.
Коли розпочали займатися, рівень моїх знань і скілів був мінімальним. Тож завдяки Яні я став впевнено користуватися термінологією, сленгом вокалістів, покращив інтонування та розібрався з фізіологією вокалу. Я отримав базу + навчився драйву та більш якісному розчепленню.
Але головне навіть не це. Хочу окремо подякувати Яні за ту мотивацію та підтримку в боротьбі з комплексами. Завдяки їй я повірив, що лімітів не існує, а плідна праця завжди приносить результати, іноді навіть неочікувані.
Тож неважливо профі Ви чи новачок як я, зустріти такого наставника як Яна - це скарб❤️`,
		avatar: '/images/zahar.jpg',
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
							<div className='flex items-center mb-6 relative gap-2'>
								<Image
									src={testimonial.avatar}
									width={50}
									height={50}
									alt={testimonial.name}
									className='rounded-full'
								/>
								<div>
									<h3 className='text-xl font-semibold'>{testimonial.name}</h3>
									<p>{testimonial.position}</p>
								</div>
							</div>
							{/* Абзаци текста */}
							<div className='text-gray-300'>
								{testimonial.text.split(/\n+/).map((paragraph, idx) => (
									<p key={idx} className='mb-2'>
										{paragraph.trim()}
									</p>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials

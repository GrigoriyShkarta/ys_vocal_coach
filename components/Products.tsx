import React from 'react'
import ProductCard from './ProductCard'
import mk from '@/assets/mk.jpeg'
import rock_club from '@/assets/rock_club.jpg'
import fuyd from '@/assets/fuyd.jpeg'
import workbook from '@/assets/workbook.jpg'
import re from '@/assets/re.jpg'
import group from '@/assets/group.jpg'
import indiv from '@/assets/indiv1.jpg'
import { Product } from '@/types/types'

const products: Product[] = [
	{
		id: 7,
		title: 'Індивідуальне навчання',
		description:
			'Індивідуальні онлайн-уроки сучасного, рок та екстремального вокалу. Розкрий свій потенціал з професійним викладачем міжнародного рівня.',
		price: 'від 1 500 грн',
		color: '#155dfc',
		bg: indiv,
		link: 'https://individual-lesson.vercel.app/',
	},
	{
		id: 6,
		title: 'Курс "Екстрим-техніки з 0"',
		description:
			'Онлайн-курс у міні-групах, де ти крок за кроком опануєш всі екстремальні техніки вокалу — без болю, страху й надриву. Авторська методика. Повна підтримка. Живі уроки.',
		price: '3 000 грн/міс',
		color: '#ed3ddd',
		bg: group,
		link: 'https://extreme-group-sable.vercel.app/',
	},
	{
		id: 1,
		title: 'Індивідуальний майстер-клас з екстрим-вокалу',
		description:
			'Це унікальне навчання для викладачів вокалу та вокалістів, які прагнуть за короткий час глибоко зануритися у світ екстрим-технік.',
		price: '5 000 грн',
		color: '#e7000b',
		bg: mk,
		link: 'https://mk-two-theta.vercel.app/',
	},
	{
		id: 3,
		title: 'Марафон "Fire Up Your Drive"',
		description:
			'"Fire Up Your Drive" — це марафон, спрямований на розвиток екстремальної техніки "Drive".',
		price: 'від 1500 грн',
		color: '#ffb52c',
		bg: fuyd,
		link: 'https://fire-up-your-drive-ua.vercel.app/',
	},
	{
		id: 4,
		title: 'Збірка вправ "Fire Up Your Drive"',
		description:
			'20 унікальних вправ у рок-стилі для тренування екстремальної вокальної техніки “Drive”.',
		price: 'від 1500 грн',
		color: '#9333ea',
		bg: workbook,
		link: 'https://workbook-fyd.vercel.app/',
	},
	{
		id: 5,
		title: 'Збірка вправ "Rock Etudes"',
		description:
			'Авторська збірка вправ у рок-стилі створена на основі моделі “Estill Voice”.',
		price: 'від 1 790 грн',
		color: '#9346e8',
		bg: re,
		link: 'https://rock-etudes-new.vercel.app//',
	},
	{
		id: 2,
		title: 'Закритий телеграм канал "Rock Club"',
		description:
			'Ексклюзивний закритий клуб для вокалістів та викладачів, присвячений розвитку та вдосконаленню сучасного, рок та екстрим-вокалу.',
		price: '600 грн/міс',
		color: '#53caff',
		bg: rock_club,
		link: 'https://rock-club.vercel.app/',
	},
]

const Products = () => {
	return (
		<section id='products' className='py-20 bg-gray-100'>
			<div className='container mx-auto px-6'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16'>
					Мої <span className='text-red-500'>продукти</span>
				</h2>

				<div className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-8'>
					{products.map(product => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Products

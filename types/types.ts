import { StaticImageData } from 'next/image'

export interface Product {
	id: number
	title: string
	description: string
	price: string
	bg: StaticImageData
	color: string
	link: string
}

export interface Testimonial {
	id: number
	name: string
	text: string
	avatar: string
	position: string
}

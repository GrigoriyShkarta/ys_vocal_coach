import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
	title: 'YS Vocal Coach — Викладач сучасного, рок та екстремального вокалу',
	description:
		'Індивідуальні уроки сучасного, рок та екстремального вокалу. Опановуй техніки scream, growl, чистий спів. Онлайн навчання для будь-якого рівня.',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	keywords:
		'ys vocal coach, vocal coach, вокал, екстремальний вокал, scream, growl, сучасний вокал, рок вокал, уроки вокалу, вокальний коучинг, спів, навчання вокалу, вокальні техніки, голос, співак, вокальні заняття',
	viewport: 'width=device-width, initial-scale=1',
	authors: [
		{ name: 'YS Vocal Coach', url: 'https://ys-vocal-coach.vercel.app/' },
	],
	openGraph: {
		title: 'YS Vocal Coach — викладач сучасного, рок та екстремального вокалу',
		description:
			'Індивідуальні уроки сучасного, рок та екстремального вокалу. Опановуй техніки scream, growl, чистий спів. Онлайн навчання для будь-якого рівня.',
		url: 'https://ys-vocal-coach.vercel.app/',
		siteName: 'YS Vocal Coach',
		locale: 'uk_UA',
		type: 'website',
		images: [
			{
				url: 'https://ys-vocal-coach.vercel.app/images/ys_coach.jpeg',
				width: 1200,
				height: 630,
				alt: 'YS Vocal Coach — викладач сучасного, рок та екстремального вокалу',
				type: 'image/jpeg',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'YS Vocal Coach — викладач сучасного, рок та екстремального вокалу',
		description:
			'Індивідуальні уроки сучасного, рок та екстремального вокалу. Опановуй техніки scream, growl, чистий спів. Онлайн навчання для будь-якого рівня.',
		creator: '@ysvocalcoach',
		images: ['https://ys-vocal-coach.vercel.app/images/ys_coach.jpeg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'qcvIVqiwWGMP7_8wlcsGFoa_KSSGBs6fbKjw679dFPI',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Script
					id='schema-person'
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Person',
							name: 'YS Vocal Coach',
							jobTitle: 'Викладач сучасного, рок та екстремального вокалу',
							url: 'https://ys-vocal-coach.vercel.app/',
							sameAs: ['https://instagram.com/ysvocalcoach'],
						}),
					}}
				/>
				{children}
			</body>
		</html>
	)
}


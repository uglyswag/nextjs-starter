import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const inter = localFont({
	src: [
		{
			path: './fonts/InterDisplay-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './fonts/InterDisplay-Italic.woff2',
			weight: '400',
			style: 'italic'
		},
		{
			path: './fonts/InterDisplay-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './fonts/InterDisplay-MediumItalic.woff2',
			weight: '500',
			style: 'italic'
		},
		{
			path: './fonts/InterDisplay-SemiBold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './fonts/InterDisplay-SemiBoldItalic.woff2',
			weight: '600',
			style: 'italic'
		},
		{
			path: './fonts/InterDisplay-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/InterDisplay-BoldItalic.woff2',
			weight: '700',
			style: 'italic'
		}
	],
	display: 'swap',
	variable: '--font-sans'
})

export const metadata: Metadata = {
	title: 'NextJS Starter',
	description: ''
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.variable}>{children}</body>
		</html>
	)
}

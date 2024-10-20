import { SmoothScrolling } from '@/components/layout/SmoothScrolling'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.scss'

const inter = localFont({
	src: [
		{
			path: './fonts/Inter-Regular.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: './fonts/Inter-Italic.woff2',
			weight: '400',
			style: 'italic'
		},
		{
			path: './fonts/Inter-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './fonts/Inter-MediumItalic.woff2',
			weight: '500',
			style: 'italic'
		},
		{
			path: './fonts/Inter-SemiBold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './fonts/Inter-SemiBoldItalic.woff2',
			weight: '600',
			style: 'italic'
		},
		{
			path: './fonts/Inter-Bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: './fonts/Inter-BoldItalic.woff2',
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
			<body className={inter.variable}>
				<SmoothScrolling>{children}</SmoothScrolling>
			</body>
		</html>
	)
}

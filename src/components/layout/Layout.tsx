import { Footer } from './footer/Footer'
import { Header } from './header/Header'

interface ILayout {
	children: React.ReactNode
}

export function Layout({ children }: ILayout) {
	return (
		<div className='relative flex h-screen w-full flex-col items-center justify-center gap-4'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

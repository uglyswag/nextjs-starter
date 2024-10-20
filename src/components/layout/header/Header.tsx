import Link from 'next/link'

export function Header() {
	return (
		<header className='p-10'>
			Read the full guide about the starter on the{' '}
			<Link
				href='https://github.com/uglyswag/nextjs-starter'
				target='_blank'
				className='text-blue-500'
			>
				GitHub page
			</Link>
		</header>
	)
}

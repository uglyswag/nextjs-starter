import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/button/Button'
import { ButtonSCSS } from '@/components/ui/button/ButtonSCSS'

export default function Home() {
	return (
		<Layout>
			<div className='flex h-full flex-col items-center justify-center gap-4'>
				<Button />
				<ButtonSCSS />
			</div>
		</Layout>
	)
}

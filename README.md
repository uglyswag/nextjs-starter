## Getting Started

Run the initialization command:

```bash
npx create-next-app [project-name] -e https://github.com/uglyswag/nextjs-starter
```

A list of dependencies that are already installed in the starter:

- [prettier](https://github.com/prettier/prettier)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [scss](https://github.com/sass/sass)
- [tailwindcss](https://tailwindcss.com)
- [clsx](https://github.com/lukeed/clsx)
- [framer-motion](https://www.framer.com/motion)
- [sharp](https://github.com/lovell/sharp)
- [lenis](https://lenis.darkroom.engineering)

The whole base of the project is already customized: favicons, style reset CSS, header, footer, layout, basic button on TailwindCSS and SCSS, Inter font + metadata for layout (i.e. homepage).

## Prettier

[Prettier](https://github.com/prettier/prettier) config is already configured initially, if you want to customize it, it is in the root of the project.

If you are using [TailwindCSS](https://tailwindcss.com), you should put one of the plugins in the `.prettierrc` file, since the `prettier-plugin-tailwindcss` plugin and `@trivago/prettier-plugin-sort-imports` plugin conflict with each other and won't work if you want to use them together.

## prettier-plugin-tailwindcss

Sorts [TailwindCSS](https://tailwindcss.com) css-classes in the correct order that [TailwindCSS](https://tailwindcss.com) itself recommends.

## SCSS

The most powerful replacement for the usual CSS. Very easy to use, unrealistically cool and mega convenient. You can create variables, functions, etc. Here is an example of creating a function:

```scss
@function white($n: 1) {
	@return rgba(255, 255, 255, $n);
}
```

Function call:

```scss
.css-class {
	color: white(0.2);
}
```

What happens in the code: the `white()` function is called, which returns the value `rgb(255, 255, 255)`, but if you specify for example `0.2` in the function parameters, the value `rgba(255, 255, 255, 255, 0.2)` will be returned, because the initial value is `1`.

## TailwindCSS

TailwindCSS doesn't need to tell you what it is. Mega convenient creation of css styles, without creating separate CSS or SCSS files.

## clsx

clsx is one of the coolest dependencies. It is capable of combining multiple styles. Here is an example of how it works:

```tsx
import styles from './Button.module.scss'
import cn from 'clsx'

function Button({ isClicked }) {
	return (
		<button
			className={cn(
				styles.violet,
				'px-4 font-bold',
				isClicked ? styles.clicked : 'bg-indigo-500'
			)}
		>
			Button
		</button>
	)
}
```

## Framer-Motion

The best library for creating animations. You can create animations on page load, appearing in the field of visibility, etc. You can make any animation - the main thing is imagination. Also share a man who is a genius in creating animations - [Olivier Larose](https://blog.olivierlarose.com). You can find many animations for your project from him.

## Sharp

Needed for optimizing images in NextJS.

## Lenis

If you want to use smooth scrolling for your website - then [lenis](https://lenis.darkroom.engineering) is the best solution. It is already installed in the project. But, since I haven't found how to properly if used for React, you can use my implementation:

```tsx
// SmoothScrolling.tsx

'use client'

import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState } from 'react'

interface ISmoothScrolling {
	children: React.ReactNode
}

export function SmoothScrolling({ children }: ISmoothScrolling) {
	const [lenis, setLenis] = useState<Lenis | null>(null)

	useEffect(() => {
		const lenisInstance = new Lenis({
			duration: 1 // default is 1.2
		})
		setLenis(lenisInstance)

		function raf(time: any) {
			lenisInstance.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)

		return () => {
			lenisInstance.destroy()
		}
	}, [])

	return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)
```

The component needs to wrap `{children}` in the `layout.tsx` file:

```tsx
// layout.tsx

// ...

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
```

## Application internalization

If you want to internalize your application, the best solution is to use [next-intl](https://next-intl-docs.vercel.app). It is easy to understand, so you can make internalizing your app easy.

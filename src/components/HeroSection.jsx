import { useEffect, useState } from 'react'
import heroImage from '../assets/herobg.png'
import { motion } from 'framer-motion'

const weddingDate = new Date('2025-08-03T00:00:00')

const HeroSection = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: '00',
		hours: '00',
		minutes: '00',
		seconds: '00',
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date().getTime()
			const distance = weddingDate.getTime() - now

			const days = String(
				Math.floor(distance / (1000 * 60 * 60 * 24)),
			).padStart(2, '0')
			const hours = String(
				Math.floor((distance / (1000 * 60 * 60)) % 24),
			).padStart(2, '0')
			const minutes = String(
				Math.floor((distance / (1000 * 60)) % 60),
			).padStart(2, '0')
			const seconds = String(Math.floor((distance / 1000) % 60)).padStart(
				2,
				'0',
			)

			if (distance < 0) {
				clearInterval(interval)
				setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' })
			} else {
				setTimeLeft({ days, hours, minutes, seconds })
			}
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className='w-full h-screen bg-white relative overflow-hidden flex flex-col items-center justify-center text-center px-4'>
			{/* Фото в кастомной форме (примерная SVG-кривая через clip-path) */}
			<div
				className='relative w-[300px] h-[400px] bg-white overflow-hidden mb-6'
				style={{
					WebkitClipPath:
						'path("M 0 100 Q 40 0, 100 40 Q 160 80, 180 140 Q 200 200, 150 280 Q 100 360, 40 320 Q 0 280, 0 200 Z")',
					clipPath:
						'path("M 0 100 Q 40 0, 100 40 Q 160 80, 180 140 Q 200 200, 150 280 Q 100 360, 40 320 Q 0 280, 0 200 Z")',
				}}
			>
				<motion.img
					src={heroImage}
					alt='wedding hero'
					className='w-full h-full object-cover scale-110'
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1.1 }}
					transition={{ duration: 1 }}
				/>
			</div>
			{/* Имена */}
			<motion.h1
				className='text-5xl sm:text-6xl font-[PassionsConflict] text-gray-800 mb-2'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				Дмитрий & Элина
			</motion.h1>
			<p className='text-xl text-gray-600 tracking-widest'>Wedding Day</p>
			{/* Таймер */}
			<div className='mt-8 flex gap-4'>
				{Object.entries(timeLeft).map(([unit, value]) => (
					<div key={unit} className='flex flex-col items-center w-16'>
						<span className='text-3xl font-semibold text-gray-800'>
							{value}
						</span>
						<span className='text-xs uppercase text-gray-500'>
							{unit === 'days'
								? 'дней'
								: unit === 'hours'
								? 'часов'
								: unit === 'minutes'
								? 'минут'
								: 'секунд'}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default HeroSection

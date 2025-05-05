import React, { useState } from 'react'
import { db } from '../firebase' // убедись, что путь к firebase.js правильный
import { collection, addDoc } from 'firebase/firestore'
import { motion } from 'framer-motion'

const RSVPForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		attendance: '',
		drinks: [],
	})

	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target

		if (type === 'checkbox') {
			setFormData((prev) => ({
				...prev,
				drinks: checked
					? [...prev.drinks, value]
					: prev.drinks.filter((item) => item !== value),
			}))
		} else if (type === 'radio') {
			setFormData((prev) => ({ ...prev, attendance: value }))
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await addDoc(collection(db, 'rsvp_responses'), formData)
			setSubmitted(true)
		} catch (error) {
			console.error('Ошибка при отправке:', error)
			alert('Произошла ошибка при отправке данных.')
		}
	}

	if (submitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				className='text-center text-green-600 font-semibold mt-6'
			>
				Спасибо! Ваша анкета успешно отправлена.
			</motion.div>
		)
	}

	const formVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
				when: 'beforeChildren',
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, x: -10 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: 'spring', stiffness: 200 },
		},
	}

	return (
		<motion.form
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			variants={formVariants}
			onSubmit={handleSubmit}
			className='max-w-xl mx-auto p-6 bg-white shadow rounded space-y-6'
		>
			<motion.p variants={itemVariants} className='text-center font-[Involve]'>
				Чтобы сделать празднование комфортным, пожалуйста, заполните анкету и
				подтвердите участие до <strong>01.07.2025</strong>
			</motion.p>

			<motion.div variants={itemVariants}>
				<label className='block font-medium mb-1'>Ваше имя и фамилия</label>
				<motion.input
					whileFocus={{ scale: 1.02 }}
					transition={{ type: 'spring', stiffness: 300 }}
					type='text'
					name='name'
					required
					value={formData.name}
					onChange={handleChange}
					className='w-full border px-3 py-2 rounded'
					placeholder='ФИО'
				/>
			</motion.div>

			<motion.div variants={itemVariants}>
				<p className='font-medium mb-2'>Подтвердите своё присутствие</p>
				<motion.label
					whileHover={{ x: 5 }}
					transition={{ type: 'spring', stiffness: 300 }}
					className='block'
				>
					<input
						type='radio'
						name='attendance'
						value='буду'
						onChange={handleChange}
						className='mr-2'
						required
					/>
					Обязательно буду
				</motion.label>
				<motion.label
					whileHover={{ x: 5 }}
					transition={{ type: 'spring', stiffness: 300 }}
					className='block'
				>
					<input
						type='radio'
						name='attendance'
						value='не смогу'
						onChange={handleChange}
						className='mr-2'
					/>
					К сожалению, не смогу присутствовать
				</motion.label>
			</motion.div>

			<motion.div variants={itemVariants}>
				<p className='font-medium mb-2'>Ваши предпочтения по напиткам</p>
				{[
					'Вино красное',
					'Вино белое',
					'Шампанское',
					'Виски',
					'Коньяк',
					'Водка',
				].map((drink) => (
					<motion.label
						key={drink}
						whileHover={{ x: 5 }}
						transition={{ type: 'spring', stiffness: 300 }}
						className='block'
					>
						<input
							type='checkbox'
							value={drink}
							checked={formData.drinks.includes(drink)}
							onChange={handleChange}
							className='mr-2'
						/>
						{drink}
					</motion.label>
				))}
			</motion.div>

			<motion.button
				variants={itemVariants}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				type='submit'
				className='w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition'
			>
				Отправить
			</motion.button>
		</motion.form>
	)
}

export default RSVPForm

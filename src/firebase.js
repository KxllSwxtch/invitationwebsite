import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDB895lPwsEkryoB9cLGOTjMo-hQk5BNbs',
	authDomain: 'invitation-720e0.firebaseapp.com',
	projectId: 'invitation-720e0',
	storageBucket: 'invitation-720e0.firebasestorage.app',
	messagingSenderId: '399495511665',
	appId: '1:399495511665:web:93ed84835c85d4124225d0',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

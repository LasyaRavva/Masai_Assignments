import { auth } from '../lib/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const signup = async (email, password) => {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  return cred.user
}

export const login = async (email, password) => {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}

export const logout = async () => {
  await signOut(auth)
}

export const subscribeToAuth = (callback) => {
  return onAuthStateChanged(auth, callback)
}

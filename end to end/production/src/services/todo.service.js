import { db } from '../lib/firebase'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from 'firebase/firestore'

const TODOS_COLLECTION = 'todos'

export const subscribeToTodos = (userId, callback) => {
  const q = query(
    collection(db, TODOS_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
    callback(data)
  })
}

export const getTodosByUser = async (userId) => {
  const q = query(
    collection(db, TODOS_COLLECTION),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
}

export const addTodo = async (userId, title) => {
  const docRef = await addDoc(collection(db, TODOS_COLLECTION), {
    userId,
    title,
    completed: false,
    createdAt: serverTimestamp(),
  })
  return docRef.id
}

export const updateTodoTitle = async (id, title) => {
  await updateDoc(doc(db, TODOS_COLLECTION, id), { title })
}

export const toggleTodoStatus = async (id, completed) => {
  await updateDoc(doc(db, TODOS_COLLECTION, id), { completed })
}

export const deleteTodo = async (id) => {
  await deleteDoc(doc(db, TODOS_COLLECTION, id))
}

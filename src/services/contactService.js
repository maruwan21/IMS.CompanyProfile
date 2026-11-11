import { get } from './api'
import contact from '../mocks/contact.json'

export const getContact = () => get('/contact', contact)

import { get } from './api'
import expertise from '../mocks/expertise.json'

export const getExpertise = () => get('/expertise', expertise)

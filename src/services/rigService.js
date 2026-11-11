import { get } from './api'
import rigs from '../mocks/rigs.json'

export const getRigs = () => get('/rigs', rigs)

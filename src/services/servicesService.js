import { get } from './api'
import services from '../mocks/services.json'

export const getServices = () => get('/services', services)

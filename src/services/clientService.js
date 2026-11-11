import { get } from './api'
import clients from '../mocks/clients.json'

export const getClients = () => get('/clients', clients)

import { get } from './api'
import company from '../mocks/company.json'

export const getCompany = () => get('/company', company)

import axios from 'axios'

// Base URL backend (.NET). Diisi lewat .env -> VITE_API_BASE_URL
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
})

// true (default) = baca data dari src/mocks. Set VITE_USE_MOCKS=false untuk memanggil endpoint.
const USE_MOCKS = import.meta.env.VITE_USE_MOCKS !== 'false'

/**
 * Semua service memanggil fungsi ini. Saat endpoint siap, cukup ubah
 * VITE_USE_MOCKS=false; komponen tidak perlu diubah.
 */
export async function get(path, mock) {
  if (USE_MOCKS) return structuredClone(mock)
  const { data } = await api.get(path)
  return data
}

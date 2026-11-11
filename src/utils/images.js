// Memetakan nama gambar di mock (mis. "rig-1800") ke URL hasil build Vite.
const modules = import.meta.glob('../assets/img/*.webp', { eager: true, import: 'default' })

const images = {}
for (const [path, url] of Object.entries(modules)) {
  const name = path.split('/').pop().replace('.webp', '')
  images[name] = url
}

export const img = (name) => images[name]

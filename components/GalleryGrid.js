import Image from 'next/image'

export default function GalleryGrid({images}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative h-48 md:h-64 bg-slate-100">
          <Image src={src} alt={`Gallery ${i+1}`} fill style={{objectFit:'cover'}} />
        </div>
      ))}
    </div>
  )
}

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery(){
  const images = ['/gallery1.jpg','/gallery2.jpg','/gallery3.jpg','/gallery4.jpg','/gallery5.jpg','/gallery6.jpg']
  return (
    <>
      <Head><title>Gallery — Keystone Tool & Fabrication</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-slate-600 mt-3">Shop photos and sample parts. Replace these placeholder images in /public with your real photos.</p>
        <section className="mt-6">
          <GalleryGrid images={images} />
        </section>
      </main>
      <Footer />
    </>
  )
}

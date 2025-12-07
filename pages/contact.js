import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact(){
  return (
    <>
      <Head><title>Contact — Keystone Tool & Fabrication</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-slate-600 mt-3">Call us or stop by the shop.</p>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-slate-600 mt-2"><a href="tel:9189336100">(918) 933-6100</a></p>
            <h3 className="mt-4 font-semibold">Address</h3>
            <p className="text-slate-600 mt-2">1234 Main St, Tulsa, OK 74104</p>
          </div>
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-slate-600 mt-2">Mon–Fri 8:00am – 5:00pm</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

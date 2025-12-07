import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Quote(){
  const [status, setStatus] = useState(null)

  return (
    <>
      <Head><title>Request a Quote — Keystone Tool & Fabrication</title></Head>
      <Header />
      <main className="container py-12">
        <h1 className="text-3xl font-bold">Request a Quote</h1>
        <p className="text-slate-600 mt-3">Upload drawings and tell us about your job. We will respond quickly.</p>

        <form
          className="mt-6 max-w-2xl"
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus('sending');
            const form = e.target;
            const data = new FormData(form);
            // NOTE: replace the action below with your Formspree endpoint or integration
            const endpoint = 'https://formspree.io/f/xvgebpwv';
            try {
              const res = await fetch(endpoint, { method: 'POST', body: data });
              if (res.ok) {
                setStatus('sent');
                form.reset();
              } else {
                setStatus('error');
              }
            } catch (err) {
              setStatus('error');
            }
          }}
        >
          <div className="grid gap-4">
            <input name="company" placeholder="Company" className="border px-3 py-2" />
            <input name="name" placeholder="Your name" className="border px-3 py-2" required />
            <input name="email" type="email" placeholder="Email" className="border px-3 py-2" required />
            <input name="phone" placeholder="Phone" className="border px-3 py-2" />
            <select name="orderType" className="border px-3 py-2">
              <option>Prototype</option>
              <option>Production</option>
              <option>Rush</option>
            </select>
            <input name="material" placeholder="Material (e.g., 304 SS, 6061-T6)" className="border px-3 py-2" />
            <input name="quantity" placeholder="Quantity" className="border px-3 py-2" />
            <label className="text-sm">Upload drawing (PDF/DWG) — max size depends on your Formspree plan</label>
            <input name="attachment" type="file" className="border px-3 py-2" />
            <textarea name="notes" placeholder="Additional notes" className="border px-3 py-2" rows="4"></textarea>

            <div>
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send Request</button>
            </div>

            {status === 'sending' && <p className="text-sm text-slate-500">Sending…</p>}
            {status === 'sent' && <p className="text-sm text-green-600">Thanks — your request was sent. We'll contact you soon.</p>}
            {status === 'error' && <p className="text-sm text-red-600">There was an error sending your request. Please email us at info@keystonetoolandfab.com.</p>}
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}

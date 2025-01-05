import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200 antialiased">
      <div className="mx-auto max-w-[690px] px-4 py-8">
        <Navigation />
        <main className="mt-16">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p className="mt-4">This is the contact page. Add your contact information or a contact form here.</p>
        </main>
        <Footer />
      </div>
    </div>
  )
}


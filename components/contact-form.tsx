'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = 'c9a47b22-8ab5-46af-8c7a-0fc83c3507cf'

type FormStatus = 'idle' | 'success' | 'error'

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setStatus('idle')

    const form = event.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const note = String(formData.get('message') ?? '').trim()

    if (!name || !email || !phone || !note) {
      setStatus('error')
      setMessage('Vyplňte prosím jméno, e-mail, telefon a zprávu.')
      setPending(false)
      return
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nová zpráva z webu od ${name}`,
          from_name: 'Formulář aiTOBE.cz',
          replyto: email,
          Jméno: name,
          Email: email,
          Telefon: phone,
          Zpráva: note,
        }),
      })

      const data = (await res.json()) as { success?: boolean; message?: string }

      if (!res.ok || !data.success) {
        throw new Error(data.message ?? 'unknown error')
      }

      form.reset()
      setStatus('success')
      setMessage('Děkuji, vaše zpráva byla odeslána. Brzy se vám ozvu.')
    } catch (error) {
      console.log('[v0] Failed to send message:', error)
      setStatus('error')
      setMessage(
        'Odeslání se nezdařilo. Zkuste to prosím znovu, nebo mě kontaktujte přímo e-mailem.',
      )
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Jméno a příjmení
          </label>
          <input id="name" name="name" required placeholder="Jan Novák" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-mailová adresa
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="vas@email.cz"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
          Telefonní číslo
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+420 123 456 789"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Vaše poznámka nebo dotaz
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="S čím potřebujete pomoci?"
          className={fieldClass}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending ? 'Odesílám…' : 'Odeslat zprávu'}
          <Send className="size-4" />
        </button>
        {status !== 'idle' && (
          <p
            role="status"
            aria-live="polite"
            className={
              status === 'success'
                ? 'text-sm font-medium text-primary'
                : 'text-sm font-medium text-destructive'
            }
          >
            {message}
          </p>
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Odesláním formuláře souhlasíte s tím, že Vás mohu kontaktovat zpět za účelem odpovědi na
        dotaz nebo domluvy konzultace. Uvedené údaje využiji pouze pro tuto komunikaci a neposkytuji
        je třetím stranám.
      </p>
    </form>
  )
}

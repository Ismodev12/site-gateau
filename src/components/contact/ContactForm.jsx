import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import FormField from '../ui/FormField'
import Button from '../ui/Button'
import { rules, validate } from '../../utils/validation'
import { sendContactMessage } from '../../services/contactService'

const schema = {
  name: [rules.required('votre nom'), rules.minLength('nom', 2)],
  email: [rules.required('votre e-mail'), rules.email()],
  subject: [rules.required('un sujet')],
  message: [rules.required('votre message'), rules.minLength('message', 10)],
}
const empty = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values, schema)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    setStatus('sending')
    await sendContactMessage(values)
    setStatus('sent')
  }

  if (status === 'sent') {
    return (
      <div role="status" className="animate-fade-up rounded-[2rem] bg-forest p-8 text-cream sm:p-10">
        <CheckCircle2 className="size-12 text-gold" aria-hidden />
        <h2 className="mt-4 text-3xl text-cream">Merci, {values.name.split(' ')[0]}!</h2>
        <p className="mt-3 text-cream/85">
          Votre message a bien été enregistré dans cette démo. <strong className="text-gold">Aucun e-mail n’a réellement été envoyé</strong> — le
          formulaire sera relié à un vrai service dans la prochaine version.
        </p>
        <Button
          variant="primary"
          className="mt-6"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
        >
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-[2rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-10" aria-labelledby="contact-form-title">
      <h2 id="contact-form-title" className="text-3xl">
        Écrivez-nous
      </h2>
      <p className="mt-2 text-ink-soft">Nous répondons généralement sous un jour ouvré.</p>
      {Object.keys(errors).filter((k) => errors[k]).length > 0 && (
        <p role="alert" className="mt-5 rounded-2xl bg-[#FBE9E7] px-4 py-3 font-semibold text-[#B3261E]">
          Veuillez vérifier les champs signalés.
        </p>
      )}
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Nom" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
        <FormField id="email" label="E-mail" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
        <FormField id="subject" label="Sujet" as="select" value={values.subject} onChange={onChange} error={errors.subject} className="sm:col-span-2">
          <option value="">Choisissez un sujet…</option>
          <option>Question sur une commande</option>
          <option>Gâteau personnalisé ou événement</option>
          <option>Livraison</option>
          <option>Avis</option>
          <option>Autre</option>
        </FormField>
        <FormField id="message" label="Message" as="textarea" value={values.message} onChange={onChange} error={errors.message} className="sm:col-span-2" />
      </div>
      <Button type="submit" size="lg" className="mt-7 w-full sm:w-auto" arrow disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </Button>
      <p className="mt-4 text-sm text-ink-soft">Formulaire de démonstration — aucun e-mail n’est envoyé dans cette version.</p>
    </form>
  )
}

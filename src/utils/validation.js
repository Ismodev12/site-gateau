/** Petites règles de validation réutilisables pour les formulaires */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+()\d\s.-]{8,20}$/

export const rules = {
  required: (label) => (v) => (String(v ?? '').trim() ? null : `Veuillez renseigner ${label}.`),
  minLength: (label, n) => (v) =>
    String(v ?? '').trim().length >= n ? null : `Ce champ (${label}) doit contenir au moins ${n} caractères.`,
  email: () => (v) => (EMAIL_RE.test(String(v ?? '').trim()) ? null : 'Veuillez saisir une adresse e-mail valide (ex. nom@exemple.com).'),
  phoneOptional: () => (v) =>
    !String(v ?? '').trim() || PHONE_RE.test(String(v).trim()) ? null : 'Veuillez saisir un numéro de téléphone valide (chiffres, espaces et + uniquement).',
}

/**
 * Valide un objet de valeurs avec un schéma { champ: [regle1, regle2] }.
 * Retourne un objet { champ: message } ne contenant que les erreurs.
 */
export function validate(values, schema) {
  const errors = {}
  for (const [field, fieldRules] of Object.entries(schema)) {
    for (const rule of fieldRules) {
      const message = rule(values[field])
      if (message) {
        errors[field] = message
        break
      }
    }
  }
  return errors
}

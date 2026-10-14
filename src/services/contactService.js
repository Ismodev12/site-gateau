/**
 * SERVICE DE CONTACT — VERSION DÉMO
 * Aucun e-mail n'est envoyé. Remplacez par un appel API (ou un service
 * comme Netlify Forms / Formspree) lorsque le backend sera prêt.
 */
export async function sendContactMessage(values) {
  await new Promise((r) => setTimeout(r, 600))
  return { ok: true, receivedAt: new Date().toISOString(), values }
}

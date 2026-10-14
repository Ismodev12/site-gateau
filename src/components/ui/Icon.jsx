import { Leaf, Heart, Star, Sparkles, Users, Wheat, Clock, ChefHat } from 'lucide-react'

/** Associe un nom (utilisé dans les données) à une icône Lucide */
const map = { leaf: Leaf, heart: Heart, star: Star, sparkles: Sparkles, users: Users, wheat: Wheat, clock: Clock, chef: ChefHat }

export default function Icon({ name, ...props }) {
  const Cmp = map[name] ?? Sparkles
  return <Cmp aria-hidden="true" {...props} />
}

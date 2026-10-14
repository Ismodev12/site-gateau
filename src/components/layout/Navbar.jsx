import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import SearchModal from './SearchModal'
import { siteConfig } from '../../config/siteConfig'
import { useCart } from '../../context/CartContext'
import { useFavorites } from '../../context/FavoritesContext'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { cn } from '../../utils/format'

function CountBadge({ value }) {
  if (!value) return null
  return (
    <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-extrabold text-ink ring-2 ring-cream">
      {value > 99 ? '99+' : value}
    </span>
  )
}

export default function Navbar() {
  const { count, openDrawer } = useCart()
  const { count: favCount } = useFavorites()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const closeMenu = useRef(() => setMenuOpen(false)).current
  useFocusTrap(menuRef, menuOpen, closeMenu)

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const iconBtn = 'relative grid size-10 sm:size-11 place-items-center rounded-full text-forest transition-colors hover:bg-forest-100'

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 bg-cream/95 backdrop-blur-md transition-shadow duration-300',
          scrolled && 'shadow-[0_8px_24px_-18px_rgb(7_84_63/0.5)]',
        )}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-2 sm:h-[76px]">
          <Logo />

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      cn('link-underline py-1 text-[0.98rem] font-semibold transition-colors', isActive ? 'text-forest' : 'text-ink/80 hover:text-forest')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <button type="button" className={iconBtn} onClick={() => setSearchOpen(true)} aria-label="Rechercher un produit">
              <Search className="size-5" aria-hidden />
            </button>
            <NavLink to="/favorites" className={cn(iconBtn, 'hidden sm:grid')} aria-label={`Favoris (${favCount})`}>
              <Heart className="size-5" aria-hidden />
              <CountBadge value={favCount} />
            </NavLink>
            <button type="button" className={iconBtn} onClick={openDrawer} aria-label={`Ouvrir le panier, ${count} article${count > 1 ? 's' : ''}`}>
              <ShoppingBag className="size-5" aria-hidden />
              <CountBadge value={count} />
            </button>
            <Button to="/products" variant="dark" size="sm" className="ml-2 hidden md:inline-flex">
              Commander
            </Button>
            <button
              type="button"
              className={cn(iconBtn, 'lg:hidden')}
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="animate-fade-in absolute inset-0 bg-forest-900/50" onClick={() => setMenuOpen(false)} aria-hidden />
          <div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="animate-slide-in absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col overflow-y-auto bg-forest p-6 text-cream"
          >
            <div className="flex items-center justify-between">
              <Logo light />
              <button type="button" onClick={() => setMenuOpen(false)} className="grid size-11 place-items-center rounded-full hover:bg-forest-700" aria-label="Fermer le menu">
                <X className="size-6" aria-hidden />
              </button>
            </div>
            <nav aria-label="Navigation mobile" className="mt-10">
              <ul className="flex flex-col gap-1">
                {[...siteConfig.navigation, { label: 'Favoris', to: '/favorites' }, { label: 'Panier', to: '/cart' }].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn('flex items-center justify-between rounded-2xl px-4 py-3.5 text-xl font-bold transition-colors', isActive ? 'bg-cream text-forest' : 'hover:bg-forest-700')
                      }
                    >
                      {item.label}
                      {item.to === '/cart' && count > 0 && <span className="rounded-full bg-gold px-2.5 py-0.5 text-sm text-ink">{count}</span>}
                      {item.to === '/favorites' && favCount > 0 && <span className="rounded-full bg-gold px-2.5 py-0.5 text-sm text-ink">{favCount}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto pt-10">
              <p className="script text-3xl text-gold">La vie est plus douce avec des cookies</p>
              <Button to="/products" className="mt-4 w-full" arrow>
                Commander
              </Button>
            </div>
          </div>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

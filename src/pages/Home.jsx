import Hero from '../components/home/Hero'
import CategoriesSection from '../components/home/CategoriesSection'
import StorySection from '../components/home/StorySection'
import FeaturedProducts from '../components/home/FeaturedProducts'
import CollectionsSection from '../components/home/CollectionsSection'
import CtaBanner from '../components/home/CtaBanner'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <CategoriesSection />
      <StorySection />
      <FeaturedProducts />
      <CollectionsSection />
      <CtaBanner />
    </>
  )
}

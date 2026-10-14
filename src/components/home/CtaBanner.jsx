import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { BrushBlob, HeartDoodle, LeafDoodle, SparkleDoodle } from '../ui/Doodles'
import { homeContent } from '../../config/siteConfig'
import { images } from '../../config/imagePaths'

export default function CtaBanner() {
  const { cta } = homeContent
  return (
    <section aria-labelledby="cta-title" className="pb-16 pt-4 sm:pb-24">
      <div className="container-x">
        <div className="on-dark relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-12 text-cream sm:px-12 sm:py-14 lg:px-16">
          {/* Formes organiques */}
          <div aria-hidden className="absolute -left-16 -top-20 size-64 rounded-full bg-forest-700 blob" />
          <div aria-hidden className="absolute -bottom-24 left-1/3 size-56 rounded-full bg-forest-700/70 blob" />
          <LeafDoodle className="absolute bottom-6 left-6 size-12 text-gold/70" />
          <SparkleDoodle className="absolute right-[38%] top-8 hidden size-8 text-gold md:block" />

          <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 id="cta-title" className="script text-[3rem] leading-none text-cream sm:text-[4rem]">
                {cta.script}
              </h2>
              <p className="mt-4 max-w-md text-lg text-cream/85 sm:text-xl">{cta.text}</p>
              <Button to="/products" size="lg" className="mt-8" arrow>
                {cta.button}
              </Button>
            </div>
            <div className="relative mx-auto w-[72%] max-w-xs md:w-full">
              <BrushBlob className="absolute inset-0 scale-110 text-gold" />
              <ImagePlaceholder
                src={images.ctaCookie}
                alt="Un cookie aux pépites de chocolat"
                ratio="aspect-square"
                fit="contain"
                className="relative rounded-full"
                surface="bg-cream-200 text-forest"
              />
              <HeartDoodle className="absolute -right-2 -top-2 size-8 text-cream" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

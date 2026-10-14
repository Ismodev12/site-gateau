import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { BrushBlob, HeartDoodle, LeafDoodle, SwirlDoodle } from '../ui/Doodles'
import { homeContent } from '../../config/siteConfig'
import { images } from '../../config/imagePaths'

export default function StorySection() {
  const { story } = homeContent
  return (
    <section aria-labelledby="story-title" className="relative overflow-hidden py-12 sm:py-20">
      {/* Bande organique verte qui part du bord gauche (desktop) */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 hidden h-[72%] w-[36%] -translate-y-1/2 bg-forest lg:block"
        style={{ borderRadius: '0 48% 42% 0 / 0 58% 46% 0' }}
      />
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-12">
        <div className="relative flex min-h-56 items-center justify-center rounded-[2.5rem] bg-forest px-6 py-12 lg:col-span-4 lg:min-h-80 lg:justify-start lg:rounded-none lg:bg-transparent lg:px-0">
          <h2 id="story-title" className="script relative -rotate-3 text-[3.6rem] font-bold leading-[0.95] text-cream sm:text-[4.4rem]">
            {story.title.split(' ').slice(0, 1)}
            <br />
            <span className="pl-8">{story.title.split(' ').slice(1).join(' ')}</span>
            <HeartDoodle className="absolute -right-10 -top-2 size-9 text-cream" />
            <SwirlDoodle className="mt-1 h-5 w-40 text-gold" />
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pl-6">
          <p className="eyebrow">{story.eyebrow}</p>
          <p className="mt-4 text-xl leading-relaxed text-ink sm:text-[1.35rem]">{story.text}</p>
          <Button to="/about" className="mt-7" arrow>
            {story.cta}
          </Button>
        </div>

        <div className="relative mx-auto w-[82%] max-w-sm lg:col-span-4 lg:w-full">
          <BrushBlob className="absolute -right-8 -top-8 w-[70%] text-gold" />
          <ImagePlaceholder
            src={images.story.bakedWithLove}
            alt="Cookies tout juste sortis du four aux morceaux de chocolat"
            ratio="aspect-square"
            className="relative rounded-full border-8 border-cream shadow-[0_30px_60px_-30px_rgb(3_48_31/0.6)]"
          />
          <LeafDoodle className="absolute -bottom-2 -left-6 size-14 text-forest" />
        </div>
      </div>
    </section>
  )
}

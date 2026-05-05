import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { fadeUp } from '../../utils/animations'

export default function ProjectGallery({ content, items }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  const currentItem = items[currentSlide]

  return (
    <motion.section variants={fadeUp} className="mt-14 sm:mt-16">
      <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] p-3 sm:rounded-[32px] sm:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-[#7a8799]">
              {content.gallery.label}
            </p>

            <h2 className="mt-2 text-[1.18rem] font-semibold text-white sm:text-[1.35rem]">
              {currentItem.title}
            </h2>

            <p className="mt-3 max-w-[760px] text-[0.95rem] leading-[1.75] text-[#b8c4cf] sm:text-[0.98rem] sm:leading-[1.8]">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start">
            <button
              type="button"
              onClick={prevSlide}
              className="secondary-btn inline-flex h-10 w-10 items-center justify-center rounded-full text-sm sm:h-11 sm:w-11"
              aria-label={content.gallery.previous}
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="secondary-btn inline-flex h-10 w-10 items-center justify-center rounded-full text-sm sm:h-11 sm:w-11"
              aria-label={content.gallery.next}
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-white/[0.05] bg-[#05080b] p-2 sm:rounded-[24px] sm:p-3">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full rounded-[14px] object-contain sm:rounded-[18px]"
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3 sm:grid-cols-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={[
                'overflow-hidden rounded-[14px] border p-1 transition sm:rounded-[18px]',
                currentSlide === index
                  ? 'border-[#00f5a0]/40 bg-[#00f5a0]/[0.05]'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]',
              ].join(' ')}
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] w-full rounded-[10px] object-cover object-top sm:rounded-[12px]"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
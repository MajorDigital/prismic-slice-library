import React from "react"
import { PrismicLink, PrismicRichText } from "@prismicio/react"

const Cta = ({ slice }) => (
  <div className="bg-gray-50">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">
          <PrismicRichText field={slice.primary.title} />
        </span>
        <span className="block text-indigo-600">
          <PrismicRichText field={slice.primary.description} />
        </span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        {slice?.items?.map((item, i) => (
          <div key={i} className="inline-flex rounded-md shadow">
            <PrismicLink
              field={item.button_link}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              {item.button_text}
            </PrismicLink>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Cta

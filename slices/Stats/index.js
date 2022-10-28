import React from "react"
import { PrismicRichText } from "@prismicio/react"

const Stats = ({ slice }) => (
  <div>
    <h3 className="text-lg font-medium leading-6 text-gray-900">
      <PrismicRichText field={slice.primary.title} />
    </h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      {slice?.items?.map(item => (
        <div
          key={item.name}
          className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
        >
          <dt className="truncate text-sm font-medium text-gray-500">
            {item.detail}
          </dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            {item.number}
          </dd>
        </div>
      ))}
    </dl>
  </div>
)

export default Stats

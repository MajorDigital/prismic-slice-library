import React from "react"
import { PrismicText } from "@prismicio/react"
import classnames from "classnames"

const Button = ({ slice }) => (
  <button
    type="button"
    className={classnames(
      "inline-flex items-center rounded border border-transparent bg-indigo-600 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      {
        "px-2.5 py-1.5 text-xs": slice.primary.size === "Small",
        "px-4 py-2 text-sm": slice.primary.size === "Medium",
        "px-6 py-3 text-base": slice.primary.size === "Large",
      }
    )}
  >
    {console.log(slice)}
    {slice.primary.title ? (
      <PrismicText field={slice.primary.title} />
    ) : (
      <h2>Template slice, update me!</h2>
    )}
  </button>
)

export default Button

"use client"

import { stack } from "@/lib/data/stack"

export function Stack() {
  return (
    <section className="flex flex-col gap-8">
      {/* Heading */}
      <h2 className="text-[1.1rem] md:text-[1.25rem] font-semibold text-[#171717]">
        Tech Stack
      </h2>

      {/* Rows */}
      <div className="flex flex-col gap-7">
        {stack.map((group) => (
          <div
            key={group.number}
            className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
          >
            {/* Left: Number + Category */}
            <div className="flex items-baseline gap-3 md:w-[180px] shrink-0">
              <span className="font-mono text-sm font-semibold text-[#71717A]">
                {group.number}
              </span>
              <h3 className="text-[0.8125rem] font-bold uppercase tracking-wider text-[#171717]">
                {group.category}
              </h3>
            </div>

            {/* Right: Items with icons */}
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 font-mono text-[0.8125rem] text-[#171717]"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-4 h-4 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

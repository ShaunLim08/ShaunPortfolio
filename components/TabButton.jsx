"use client"

const TabButton = ({ active, selectTab, children, ...props }) => {
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-black pb-1 whitespace-nowrap ${
        active ? "border-b-2 border-black text-black" : "text-gray-500"
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default TabButton

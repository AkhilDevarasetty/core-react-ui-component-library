"use client"
import Tooltip from "@lib/components/Tooltip/Tooltip"
import { BiInfoCircle } from "react-icons/bi"
import { IoArchiveOutline } from "react-icons/io5"

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Playground: Banner Component</h2>
        <BiInfoCircle className="cursor-pointer"/>
        <Tooltip 
          toolTipTitle="Sample Title" 
          toolTipDescription="This is a sample description for the tooltip." 
          closeToolTip={() => console.log("Tooltip closed")} 
        >
          <IoArchiveOutline className="h-6 w-6 text-white"/>
        </Tooltip>
      </div>
    </div>
  )
}

export default Playground

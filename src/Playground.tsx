"use client"
import Banner from "@lib/components/Banners/Banner"

const Playground = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Playground: Banner Component</h2>
        <Banner variant="error" isSingleLine={true} title="Congratulations!" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
      </div>
    </div>
  )
}

export default Playground

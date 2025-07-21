import Image from "next/image";

const HomeSection = () => {
  return (
    <section className="bg-gradient-to-tr from-stone-50 to-orange-200 mx-auto my-auto bg-white shadow-2xl mt-10 w-full">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-1">
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                <span className="text-blue-600 flex">Discover</span>KenzyBoost
              </h2>

              <p className="mt-4 text-gray-700">
                Want a stunning website without the stress of coding?
                At KenzyBoost, we build fast, responsive, and custom websites so you can focus on growing your business.
                Sit back. Relax. We&apos;ll do the hard work for you.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 mx-auto my-auto">
            <Image
              src="/images/background.avif"
              className="rounded mx-10"
              alt=""
              width={1000}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection;
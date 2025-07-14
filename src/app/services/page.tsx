import { AnimateDownToUp, AnimateUpToDown } from '../animationPages/template';

const Services = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 p-10 shadow-lg mt-4 rounded-lg bg-gradient-to-tr from-stone-50 to-orange-100 mx-auto my-auto">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Our services</h2>

          <p className="mt-4 max-w-md text-gray-500">
            We craft websites that don′t just look good they work.
            Perfect for creators, small businesses, startups, or anyone who needs a slick online presence.

            <br />
            🔧 Custom design, blazing fast
            <br />
            📱 Mobile-first & responsive
            <br />
            ⚡️ Powered by modern tech
            <br />
            🎯 Built to convert and impress

            Stop using boring templates. Let′s build you something epic.
          </p>
        </header>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" className="group block overflow-hidden">
              <AnimateDownToUp>
                <img
                  src="/images/web-dev-image-service.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </AnimateDownToUp>

              <div className="relative pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Web Development
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <AnimateUpToDown>
                <img
                  src="/images/web-design.avif"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </AnimateUpToDown>

              <div className="relative pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Joki Web Design
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden mb-2">
              <AnimateDownToUp>
                <img
                  src="/images/deploy.avif"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </AnimateDownToUp>

              <div className="relative pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Jasa deploy website
                </h3>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block overflow-hidden">
              <AnimateUpToDown>
                <img
                  src="/images/kursus.avif"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
              </AnimateUpToDown>

              <div className="relative pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Kursus online web developers
                </h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section >
  )
}

export default Services;
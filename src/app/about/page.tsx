import { Rocket } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center gap-4">
      <Image
        alt=""
        src="/images/profilepicture.jpg"
        width={100}
        height={100}
        className="size-20 rounded-full shadow-lg bg-white object-cover px-2 py-2"
      />

      <div className="mt-3 flex flex-col ">
        <div className="bg-gradient-to-tr from-stone-50 to-orange-100 mx-auto my-auto bg-white shadow-lg p-10 w-250 mb-10 rounded-lg">

          <h3 className="text-4xl font-bold text-gray-800 sm:text-lg flex">About Our Team – KenzyBoost <Rocket className="mx-2" /></h3>

          <p className="mt-0.5 text-gray-700">
            At KenzyBoost, we are more than just a team—we are a movement driven by innovation, passion, and an unrelenting commitment to excellence. Founded with the belief that success is never accidental but the result of relentless focus, strategic thinking, and a drive to go above and beyond, KenzyBoost was born to elevate digital experiences, empower brands, and bring bold ideas to life through technology and creativity.

            We are a collective of skilled developers, UI/UX designers, strategists, and creative minds who specialize in web development services, custom digital solutions, and professional support tailored to meet a wide range of client needs. Our team brings together diverse backgrounds and specialties, but we all share one goal: to help businesses grow by delivering high-impact digital products with real results.

            From the very beginning, KenzyBoost was built around the idea of "boosting" others—whether it's boosting startups to life with their first website, boosting small businesses into the digital world with e-commerce solutions, or boosting large enterprises by streamlining operations and integrating scalable systems. The name KenzyBoost itself represents our mission: to give others the boost they need to reach their full potential in the digital era.

            We believe in doing things the right way. That means taking time to understand each client’s vision, building lasting relationships based on trust, and delivering projects that not only look good—but function flawlessly. Every line of code we write, every design we craft, and every solution we deliver is driven by purpose and a desire to exceed expectations.

            Our workflow is structured but flexible. We follow modern methodologies like Agile and DevOps, ensuring fast, iterative progress, regular communication, and total transparency throughout each project. Whether working with a solo entrepreneur or a growing corporation, our approach remains the same: listen deeply, plan carefully, build smartly, and support continuously.

            We’re not just here to create websites or systems—we’re here to become long-term partners in our clients' success stories. We are proud of the hundreds of hours spent perfecting user interfaces, writing scalable backend logic, optimizing SEO, managing deployment pipelines, and offering after-launch support that actually supports.

            At KenzyBoost, we also value personal and professional growth. Our internal culture encourages learning, experimentation, and pushing the boundaries of what’s possible. Every challenge is an opportunity to learn. Every obstacle is a stepping stone. We celebrate wins, reflect on losses, and grow stronger with each experience.

            Looking ahead, our vision is clear: to become a leading force in Southeast Asia’s digital transformation—helping individuals, businesses, and communities leverage technology to solve real-world problems and unlock new opportunities. Whether it’s building modern websites, automating business processes, or offering remote development services, KenzyBoost is ready to lead with heart, skill, and impact.

            We are KenzyBoost.
            We don’t just build.
            We elevate.
            We empower.
            We boost.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page;
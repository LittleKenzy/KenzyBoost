import './globals.css'
import Navbar from './navbar/index';
import Page from './about/page';
import HomeSection from './home/index';
import { AnimatedSection, AnimateDownToUp, AnimatedXPosition, AnimateUpToDown, AnimateScale } from './animationPages/template';
import Services from './services/page';
import Contact from './contact/page';
import Footer from './footer/page';
export default function Home() {
  return (
    <>
      {/* navbar */}
      <AnimatedXPosition>
        <Navbar />
      </AnimatedXPosition>

      {/* home section */}
      <AnimatedSection>
        <HomeSection />
      </AnimatedSection>


      {/* about section */}
      <div className="mx-auto p-4 mt-15">
        <AnimateDownToUp>
          <Page />
        </AnimateDownToUp>
      </div>

      {/* our service */}
      <div className='mb-4 mt-10'>
        <AnimateUpToDown>
          <Services />
        </AnimateUpToDown>
      </div>

      {/* contact section */}
      <AnimateScale>
        <Contact />
      </AnimateScale>

      {/* footer section */}
      <Footer />
    </>
  );
}


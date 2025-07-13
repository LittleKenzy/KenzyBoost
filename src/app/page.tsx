import './globals.css'
import Navbar from './navbar';
import Page from './about/page';
import HomeSection from './home';
import Template from './animationPages/template';

export default function Home() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* home section */}
      <Template>
        <HomeSection />
      </Template>

      {/* about section */}
      <Template>
        <div className="container mx-auto p-4 mt-15">
          <Page />
        </div>
      </Template>
    </>
  );
}


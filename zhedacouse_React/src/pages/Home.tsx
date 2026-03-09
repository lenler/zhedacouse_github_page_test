import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import ZJUIntroSection from '../components/IntroSection/ZJUIntroSection';
import StoriesSection from '../components/StoriesSection/StoriesSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <CoursesSection />
        <ZJUIntroSection />
        <StoriesSection />
      </main>
      <Footer />
    </>
  );
}

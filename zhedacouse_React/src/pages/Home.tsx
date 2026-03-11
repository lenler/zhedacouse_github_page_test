import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import CoursesSection from '../components/CoursesSection/CoursesSection';
import ZJUIntroSection from '../components/IntroSection/ZJUIntroSection';
import StoriesSection from '../components/StoriesSection/StoriesSection';
import Footer from '../components/Footer/Footer';
import EventsSection from '../components/EventsSection/EventsSection';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams] = useSearchParams();
  /**
   * 日历模块 使用方法
   *
    使用示例
    隐藏（默认）：/
    显示：/?calendar=1
    兼容值：/?calendar=true 或 /?calendar=show
    强制隐藏（兼容）：/?calendar=0 或 /?calendar=false 或 /?calendar=hide
   */
  const calendarParam = (searchParams.get('calendar') || '').toLowerCase();
  const showCalendar =
    calendarParam === '1' ||
    calendarParam === 'true' ||
    calendarParam === 'show';

  return (
    <>
      <Header />
      <main>
        <Banner />
        <CoursesSection />
        <ZJUIntroSection />
        <StoriesSection />
        {showCalendar && <EventsSection />}
      </main>
      <Footer />
    </>
  );
}

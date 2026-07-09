import LivingBackground from "@/components/LivingBackground";
import PresentationNav from "@/components/PresentationNav";

import SectionMission from "@/components/SectionMission";
import SectionVision from "@/components/SectionVision";
import SectionYearPlan from "@/components/SectionYearPlan";
import SectionLecture from "@/components/SectionLecture";
import SectionPortfolio from "@/components/SectionPortfolio";
import SectionAnalytics from "@/components/SectionAnalytics";
import SectionStrategy from "@/components/SectionStrategy";
import SectionLiteracy from "@/components/SectionLiteracy";
import SectionActivities from "@/components/SectionActivities";
import SectionAchievements from "@/components/SectionAchievements";
import SectionJoin from "@/components/SectionJoin";

export const metadata = {
  title: "Finance Club | Premier Investment Group",
  description: "The premier hub for financial literacy, quantitative strategy, and elite networking.",
};

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden text-brand-dark bg-white">
      <LivingBackground />
      
      <div 
        id="presentation-container" 
        className="h-screen w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth flex relative z-10"
      >
        <section id="section-1" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionMission /></section>
        <section id="section-2" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionVision /></section>
        <section id="section-3" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionYearPlan /></section>
        <section id="section-4" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionLecture /></section>
        <section id="section-5" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionPortfolio /></section>
        <section id="section-6" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionAnalytics /></section>
        <section id="section-7" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionStrategy /></section>
        <section id="section-8" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionLiteracy /></section>
        <section id="section-9" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionActivities /></section>
        <section id="section-10" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionAchievements /></section>
        <section id="section-11" className="h-screen w-full min-w-full flex-shrink-0 snap-start snap-always relative overflow-hidden"><SectionJoin /></section>
      </div>

      <PresentationNav totalSections={11} />
    </main>
  );
}

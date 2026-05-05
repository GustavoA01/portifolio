import { ContactSection } from '@/components/ContactSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { StackSection } from '@/components/StackSection';
import { Separator } from '@/components/ui/separator';

const HomePage = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Header />
    <HeroSection />
    <ProjectsSection />
    <StackSection />
    <Separator />
    <ContactSection />
  </main>
);

export default HomePage;

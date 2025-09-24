import { Features } from "@/src/modules/home/components/Features";
import { Hero } from "@/src/modules/home/components/Hero";
import { LoginSection } from "../modules/home/components/LoginSection";

export default function Home() {
  
  return (
    <>
      <main>
        <Hero />
        <Features />
        <LoginSection />
      </main>
    </>
  );
}

import Header from "./components/Header";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header for better UX across all devices */}
      <Header />
      
      {/* Main content container with responsive spacing */}
      <main className="w-full">
        {/* Page sections with consistent responsive spacing */}
        <section className="w-full">
          <PageOne />
        </section>
        
        <section className="w-full">
          <PageTwo />
        </section>
        
        <section className="w-full">
          <PageThree />
        </section>
        
        <section className="w-full">
          <PageFour />
        </section>
      </main>
    </div>
  );
}
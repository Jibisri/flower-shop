import Hero from "../components/Hero";
import Occasion from "../components/Occasion";
import Categories from "../components/Categories";
import Contact from "../pages/Contact";

function Home() {
  return (
    <>

{/* Hero.jsx */}
{/* flower shop banner */}
      <Hero />


{/* Occasion.jsx */}
{/* shop by occasion */}
<Occasion/>

{/* Categories.jsx */}
{/* shop by category */}
<Categories/>

{/* Contact.jsx */}
{/* contact section */}
<Contact/>



    </>
  );
}

export default Home;
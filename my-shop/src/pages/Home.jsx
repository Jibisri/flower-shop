import Hero from "../components/Hero";
import Occasion from "../components/Occasion";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";

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

{/* BestSeller.jsx */}
{/* best seller products */}
<BestSeller/> 



    </>
  );
}

export default Home;
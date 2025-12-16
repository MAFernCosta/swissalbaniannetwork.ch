/* The big ass Gif is here 
import heroGif from "../../../assets/hero.gif";
*/

const heroGif = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/dabed64ba8917425b33c1d3d984997c336daaec4.gif";
const heroImage = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/11/18.12-03-2048x1365.png";

const Hero = () => {
  return (
    <section className="h-230 text-white bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${heroGif})` }}>
      <div className="mx-auto">
        <div className="container px-3 grid grid-flow-rows-2 gap-5 md:grid-cols-2">
          <div className="md:order-2 flex justify-center">
            <img
              src={heroImage}
              className="rounded-3xl object-cover h-50 sm:h-80 w-1/1 md:h-1/1 lg:h-[450px] lg:w-[500px] block"
            />
          </div>
          <div className="lg:my-auto">
            <div>
              <span>Kommende Versanstaltung</span>
              <h1 className=" mt-5 text-3xl font-bold">
                Last After Work Drinks of the Year – Let’s close 2025 together.
              </h1>
              <ul className="mb-8 ms-3 mt-10 text-xl">
                <li>18/12/2025 |</li>
                <li>Mini-Café Bar, Bleicherweg 62, 8002 Zürich</li>
              </ul>
              <a
                className="border rounded-full py-4 px-7 w-1/1 block md:inline md:px-10 text-center"
                href="#"
              >
                Anmeldung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
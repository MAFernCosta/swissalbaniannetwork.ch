
const backgroundImage = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/Frame-20.png";

const Gemeinschaft = () =>{
        return(
            <section className="text-white bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="py-35 mx-7 text-center">
                    <h2 className="text-4xl font-bold mb-7">Eine Gemeinschaft!</h2>
                    <p className="text-lg mb-10 lg:mx-10 xl:px-40">Wir möchten die Vernetzung und die Zusammenarbeit albanisch-stämmiger Personen in der Schweiz vorantreiben, indem wir dir eine Plattform zum Netzwerken bieten.</p>
                    <a className="border-3 rounded-4xl py-3.5 px-15">
                        Mehr Anzeigen
                    </a>
                </div>
            </section>
        );

}

export default Gemeinschaft;
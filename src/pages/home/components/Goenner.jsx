const image = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/SwissAlbanianNetwork_benefits.jpg";

const Goenner = () => {
    return (
        <section className="container mx-auto mt-20 my-10">
            <div className="mx-auto sm:grid sm:grid-cols-2 ">
                <div className="mx-3 text-center sm:text-start md:my-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-4">Werde Gönner*in und profitiere von zahlreichen Vorteilen!</h2>
                    <p>Werde Gönner*in und unterstütze SAN beim Aufbau des Netzwerkes für Albanerinnen und Albaner in der Schweiz.</p>
                    <div className='text-center py-10'>
                        <a className="border text-red-700 py-3 px-8 rounded-3xl"
                            href="#">
                            Jetzt beantragen
                        </a>
                    </div>
                </div>
                <div className="mx-3">
                    <img 
                    className="mx-auto rounded-[50px]"
                    src={image} />
                </div>
            </div>
        </section>
    )
}

export default Goenner;
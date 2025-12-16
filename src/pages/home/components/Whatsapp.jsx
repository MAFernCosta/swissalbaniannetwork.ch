import { FaWhatsapp } from "react-icons/fa";

const background = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/Frame-20.png";

const Whatsapp = () => {
    return(
        <section className="text-white bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="py-35 mx-7 text-center">
                <h2 className="text-4xl font-bold mb-4">Treten Sie unserer WhatsApp-Eventgruppe bei</h2>
                <p className="text-lg mb-10">Bleiben Sie stets über alle bevorstehenden Ereignisse informiert</p>
                <a className="border-3 rounded-4xl py-3.5 px-13">
                    <FaWhatsapp className="inline pe-1 text-2xl"/> 
                    Gruppe beitreten
                </a>
            </div>
        </section>
    );
}

export default Whatsapp;
const backgroundImage = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/Frame-201.png";

const style = "block bg-zinc-300 my-2.5 py-2 px-4.5 rounded-xl w-full";

const Contact = () => {
    return (
        <section className="text-white bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="py-15 text-center">
                <h2 className="text-4xl font-bold mb-2">Kontakt</h2>
                <p>Hast Du Fragen zu unserem Netzwerk?</p>
                <p>Kontaktiere uns jederzeit!</p>
                <form className=" text-gray-500">
                    <input id="name" placeholder="Name" type="text" className={style}/>
                    <input id="nachname" placeholder="Nachname" type="text" className={style}/>
                    <input id="email" placeholder="Email" type="email" className={style} />
                    <input id="phone" placeholder="Telefonnummer" type="text" className={style}/>
                    <textarea id="message" placeholder="Nachricht" name="nachricht" rows="4" cols="50" className={style}>
                    </textarea>
                    <input type="submit" value="Senden" className="border-2 rounded-4xl py-2.5 px-7 text-white" />
                </form>
            </div>
        </section>
    )

}

export default Contact;


const Footer = ({ subPages, contactInfo }) => {
    return (
        <footer className="bg-[#0a0a0a] text-neutral-100">
            <div className="mx-auto container px-8 py-12">
                <div className="lg:grid lg:grid-cols-3">
                    <div className="pb-8 lg:pe-5">
                        <img className="pb-5 ps-1"
                            alt="Footer logo"
                            src={contactInfo.footerlogo}></img>
                        <span>
                            Eine Plattform, um alle in der Schweiz lebenden Albaner zusammenzubringen
                        </span>
                    </div>
                    <div>
                        <h5 className="text-xl">Links</h5>
                        <ul className="text-neutral-300 mb-8">
                            {subPages.map(({ link, label }, index) =>
                                <li className="py-2">
                                    <a href={link} key={index}>{label}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xl mb-4">Soziale Medien</h5>
                        <ul className="flex mb-3">
                            {contactInfo.socialNetwork.map(({ label, link, icon }, index) =>
                                <li key={index + label + "Footer"} className="me-10">
                                    <a
                                        className="bg-neutral-200 inline-block rounded-4xl text-3xl text-[#0a0a0a] p-2"
                                        target="_blank"
                                        href={link}
                                        alt={label}
                                    >
                                        {icon}
                                    </a>
                                </li>
                            )}
                        </ul>

                        <h5 className="text-xl mb-3">Kontakt</h5>
                        <ul className="text-neutral-300">
                            <li>{contactInfo.contact.street}</li>
                            <li>{contactInfo.contact.zipCode} {contactInfo.contact.city}</li>
                            <li className="mt-3">{contactInfo.contact.phone}</li>
                            <li className="mt-3 text-white">{contactInfo.contact.email}</li>
                        </ul>
                    </div>


                </div>
                <div className="mt-4 lg:mt-15">
                    <p>This website was independently designed and developed by <a className="underline" target="_blank" href="https://miguelcosta.xyz/">Miguel Costa</a> as part of a technical interview.</p>
                    <p>More details on <a href="https://github.com/MAFernCosta/swissalbaniannetwork.ch" target="_blank">GitHub</a></p>
                </div>
            </div>
        </footer>

    );

};

export default Footer;
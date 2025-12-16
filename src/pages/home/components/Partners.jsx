const Partners = () => {
    const partners = [
        {
            name: "zurichnetgroup",
            link: "https://www.zurichnetgroup.ch/",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/07/new_logo_zurich_rgb_6163x1024-2048x327.png"
        },
        {
            name: "codexo",
            link: "https://www.zurichnetgroup.ch/",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/02/Logo-Codexo-2048x1467.png"
        },
        {
            name: "exojob",
            link: "https://www.exojob.ch/",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/11/LOGO-exojob-AG.jpg"
        },
        {
            name: "taulanthaxhisefa",
            link: "https://taulanthaxhisefa.com/",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/2e45f522a179b7a8470d91b6e1dd08c1bfa85c5f-2048x1152.png"
        },
        {
            name: "",
            link: "#",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/f86a0206cc9304ff85208f9bd651401e7d8bcc75.png"
        }
    ];
    const mediaPartners = [
        {
            name: "ErisCom",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2023/07/eriscom.png",
            link: ""
        },
        {
            name: "albinfo.ch",
            logo: "https://swissalbaniannetwork.ch/wp-content/uploads/2023/12/albinfo_ch_de-1.png",
            link: ""
        }
    ];
    return (
        <section className="container mx-auto my-25">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold pb-4">Unsere Partner</h2>
                <div className="border-b-3 border-gray-200 inline-block px-25 mb-14"></div>
                <div className="px-15 md:flex md:px-5 md:mb-25 md:justify-center">
                    {partners.map(({ name, link, logo }, index) =>
                        <a 
                        href={link} 
                        key={index + name}
                        className="p-6 block"
                        >
                            <img src={logo} alt={name}  />
                        </a>
                    )}
                </div>
                <h2 className="text-3xl font-bold text-center pb-4">Unsere Medienpartner</h2>
                <div className="text-center border-b-3 border-gray-200 inline-block px-25 mb-14"></div>
                <div className="px-15 flex justify-center">
                    {mediaPartners.map(({ name, link, logo }, index) =>
                        <a 
                        href={link} 
                        key={index + name}
                        className="p-6 block "
                        >
                            <img src={logo} alt={name} />
                        </a>
                    )}
                </div>
            </div>

        </section>
    )

}

export default Partners;
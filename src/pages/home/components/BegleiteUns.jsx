const backgroundImage = "https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/Rectangle-19-1.png";

const BegleiteUns = () => {
    return (
        <section className="text-black bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="grid-col p-15">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold mb-4">Begleite uns</h2>
                    <p>in den sozialen Medien</p>
                </div>
                <div className="p-10 md:grid md:grid-cols-2 md:gap-75">
                    <div>
                        <img className="" src="https://swissalbaniannetwork.ch/wp-content/uploads/2025/07/Group-14.png"></img>
                    </div>
                    <div>
                        <img className="" src="https://swissalbaniannetwork.ch/wp-content/uploads/2025/06/Group-15-1.png"></img>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BegleiteUns;
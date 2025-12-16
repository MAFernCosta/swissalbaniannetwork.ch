import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PassedEvents = () => {
    const images = [
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-12-at-13.33.19_7423a23c.jpg"
        },
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/05/WhatsApp-Bild-2025-05-28-um-23.52.16_52527578.jpg"
        },
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/03/1_Website-2048x1365.jpg"
        },
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-02-at-16.04.34_ecff48fc.jpg"
        },
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2024/11/AWD-12.12.24-%E2%80%93-Banner-2520-x-1680-px-2048x1365.jpg"
        },
        {
            src: "https://swissalbaniannetwork.ch/wp-content/uploads/2025/09/Swissalbaniannetwork_31.10.jpg"
        },



    ];
    return (
        <section className="container mx-auto m-15">
            <div className="mx-auto text-center">
                <h2 className="text-3xl font-bold pb-4">Vergangene Events</h2>
                <div className="border-b-3 border-gray-200 inline-block px-40 mb-14"></div>
            </div>
            <div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3500}
                    centerMode={false}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 50
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 767,
                            },
                            items: 2,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 767,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {images.map(({ src }, index) =>
                        <img
                            src={src}
                            className='block w-1/1 object-cover rounded-2xl pe-1.5'
                            style={{height:"500px"}}
                        />
                    )}
                </Carousel>
            </div>
            <div className='text-center mt-10'>
                <a className="border text-red-700 py-3 px-8 rounded-3xl" 
                href="#">
                    Alle Anzeigen
                </a>
            </div>

        </section>
    )
}

export default PassedEvents;
import Image from "next/image";

const Ads = () => {
    return (
        <div className="container pb-16">
            <a href="#">
                <Image
                    height={300}
                    width={1000}
                    src="/assets/images/offer.jpg"
                    alt="ads"
                    className="w-full"
                />
            </a>
        </div>
    );
};

export default Ads;
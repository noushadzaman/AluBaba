import Image from "next/image";

const Features = ({ dict }) => {
    return (
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        width={200}
                        height={200}
                        src="assets/images/icons/delivery-van.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dict.free_shipping}</h4>
                        <p className="text-gray-500 text-sm">{dict.order_over_$200}</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        width={200}
                        height={200}
                        src="assets/images/icons/money-back.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dict.money_returns}</h4>
                        <p className="text-gray-500 text-sm">{dict.days_money_returns}</p>
                    </div>
                </div>
                <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
                    <Image
                        width={200}
                        height={200}
                        src="assets/images/icons/service-hours.svg"
                        alt="Delivery"
                        className="w-12 h-12 object-contain"
                    />
                    <div>
                        <h4 className="font-medium capitalize text-lg">{dict.support_time}</h4>
                        <p className="text-gray-500 text-sm">{dict.customer_support}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
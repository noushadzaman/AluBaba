import Image from "next/image";

const CopyRight = () => {
    return (
        <div className="bg-gray-800 py-4">
            <div className="container flex items-center justify-between">
                <p className="text-white">&copy; LWSKart - All Right Reserved</p>
                <div>
                    <Image
                        height={50}
                        width={200}
                        src="/assets/images/methods.png"
                        alt="methods"
                        className="h-5" />
                </div>
            </div>
        </div>
    );
};

export default CopyRight;
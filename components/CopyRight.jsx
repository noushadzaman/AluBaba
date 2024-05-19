import Image from "next/image";

const CopyRight = () => {
    return (
        <div class="bg-gray-800 py-4">
            <div class="container flex items-center justify-between">
                <p class="text-white">&copy; AluBaba - All Right Reserved</p>
                <div>
                    <Image
                        height={50}
                        width={200}
                        src="/assets/images/methods.png"
                        alt="methods"
                        class="h-5" />
                </div>
            </div>
        </div>
    );
};

export default CopyRight;
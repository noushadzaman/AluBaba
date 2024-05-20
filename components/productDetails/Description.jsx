
const Description = ({ description }) => {
    return (
        <div class="container pb-16">
            <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">Product details</h3>
            <div class="w-3/5 pt-6">
                <div class="text-gray-600 whitespace-pre-wrap">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Description;
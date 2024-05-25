import Categories from "./Categories";
import Price from "./Price";
import Size from "./Size";

const Filter = ({ categoryExist }) => {

    return (
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden hidden md:block">
            <div className="divide-y divide-gray-200 space-y-5">
                <Categories categoryExist={categoryExist} />
                <Price />
                <Size />
            </div>
        </div>
    );
};

export default Filter;
import { getCategories } from "@/database/queries";
import Category from "./Category";

const Categories = async ({ dict }) => {
    const categories = await getCategories();

    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">{dict.shop_by_category}</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    categories.map(category => <Category
                        key={category.id}
                        img={category.img}
                        name={category.name}
                        category={category.category}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;
import Category from "./Category";

const Categories = () => {
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
            <div className="grid grid-cols-3 gap-3">
                <Category
                    img={"https://i.ibb.co/KrQLkg3/keagan-henman-Won79-9o-UEk-unsplash.jpg"}
                    name={"Clothing"}
                    category={"clothing"}
                />
                <Category
                    img={"https://i.ibb.co/cx9Ftg2/view-romantic-castle-bedroom-1.jpg"}
                    name={"Furniture"}
                    category={"furniture"}
                />
                <Category
                    img={"https://i.ibb.co/WnvSmSM/jannis-brandt-4m-Ha-SX8zv-JI-unsplash.jpg"}
                    name={"Pc & components"}
                    category={"pc-and-components"}
                />
                <Category
                    img={"https://i.ibb.co/V2SNwgQ/clay-elliot-1by-Gbw-EMwc-unsplash.jpg"}
                    name={"kitchen appliances"}
                    category={"kitchen-appliances"}
                />
                <Category
                    img={"https://i.ibb.co/qDQrq96/the-halal-design-studio-o3f-Cl-Cyh-FUY-unsplash.jpg"}
                    name={"Phone and tablets"}
                    category={"phone-and-tablets"}
                />
                <Category
                    img={"https://i.ibb.co/MCthbYN/point3d-commercial-imaging-ltd-0dj9-V9s-R9c-unsplash-1.jpg"}
                    name={"Home electronics"}
                    category={"home-electronics"}
                />
            </div>
        </div>
    );
};

export default Categories;
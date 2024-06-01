'use client';

import { useEffect, useState } from "react";
import OrderSummary from "./OrderSummary";
import { redirect } from "next/navigation";
import useCartList from "@/hooks/useCartList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOutPage = ({ dict }) => {
    const [hasRedirected, setHasRedirected] = useState(false);
    const { cart } = useCartList();

    useEffect(() => {
        if (cart.length === 0 && !hasRedirected) {
            toast.warn("No items in the cart added yet!");
            setHasRedirected(true);
            redirect(`/shop`);
        }
    }, [cart]);

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        country: "",
        streetAddress: "",
        city: "",
        phoneNumber: 0,
        email: ""
    });
    const [acceptTerms, setAcceptTerms] = useState(false);

    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }


    return (
        <>
            <div className="col-span-8 border border-gray-200 p-4 rounded">
                <h3 className="text-lg font-medium capitalize mb-4">{dict.checkout}</h3>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="first-name" className="text-gray-600">
                                First Name <span className="text-primary">*</span>
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="input-box"
                            />
                        </div>
                        <div>
                            <label htmlFor="last-name" className="text-gray-600">
                                Last Name <span className="text-primary">*</span>
                            </label>
                            <input
                                onChange={handleChange}

                                type="text"
                                name="lastName"
                                id="lastName"
                                className="input-box"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="region" className="text-gray-600">
                            Country/Region
                        </label>
                        <input
                            onChange={handleChange}
                            type="text" name="country" id="country" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="address" className="text-gray-600">
                            Street address
                        </label>
                        <input
                            onChange={handleChange}
                            type="text" name="streetAddress" id="streetAddress" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="city" className="text-gray-600">
                            City
                        </label>
                        <input
                            onChange={handleChange}
                            type="text" name="city" id="city" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-gray-600">
                            Phone number
                        </label>
                        <input
                            onChange={handleChange}
                            type="text" name="phoneNumber" id="phoneNumber" className="input-box" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600">
                            Email address
                        </label>
                        <input
                            onChange={handleChange}
                            type="email" name="email" id="email" className="input-box" />
                    </div>
                </div>
            </div>
            <OrderSummary
                dict={dict}
                userData={userData}
                acceptTerms={acceptTerms}
                setAcceptTerms={setAcceptTerms}
            />
        </>
    );
};

export default CheckOutPage;
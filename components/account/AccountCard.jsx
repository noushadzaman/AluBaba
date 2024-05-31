'use client';

import { FiEdit } from "react-icons/fi";
import { MdOutlineSaveAs } from "react-icons/md";
import { updateUserInDB } from "@/app/actions";
import { useState } from "react";

const AccountCard = ({ user, title, firstPara, secondPara, thirdPara }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [data, setData] = useState({ secondPara, thirdPara });
    const [newUser, setNewUser] = useState({ ...user });

    function updateUserValue(event) {
        setData({
            ...data,
            [event.target.id]: event.target.value
        })
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form
            action={() => {
                updateUserInDB(newUser);
                setIsEdit(false);
            }}
            className="shadow rounded bg-white px-4 pt-6 pb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-800 text-lg">{title}</h3>
                {
                    isEdit ?
                        <button
                            type="submit"
                            className="text-primary">
                            <MdOutlineSaveAs />
                        </button>
                        : <p
                            onClick={() => setIsEdit(true)}
                            className="text-primary cursor-pointer">
                            <FiEdit />
                        </p>
                }
            </div>
            <div className="space-y-1">
                <h4 className="text-gray-700 font-medium">{firstPara}</h4>
                {
                    (isEdit) && title !== "Personal Profile" ?
                        <input
                            onChange={updateUserValue}
                            defaultValue={secondPara}
                            type="text"
                            placeholder={
                                title == "Shipping address" && "shipping address" ||
                                title == "Billing address" && "billing address"
                            }
                            name={
                                title == "Shipping address" && "shipping_address" ||
                                title == "Billing address" && "billing_address"
                            }
                            id={"secondPara"}
                        />
                        : <p className="text-gray-800">{secondPara || data.secondPara}</p>
                }
                {
                    isEdit ?

                        <input
                            onChange={updateUserValue}
                            defaultValue={thirdPara}
                            type="text"
                            placeholder={
                                title == "Shipping address" && "shipping address number" ||
                                title == "Billing address" && "billing address number" ||
                                title == "Personal Profile" && "phone number"
                            }
                            name={
                                title == "Shipping address" && "shipping_address_number" ||
                                title == "Billing address" && "billing_address_number" ||
                                title == "Personal Profile" && "phone_number"
                            }
                            id={"thirdPara"}
                        />
                        : <p className="text-gray-800">{thirdPara || data.thirdPara}</p>
                }
            </div>
        </form>
    );
};

export default AccountCard;
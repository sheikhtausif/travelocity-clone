import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Payment } from "../Components/Payment/Payment";
import { useAxios } from "../Hooks/useAxios";

export const PaymentPage = () => {
    const { id } = useParams();
    const { hotelData } = useAxios(`https://api-json-data.onrender.com/data/?hotelId=${id}`);

    useEffect(() => {
        setTimeout(() => { }, 2500);
    }, []);
    return (
        <>
            <Payment hotelData={hotelData} />
        </>
    );
};

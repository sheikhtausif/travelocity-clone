import { FinalSubmit } from "./FinalSubmit";
import { PaymentForm } from "./PaymentForm";
import { PriceDetail } from "./PriceDetail";
import styled from "styled-components";
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
`;

export const Payment = () => {

  const { paymentAmount } = useSelector(state => state)

  return (
    <Wrapper>
      <div>
        <PaymentForm />
        <FinalSubmit />
      </div>

      <PriceDetail price={paymentAmount} />
    </Wrapper>
  );
};

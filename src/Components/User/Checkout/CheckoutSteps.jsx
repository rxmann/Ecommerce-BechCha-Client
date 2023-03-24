import { ProgressBar, Step } from "react-step-progress-bar";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const StatusWrapper = styled.div`
  background-color: #ffffff;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.color && props.color};
  background-color: ${(props) => props.bg && props.bg};
  padding: 10px 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const MultiStepProgressBar = styled.div`
  width: 50%;
`;

const CheckoutSteps = ({ Element, setElement }) => {
  var stepPercentage = 0;

  switch (Element) {
    case "Shipping":
      stepPercentage = 20;
      break;
    case "Confirmation":
      stepPercentage = 70;
      break;
    case "Payment":
      stepPercentage = 100;
      break;
    default:
      stepPercentage = 20;
  }


  const steps = [
    {
      name: "Shipping"
    },
    {
      name: "Confirmation"
    },
    {
      name: "Payment"
    },
  ];


  return (
    <Container>
      <MultiStepProgressBar>
        <ProgressBar
          percent={stepPercentage}
          filledBackground="linear-gradient(to right, #2c8fffd3, #4effb8e8)"
        >
          {steps.map((step, index) => (
            <Step key={index} transition="scale">
              {({ accomplished }) =>
                accomplished ? (
                  <StatusWrapper onClick={() => setElement(step.name)}>
                    <IconWrapper color={"#ffffff"} bg={"#0171b6"}>
                      {step.name}
                    </IconWrapper>
                  </StatusWrapper>
                ) : (
                  <StatusWrapper onClick={() => setElement(step.name)}>
                    <IconWrapper color={""} bg={"#ffffff"}>
                      {step.name}
                    </IconWrapper>
                  </StatusWrapper>
                )
              }
            </Step>
          ))}
        </ProgressBar>
      </MultiStepProgressBar>
    </Container>
  );
};

export default CheckoutSteps;

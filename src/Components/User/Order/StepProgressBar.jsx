import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';
import styled from 'styled-components';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';


const Container = styled.div`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

const StatusWrapper = styled.div`
    background-color: white;
`

const IconWrapper = styled.div`
    color:  ${props => props.color};
    background-color: ${props => props.background};
    padding: 8px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`

const MultiStepProgressBar = styled.div`
    width: 50%;
`

const Status = styled.span`
    font-weight: 700px;
    font-size: 16px;
    color: gray;
`



const steps = [
    {
        name: "PENDING",
        label: <AutorenewIcon />
    },
    {
        name: "PROCESSING",
        label: <WarehouseIcon />
    },
    {
        name: "SHIPPING",
        label: <LocalShippingIcon />
    },
    {
        name: "DELIVERED",
        label: <CheckCircleIcon />
    }
];


const cancelledSteps = [
    {
        name: "PENDING",
        label: <AutorenewIcon />
    },
    {
        name: "CANCELLED",
        label: <BlockIcon />
    },
];

const StepProgressBar = ({ status }) => {

    var stepPercentage = 0;

    switch (status) {
        case "pending":
            stepPercentage = 16;
            break;
        case "processing":
            stepPercentage = 49.5;
            break;
        case "shipping":
            stepPercentage = 82.5;
            break;
        case "delivered":
            stepPercentage = 100;
            break;
        case "cancelled":
            stepPercentage = 100;
            break;
        default:
            stepPercentage = 50;
    }

       
    

    return (
        <Container>
            { status !== "cancelled" ?
            <>
            <MultiStepProgressBar>
            <ProgressBar
                percent={stepPercentage}
                filledBackground="linear-gradient(to right, #2c8fffd3, #4effb8e8)"
            >
                {steps.map((step, index) => (
                    <Step key={index} transition="scale">
                        {({ accomplished }) => (
                            accomplished ?
                                (
                                    <StatusWrapper>
                                        <IconWrapper color={"#ffffff"} background={"#0171b6"} >
                                            {step.label}
                                        </IconWrapper>
                                    </StatusWrapper>

                                )

                                :

                                <StatusWrapper>
                                    <IconWrapper color={""} background={"#f5f7f8"} >
                                        {step.label}
                                    </IconWrapper>
                                </StatusWrapper>

                        )}
                    </Step>
                ))}
            </ProgressBar>

        </MultiStepProgressBar>


        <MultiStepProgressBar>

            <ProgressBar
                percent={stepPercentage}
                filledBackground={"#FFFFFF"}
                unfilledBackground={"#ffffff"}
            >
                {steps.map((step, index) => (
                    <Step key={index} transition="scale">
                        {({ accomplished }) => (
                            <Status> {step.name} </Status>
                        )}
                    </Step>
                ))}
            </ProgressBar>
        </MultiStepProgressBar>
        </>

        :
        <>
        <MultiStepProgressBar>
        <ProgressBar
            percent={stepPercentage}
            filledBackground="linear-gradient(to right, #2c8fffd3, #4effb8e8)"
        >
            {cancelledSteps.map((step, index) => (
                <Step key={index} transition="scale">
                    {({ accomplished }) => (
                        accomplished &&
                            (
                                <StatusWrapper>
                                    <IconWrapper color={"#ffffff"} background={"#cb360d"} >
                                        {step.label}
                                    </IconWrapper>
                                </StatusWrapper>

                            )

                    )}
                </Step>
            ))}
        </ProgressBar>

    </MultiStepProgressBar>


    <MultiStepProgressBar>

        <ProgressBar
            percent={stepPercentage}
            filledBackground={"#FFFFFF"}
            unfilledBackground={"#ffffff"}
        >
            {cancelledSteps.map((step, index) => (
                <Step key={index} transition="scale">
                    {({ accomplished }) => (
                        <Status> {step.name} </Status>
                    )}
                </Step>
            ))}
        </ProgressBar>
    </MultiStepProgressBar>
    </>
            }
        </Container>
    );
};

export default StepProgressBar;
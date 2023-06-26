import { Row } from "reactstrap";

import { MarketingPlanType } from "@types";
import MarketingPlan from "./MarketingPlan";

import 'scss/css/style.css';
import 'styles/MarketingPlans.css';

type MarketingPlansProps = {
    name: string
    plans: Array<MarketingPlanType>;
}

const MarketingPlans = ({name, plans}: MarketingPlansProps): JSX.Element => {
    return (
        <Row id='marketing-plans'>
            {plans.map((plan, index) => (
                <MarketingPlan
                    key={index}
                    name={name}
                    planNumber={index+1}
                    plan={plan}
                />
            ))}
        </Row>
    )
}

export default MarketingPlans;
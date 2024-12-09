import { Review } from "../Types";
import {
    CheckmarkCircleFilled,
    CircleRegular,
    DismissCircleFilled,
} from "@fluentui/react-icons";
import "./SimpleCitationIcon.css";

export const SimpleCitationIcon = () => {
    const review = Review.Unreviewed;
    return (
        <>
            {review === Review.Unreviewed
                ? <CircleRegular />
                : review === Review.Approved
                ? <CheckmarkCircleFilled />
                : <DismissCircleFilled />}
        </>
    );
};

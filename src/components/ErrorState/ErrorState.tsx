import React, {FC} from 'react';
import {ReportProblem} from "@mui/icons-material";
interface Props {
    message: string;
}

const ErrorState: FC<Props> = ({message}) => {
    return (
        <div className="fullParent">
            <div className="flex h-full justify-center items-center ">
                <div className="text-red-700">{message} <ReportProblem/></div>
            </div>
        </div>
    );
};

export default ErrorState;

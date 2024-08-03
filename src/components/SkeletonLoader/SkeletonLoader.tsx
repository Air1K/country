import {Box, Skeleton} from "@mui/material";
import {FC} from "react";

const SkeletonLoader: FC = () => (
    <Box className="flex flex-wrap justify-center gap-2 overflow-x-hidden">
        {Array.from(new Array(3)).map((_, index) => (
            <Skeleton key={index} variant="rectangular" width={300} height={380} sx={{ borderRadius: 1 }} />
        ))}
    </Box>
);

export default SkeletonLoader;

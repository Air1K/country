import React, {FC} from 'react';
import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {useNavigate } from "react-router-dom";
import {ArrowBack, Backup} from "@mui/icons-material";

interface Props {
    children: React.ReactElement;
    isMain?: boolean
}

const GeneralLayout:FC<Props> = ({children, isMain = false, }) => {

    const navigation = useNavigate ();
    const goBack = () => {
        navigation('/');
    }
    return (
        <>
            <AppBar color="inherit">
                <Toolbar className="fixed justify-between">
                    <Typography variant="h6" component="div">
                        Countries of the world
                    </Typography>
                    {!isMain && (
                        <div className="flex items-center">
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={goBack}
                                color="inherit"
                            >
                                <ArrowBack />
                            </IconButton>
                            Go back
                        </div>
                    )}

                </Toolbar>
            </AppBar>
            <Container className="my-24">
                {children}
            </Container>
        </>
    );
};

export default GeneralLayout;

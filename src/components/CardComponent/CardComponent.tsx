import React, { FC } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Country } from "../../models/api.model";
import { useNavigate } from "react-router-dom";

interface Props {
    country: Country;
}

const CardComponent: FC<Props> = ({ country }) => {
    const navigate = useNavigate();

    const goToCountry = () => {
        navigate(`/country/${country.cca3}`);
    };

    return (
        <Card sx={{ width: "300px", display: "flex", flexDirection: "column" }} variant="outlined">
            <CardMedia
                component="img"
                alt=":("
                style={{ maxWidth: "300px", height: "200px" }}
                image={country.flags.svg}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Region: {country.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Subregion: {country.subregion || 'N/A'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Population: {country.population.toLocaleString()}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button onClick={goToCountry} size="small">DETAILS</Button>
            </CardActions>
        </Card>
    );
};

export default CardComponent;

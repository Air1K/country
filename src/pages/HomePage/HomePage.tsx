import React, {useState, useEffect, useRef} from 'react';
import CardComponent from '../../components/CardComponent/CardComponent';
import styles from './HomePageStyle.module.scss';
import { Country } from '../../models/api.model';
import { Box } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import useScaleOnScroll from "../../hook/useScaleOnScroll";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import ErrorState from "../../components/ErrorState/ErrorState";
import {fetchCountries} from "../../services/api";

const HomePage: React.FC = () => {
    const [allCountries, setAllCountries] = useState<Country[]>([]);
    const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const itemsPerPage = 18;
    const ref = useRef(null);
    useScaleOnScroll(ref);

    useEffect(() => {
        const getCountries = async () => {
            try {
                const countriesData = await fetchCountries();
                setAllCountries(countriesData);
                setDisplayedCountries(countriesData.slice(0, itemsPerPage));
            } catch (error) {
                setError("Error when turning on country");
                console.error("Error when turning on country:", error);
            }
        };

        getCountries();
    }, []);

    const fetchMoreData = () => {
        if (displayedCountries.length >= allCountries.length) {
            setHasMore(false);
            return;
        }
        setTimeout(()=>{
            setDisplayedCountries((prevCountries) => [
                ...prevCountries,
                ...allCountries.slice(prevCountries.length, prevCountries.length + itemsPerPage),
            ]);
        }, 500);
    };

    return (
        error ? <ErrorState message={error} />:
        <div className="relative">
            <div ref={ref} className={styles.containerImg} >
                <img className="h-full w-full object-cover" src="/img/fon.jpg" alt="Background" />
            </div>
            <Box className={`${styles.list} mt-80`}>
                <InfiniteScroll
                    className="flex flex-wrap justify-center gap-2 overflow-x-hidden"
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<SkeletonLoader />}
                    dataLength={displayedCountries.length}
                    endMessage={<p>Вы достигли конца списка</p>}
                >
                    {displayedCountries.map((country) => (
                        <CardComponent key={country.cca3} country={country} />
                    ))}
                </InfiniteScroll>
            </Box>
        </div>
    );
};

export default HomePage;

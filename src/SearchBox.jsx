import './SearchBox.css';

import Whether from './Weather';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox() {

    const API_URL = import.meta.env.VITE_WEATHER_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let [city, setCity] = useState("");
    let [result, setResult] = useState({});
    let [error, setError] = useState(false);

    let getWhetherInfo = async () => {
        try {

            let res = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            let resjson = await res.json();

            console.log(resjson);

            if (!res.ok) {
                throw new Error("City not found");
            }

            setResult(resjson);
            setError(false);

        } catch (err) {

            console.log(err);
            setError(true);

        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();

        console.log(city);

        getWhetherInfo();

        setCity("");
    };

    return (
        <div className="search-container">

            <h1>Search weather of your place</h1>

            <form
                onSubmit={handleSubmit}
                className="search-form"
            >

                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />

                <br />

                <Button
                    variant="contained"
                    type="submit"
                >
                    Search
                </Button>

            </form>

            <Whether res={result} />

            {error && (
                <p style={{ color: "red" }}>
                    No such place exists!
                </p>
            )}

        </div>
    );
}
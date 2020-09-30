import React, {useState, useEffect} from 'react';
import {MenuItem, FormControl, Select,} from "@material-ui/core";
import './App.css';


function App() {

  // STATE = HOW TO WRITE A VAR IN REACT
  const [countries, setCountries] = useState([]);


  // useEffect = Runs a piece of code based on a given condition
  useEffect(() => {
    //the code inside here will run once when the component loads and not again
    //async -> send a request, wait for it, do something with the info
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        
        const countries = data.map((country) => ({
            name: country.country, //United States,United Kingdom
            value: country.countryInfo.iso2,//UK, USA, FR
          }));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, [])
  // /v3/covid-19/countries

  return (
    <div className="app">
      <div className="app__header">
      
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {/* loop through all the countries and show a drop down list of the options */}
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="US">US</MenuItem>
            <MenuItem value="opt3">op3</MenuItem> */}
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    

      {/* Ctrl K + Ctrl C - add comment */}
      {/* Header */}

      {/* Title + Select input dropdown field */}

      {/* Info Boxes */}
      {/* Info Boxes */}
      {/* Info Boxes */}

      {/* Table */}

      {/* Graph */}
      
      {/* Map */}


    </div>
  );
}

export default App;

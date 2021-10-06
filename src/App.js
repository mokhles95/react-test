import Register from "./pages/Register";
import Layout from "./component/Layout/Layout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./redux/actions/CountryActions";
import React, {  useEffect } from "react";

function App() {
  const API_KEY= 'd066146be7a66b606e8b21bbe370145c'
   useSelector((state) => state.allCountries.countries);
  const dispatch = useDispatch();
  const fetchCountries = async () => {
    const response = await axios
      .get("http://api.countrylayer.com/v2/all", {
          params: {
          access_key:API_KEY
          }
        })
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getCountries(response.data));
  };

  useEffect(() => {
      fetchCountries();
  }, []);

  return (
    <Layout>
      <Register />
    </Layout>
  );
}

export default App;

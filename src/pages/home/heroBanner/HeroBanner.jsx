import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
    const [background, setBackground]  = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const {data, loading} = useFetch("/movie/upcoming");

    useEffect{()=> {

    },[]}

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`)
        }
    };
  
    return (
    <div className="herobanner">
      <div className="wrapper">
        <div className="herobannerContent">
            <span className="title">Welcome.</span>
            <span className="title">
                Millions of movies, TV shows and people to discover.
                Explore now.
            </span>
            <div className="searchInput">
                <input 
                    type="text"
                    placeholder="Search for a movie or TV show..
                    " 
                    onChange={(e)=> setQuery(e.target.value)}
                    onKeyUp = {searchQueryHandler}
                />
                <button>Search</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

import React from 'react';
import { useSelector } from 'react-redux';
import "./style.scss";

const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                if(!genres[g]?.name) return; //if not available in our store than simply return it
                return (
                    <div 
                        key = {g}
                        className="genre">
                            {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;

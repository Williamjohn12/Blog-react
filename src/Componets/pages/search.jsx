import React, {useState} from "react";


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handlefilter = (event) => {
        const SearchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.toLowerCase().includes(SearchWord.toLowerCase());
        });
        setFilteredData(newFilter);
    }
    return (
        <div className="search">
            <div className="search-inputs">
                <input type="text" placeholder={placeholder} data={data} onChange={handlefilter}/> 
                </div>
               { filteredData.length !== 0 &&
                <div className="data-result">
                    {filteredData.map((value, key) => {
                        return <a className="data-item" key={key}>
                            <p>{value}</p></a>;
                    })}
                </div>}
        </div>
    )
}

export default SearchBar;
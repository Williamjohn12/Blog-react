import React, {useState} from "react";


function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handlefilter = (event) => {
        const SearchWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(SearchWord.toLowerCase());
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
                        return <a className="data-item" href={`/blog?id=${value.id}`} key={key}>
                            <p>{value.title}</p></a>;
                    })}
                </div>}
                
        </div>
    )
}

export default SearchBar;
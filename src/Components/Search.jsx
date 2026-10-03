import "./Search.css"


function Search({search, setSearch, handleSearch}) {
    return (
        <div className='search-container'>
            <input 
                type="text" 
                placeholder='Enter Country Name' 
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <button 
                className='search-btn'
                onClick={handleSearch}
            >
                    Search
            </button>
        </div>
    )
}

export default Search

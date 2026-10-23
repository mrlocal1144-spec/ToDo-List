import React from "react";

const Search = ({search,setSearch}) => {
    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    placeholder="search...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
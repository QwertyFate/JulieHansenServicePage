import React from "react";

const SearchBar = (fixedSearch) => {
    return(
        <form className="flex flex-row items-center">
            <input className={`bg-slate-300 rounded-lg py-1.5 pl-7 w-96 border-[1px] border-black pr-4 relative font-Lora opacity-85`} type="text" placeholder="Search by area or address" />
            <img src="/images/searchsvg.svg" height={15} width={15} className="relative -left-[375px] text-white"/>
        </form>
    )
}

export default SearchBar
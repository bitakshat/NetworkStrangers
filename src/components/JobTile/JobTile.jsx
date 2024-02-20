import React from "react";

const JobTile = (props) => {
    return (
        <div className="transition-all duration-500 w-[304px] h-[206px] bg-sky-100 flex justify-center items-center flex-col gap-2 rounded-tileradius hover:bg-gradient-to-r from-[#029ED8] to-[#3F5EFB] hover:text-white">
            <h3 className="text-f24 text-center font-w500">{props.title}</h3>
            <h5>{props.location}</h5>
            <h4>{props.experience}</h4>
            <button className="w-[156px] h-[56px] bg-white opacity-0 hover:opacity-100 rounded-btnradius hover:text-[#6C6C6C]">View Role</button>
        </div>
    )
}

export default JobTile;


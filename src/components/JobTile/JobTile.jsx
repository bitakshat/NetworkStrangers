import React from "react";

const JobTile = (props) => {
    return (
        <div className="text-[#1E1E1E] transition-all duration-200 w-[304px] h-[260px] bg-[#f3f9fd] flex justify-center items-center flex-col gap-2 rounded-tileradius hover:bg-gradient-to-r from-blue-600 to-sky-500 hover:text-white [&>button] group">
            <h3 className="text-f24 text-center font-w500">{props.title}</h3>
            <h5>{props.location}</h5>
            <h4>{props.experience}</h4>
            <button className="w-[156px] h-[56px] hidden text-navfontsize group-hover:block bg-white rounded-btnradius text-[#6C6C6C]">View Role</button>
        </div>
    )
}

export default JobTile;


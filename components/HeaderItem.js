import React from 'react'

function HeaderItem({title, Icon}) {
    return (
        <div className="group flex flex-col items-center cursor-pointer hover:text-white w-12 sm:w-20">
            <Icon className="h-8 mb-1 group-hover:animate-bounce group-hover:scale-125 animation duration-100" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem

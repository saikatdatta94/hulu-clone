import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"
  
import React from 'react'
import Image  from 'next/image'
import hulu from "../assets/images/hulu.png";
import HeaderItem from "./HeaderItem";
function Header() {
    return (
        <div className="flex flex-col sm:flex-row m-5 justify-between items-center">
           
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} ></HeaderItem>
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} ></HeaderItem>
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} ></HeaderItem>
                <HeaderItem title="COLLECTION" Icon={CollectionIcon} ></HeaderItem>
                <HeaderItem title="SEARCH" Icon={SearchIcon} ></HeaderItem>
                <HeaderItem title="USER" Icon={UserIcon} ></HeaderItem>
            </div>
            <Image
                className="object-contain"
                src={hulu}
                width={200}
                height={100}
            />
        </div>
    )
}

export default Header

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import searchIcon from '@/public/assets/search.svg';
import duaarrow from '@/public/assets/duaarrow.svg';

export default function Categories({ categories, subcategories, duas }) {
    const [openStates, setOpenStates] = useState({});

    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.filter((category) => {
        return category.cat_name_en
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
    });

    const handleCategoryClick = (categoryId) => {
        setOpenStates((prevStates) => ({
            ...prevStates,
            [categoryId]: !prevStates[categoryId],
        }));
    };

    const handleClick = (subcategoryId) => {
        const element = document.getElementById(`sec_${subcategoryId}`);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };
    const handleDuaClick = (DuaId) => {
        const element = document.getElementById(`dua_${DuaId}`);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    };


    return (
        <div className="w-[28%] sm:mx-12 lg:mx-6 rounded-xl h-[86vh] border bg-white hidden md:block">
            <div className="rounded-t-lg bg-[#1fa45b] justify-center items-center h-14 flex flex-row px-5">
                <p className="text-base text-white mx-auto">Categories</p>
            </div>
            <div className="overflow-hidden">
                <div className="mx-3 pt-4">
                    <label className="relative block w-full">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <Image
                                src={searchIcon}
                                width={22}
                                height={22}
                                alt="search-icon"
                            />
                        </span>
                        <input
                            id="filerted_catList"
                            className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-[#1fa45b] focus:ring-[#1fa45b] focus:ring-1 sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
                            placeholder="Search Categories"
                            type="text"
                            name="search"
                            spellCheck="false"
                            data-ms-editor="true"
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </label>
                </div>
                <div className='h-[calc(100vh-32vh)]  3xl:h-[68vh]" scrl-cat pb-8 mb-4 overflow-y-auto scrollbar-thin'>
                    <div onClick={handleCategoryClick}>
                        {filteredCategories.map((category, i) => (
                            <div key={i}>
                                <div className="mt-4">
                                    <div
                                        className="group scroll-mt-4"
                                        id={`cat_${category.cat_id}`}
                                    >
                                        <Link href={""}>
                                            <div
                                                className={
                                                    openStates[category.cat_id]
                                                        ? "cursor-pointer  flex justify-between items-center mx-3 dark:bg-transparent my-2 hover:bg-[#e8f0f5] hover:rounded-xl p-3 bg-[#e8f0f5] rounded-xl"
                                                        : "cursor-pointer flex justify-between items-center mx-3 dark:bg-transparent my-2 hover:bg-[#e8f0f5] hover:rounded-xl p-3 "
                                                }
                                                onClick={() => handleCategoryClick(category.cat_id)}
                                            >
                                                <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
                                                    <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                                                        <div className="bg-[#f7f8fa] dark:bg-dark-bg flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12 ">
                                                            <Image
                                                                src={`/assets/icon/${category.cat_icon}.svg`}
                                                                alt={category.cat_name_en}
                                                                className="p-3"
                                                                width={100}
                                                                height={100}
                                                            />

                                                        </div>
                                                        <div className="w-40 text-left ml-2">
                                                            <p className="text-base text-slate-700 -cat dark:text-dark-text sm:text-mss">
                                                                {category.cat_name_en}
                                                            </p>
                                                            <p className="text-slate-500 text-xs mt-1 dark:text-dark-text xs:text-[11px]">
                                                                Subcategory: {category.no_of_subcat}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row w-12 items-center">
                                                        <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden" />
                                                        <div className="flex flex-col gap-y-1 justify-center items-center">
                                                            <p className="text-base text-slate-500 dark:text-dark-text xs:text-sm sm:text-mss">
                                                                {category.no_of_dua}
                                                            </p>
                                                            <p className="text-slate-500 text-xs dark:text-dark-text xs:text-[11px]">
                                                                Duas
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="ml-12 border-l-2 border-dotted my-2 border-[#1fa45b]">
                                            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                                {/* ---Start sub category--- */}
                                                {openStates[category.cat_id] &&
                                                    subcategories &&
                                                    subcategories
                                                        .filter(
                                                            (subcategory) =>
                                                                subcategory.cat_id === category.cat_id
                                                        )
                                                        .map((subcategory, i) => (
                                                            <div key={i} className="flex flex-row my-2">
                                                                <div className="bg-[#1fa45b] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5" />
                                                                <div className="flex flex-col justify-start items-start">
                                                                    <Link
                                                                        onClick={() =>
                                                                            handleClick(subcategory.subcat_id)
                                                                        }
                                                                        href={`#sec_${subcategory.subcat_id}`}
                                                                    >
                                                                        <p className="text-title cursor-pointer text-left text-sm dark:text-dark-text xs:text-2xs  text-slate-600 font-normal">
                                                                            {subcategory.subcat_name_en}
                                                                        </p>
                                                                    </Link>
                                                                    {/* ----Start individual Dua's--- */}
                                                                    <div className="">
                                                                        {duas &&
                                                                            duas
                                                                                .filter(
                                                                                    (dua) =>
                                                                                        dua.subcat_id ===
                                                                                        subcategory.subcat_id
                                                                                )
                                                                                .map((dua, i) => (
                                                                                    <div
                                                                                        key={i}
                                                                                        className="mt-2 cursor-pointer"
                                                                                        onClick={() =>
                                                                                            handleDuaClick(dua.dua_id)
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            onClick={(e) =>
                                                                                                e.stopPropagation()
                                                                                            }
                                                                                            href={`#dua_${dua.dua_id}`}
                                                                                        >
                                                                                            <div className="flex flex-row ">
                                                                                                <Image
                                                                                                    src={duaarrow}
                                                                                                    className="-translate-y-1 mr-2"
                                                                                                    alt="dua"
                                                                                                    width={20}
                                                                                                    height={20}
                                                                                                />
                                                                                                <p className=" text-xs my-3 text-left w-[95%] text-slate-400 ">
                                                                                                    {dua.dua_name_en}
                                                                                                </p>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                ))}
                                                                    </div>
                                                                    {/* ----End individual Dua's--- */}
                                                                </div>
                                                            </div>
                                                        ))}
                                                {/* ---End sub category--- */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

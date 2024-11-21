import { getCategory } from "@/utils/getCategory";
import { getSubCategory } from "@/utils/getSubCategory";
import Image from "next/image";

export default async function Home() {
  //get all category
  const category = await getCategory();
  const categories = await category.props.categories;

  //get subcategories
  const subcategory = await getSubCategory();
  const subcategories = await subcategory.props.subcategories;

  //get duas
  const dua = await getDua();
  const duas = await dua.props.dua;

  console.log(categories,"categories")
  console.log(subcategories,"sub categories")
  console.log(duas,"duas")

  return (
    <>
    {/* ---Start middle part--- */}
    <div className="col-span-12 xl:col-span-9 row-span-11 flex gap-4 xl:ml-[-30px] ">
      {/* ---Start Category----- */}

      <div className="w-[28%] md:ml-6 lg:ml-0 rounded-xl h-[86vh] border bg-white hidden md:block">
      <div className="rounded-t-lg bg-[#1fa45b] justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
      </div>
      <div className="overflow-hidden">
        <div className="mx-3 pt-4">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Image
                src={"/assets/search-icon.svg"}
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
            />
          </label>
        </div>
        <div className='h-[calc(100vh-32vh)]  3xl:h-[68vh]" scrl-cat pb-8 mb-4 overflow-y-scroll'>
          <div>
            
              <div>
                <div className="mt-4">
                  <div
                    className="group scroll-mt-4"
                    id="cat_id"
                  >
                 
                      <div
                        className="cursor-pointer  flex justify-between items-center mx-3 dark:bg-transparent my-2 hover:bg-[#e8f0f5] hover:rounded-xl p-3 bg-[#e8f0f5] rounded-xl"
                      >
                        <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
                          <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                            <div className="bg-[#f7f8fa] dark:bg-dark-bg flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12 ">
                              <Image
                                src={`/assets/icon/.svg`}
                                alt="duar_gurutto"
                                className="p-3"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className="w-40 text-left ml-2">
                              <p className="text-base text-slate-700 -cat dark:text-dark-text sm:text-mss">
                             
                              </p>
                              <p className="text-slate-500 text-xs mt-1 dark:text-dark-text xs:text-[11px]">
                                Subcategory: 
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row w-12 items-center">
                            <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden" />
                            <div className="flex flex-col gap-y-1 justify-center items-center">
                              <p className="text-base text-slate-500 dark:text-dark-text xs:text-sm sm:text-mss">
                              
                              </p>
                              <p className="text-slate-500 text-xs dark:text-dark-text xs:text-[11px]">
                                Duas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                    <div className="ml-12 border-l-2 border-dotted my-2 border-[#1fa45b]">
                      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                        {/* ---Start sub category--- */}
                       
                              <div className="flex flex-row my-2">
                                <div className="bg-[#1fa45b] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5" />
                                <div className="flex flex-col justify-start items-start">

                                    <p className="text-title cursor-pointer text-left text-sm dark:text-dark-text xs:text-2xs  text-slate-600 font-normal">
                                      Sub category Name
                                    </p>
                                  {/* ----Start individual Dua's--- */}
                                  
                                          <div
                                            
                                            className="mt-2 cursor-pointer"
                                     
                                          >

                                              <div className="flex flex-row ">
                                                <Image
                                                  src="/assets/duaarrow.svg"
                                                  className="-translate-y-1 mr-2"
                                                  alt="dua"
                                                  width={20}
                                                  height={20}
                                                />
                                                <p className=" text-xs my-3 text-left w-[95%] text-slate-400 ">
                                              dua name
                                                </p>
                                              </div>
                                     
                                          </div>
                                       
                                  </div>
                                  {/* ----End individual Dua's--- */}
                                </div>
                              </div>
                         
                        {/* ---End sub category--- */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>

      {/* ---End Category----- */}
  </>
  );
}

import AudioPlayer from "@/components/AudioPlayer";
import Categories from "@/components/Categories";
import { getCategory } from "@/utils/getCategory";
import { getDua } from "@/utils/getDua";
import { getSubCategory } from "@/utils/getSubCategory";
import Image from "next/image";

import duaCard from '@/public/assets/duacard.svg';
import copyImage from '@/public/assets/copy.svg';
import bookmark from '@/public/assets/nav/bookmark.svg';
import plan from '@/public/assets/plan.svg';
import share from '@/public/assets/share.svg';
import report from '@/public/assets/report.svg';

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



  return (
    <>
      {/* ---Start middle part--- */}
      <div className="col-span-12 xl:col-span-9 row-span-11 flex gap-4 justify-center">
        {/* ---Start Category----- */}
        <Categories
          categories={categories}
          subcategories={subcategories}
          duas={duas}
        />
        {/* ---End Category----- */}
        <div className="w-[98%] md:w-[75%] overflow-y-auto scrollbar-thin ">
          <div className="flex flex-row justify-between mb-5 px-5 py-4 bg-white rounded-2lg items-center cursor-pointer dark:bg-dark-bg md:hidden">
            <p className="flex gap-x-2 style-Kalpurush text-title font-medium leading-[25px]  dark:text-dark-text text-mss ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Duas&apos;s importance
            </p>
          </div>

          {subcategories &&
            subcategories.map((subcategory, i) => (
              <div key={i}>
                {" "}
                {/* --section div--- */}
                <div
                  id={`sec_${subcategory.subcat_id}`}
                  className="flex  mb-5 flex-row bg-white rounded-[.625rem] px-5 py-4 justify-start items-center dark:bg-dark-bg border"
                >
                  <p className="text-title font-semibold leading-[25px] dark:text-dark-text text-gray-500">
                    <span className="text-[#1fa45b] font-medium leading-[25px] ">
                      Section:
                    </span>
                    {subcategory.subcat_name_en}
                  </p>
                </div>
                {/* ---Dua Div--- */}
                {duas
                  ?.filter((dua) => dua?.subcat_id === subcategory?.subcat_id)
                  .map((dua, i) => (
                    <div
                      key={i}
                      id={`dua_${dua.dua_id}`}
                      className=" bg-white rounded-[.625rem] border mb-5 dark:bg-dark-bg"
                    >
                      <div className="p-6">
                        <div>
                          <div className="flex flex-row  justify-start items-center ">
                            <Image
                              src={duaCard}
                              alt="duacard"
                              className="mr-3"
                              height={30}
                              width={30}
                            />

                            <p className="text-[#1fa45b] font-medium -dua-title">
                              {dua?.dua_name_en}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <div className="w-full">
                            <p
                              className="  mt-5 text-justify leading-8 font-normal text-[#383838]"
                              style={{ fontSize: 18 }}
                            >
                              <span>{dua.top_en}</span>
                            </p>
                            <p
                              dir="rtl"
                              className="text-[#383838] my-8 text-right leading-loose text-6xl"
                              style={{
                                wordSpacing: 8,
                                fontSize: 30,
                                fontFamily: "me_quran",
                              }}
                            >
                              {dua?.dua_arabic}
                            </p>

                            <p />
                            {dua?.transliteration_en ? (
                              <p
                                className=" my-5 text-justify leading-8 italic text-[#383838]"
                                style={{ fontSize: 18 }}
                              >
                                <span
                                  id="transliteration"
                                  className=" -dua-title -dua-title font-medium text-[#383838]"
                                  style={{ fontSize: 18 }}
                                >
                                  Transliteration:
                                </span>{" "}
                                <span> {dua?.transliteration_en}</span>
                              </p>
                            ) : (
                              ""
                            )}
                            {dua?.translation_en ? (
                              <p
                                id="translation"
                                className=" my-5 text-title text-justify font-normal text-[#383838]"
                                style={{ fontSize: 18 }}
                              >
                                <span
                                  className=" -dua-title -dua-title font-medium"
                                  style={{ fontSize: 18 }}
                                >
                                  Translation:
                                </span>{" "}
                                <span> {dua?.translation_en}</span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                          <div>
                            <p
                              className="mt-5   font-normal text-[#1fa45b]"
                              style={{ fontSize: 18 }}
                            >
                              Reference:
                            </p>
                            <div
                              className="mt-1   font-normal dark:text-dark-text text-[#383838]"
                              style={{ fontSize: 18 }}
                            >
                              <span> {dua?.refference_en}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row items-center justify-between px-6">
                          <AudioPlayer audioSrc={dua?.audio} />
                          <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
                            <div id="copy" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src={copyImage}
                                alt="copy"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="bookmark" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src={bookmark}
                                alt="bookmark"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="plan" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src={plan}
                                alt="plan"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="share" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src={share}
                                alt="share"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="report" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src={report}
                                alt="report"
                                width={30}
                                height={30}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* ---End body---- */}
    </>
  );
}

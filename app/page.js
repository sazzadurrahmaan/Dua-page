import Categories from "@/components/Categories";
import { getCategory } from "@/utils/getCategory";
import { getDua } from "@/utils/getDua";
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
      <Categories
          categories={categories}
          subcategories={subcategories}
          duas={duas}
        />
    </div>

      {/* ---End Category----- */}
  </>
  );
}

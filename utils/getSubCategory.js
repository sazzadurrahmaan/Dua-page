export async function getSubCategory() {

    const res = await fetch("http://localhost:5000/api/sub_categories");
    const subcategories = await res.json();
  
    return {
      props: {
        subcategories,
      },
      revalidate: 60,
    };
  }
  
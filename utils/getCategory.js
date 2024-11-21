export async function getCategory() {
    const res = await fetch("http://localhost:5000/api/categories");
    const categories = await res.json();
  
    return {
      props: {
        categories,
      },
      revalidate: 60,
    };
  }
  
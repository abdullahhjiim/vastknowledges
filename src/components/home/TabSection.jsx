import Link from "next/link";

const TabSection = ({title}) => {
  return (
    <section id="latest" className="container py-2 sticky top-12 z-10">
      <div className="my-6">
        <ul className="bg-gray-100 py-2 px-2 rounded-md lg:flex justify-evenly  w-full  hidden my-6 max-w-full">
          <Link href="/categories/technology" ><li className={`${title == 'technology' ? 'text-gray-900 font-bold' : ''}`}>Technology</li></Link>
          <Link href="/categories/beauty-fashion" ><li className={`${title == 'beauty-fashion' ? 'text-gray-900 font-bold' : ''}`}>Beauty & Fashion</li></Link>
          <Link href="/categories/health-fitness" ><li className={`${title == 'health-fitness' ? 'text-gray-900 font-bold' : ''}`}>Health & Fitness</li></Link>
          <Link href="/categories/recipe" ><li className={`${title == 'recipe' ? 'text-gray-900 font-bold' : ''}`}>Recipe</li></Link>
          <Link href="/categories/reviews" ><li className={`${title == 'reviews' ? 'text-gray-900 font-bold' : ''}`}>Reviews</li></Link>
        </ul>
      </div>
    </section>
  );
};

export default TabSection;

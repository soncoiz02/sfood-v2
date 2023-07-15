import BaseCategoryType from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import useSwr from "swr";
import categoryServices from "../../api/categoryApis";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Skeleton = () => {
  return (
    <>
      <div className="w-[30%] h-[25px] bg-gray-200 rounded-[50px] dark:bg-gray-700"></div>
      <div className="w-[40%] h-[25px] bg-gray-200 rounded-[50px] dark:bg-gray-700"></div>
      <div className="w-[20%] h-[25px] bg-gray-200 rounded-[50px] dark:bg-gray-700"></div>
      <div className="w-[50%] h-[25px] bg-gray-200 rounded-[50px] dark:bg-gray-700"></div>
    </>
  );
};

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    error,
  } = useSwr("/", categoryServices.getAll);

  const searchParams = useSearchParams();

  const activeCate = (slug: string) => {
    const cate = searchParams.get("cate");
    return cate === slug;
  };

  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="flex md:flex-wrap items-center gap-2 w-full overflow-auto md:mt-4 mt-2">
      {!!isLoading || !!error ? (
        <Skeleton />
      ) : (
        <>
          <Link
            href={`/product?cate=all`}
            className={`flex py-1 px-4 ${
              activeCate("all")
                ? "bg-red-50 border-primary text-primary"
                : "bg-white border-gray-300 text-gray-400"
            } border-2 rounded-[50px] gap-x-1 cursor-pointer transition-[0.5s] hover:text-primary hover:border-primary  hover:bg-red-50`}
            key={0}
          >
            <p className="text-inherit md:text-base text-sm">All</p>
          </Link>
          {categories &&
            categories.map((cate: BaseCategoryType) => (
              <Link
                href={`/product?cate=${cate.slug}`}
                className={`flex items-center  justify-center py-1 px-4 min-w-fit ${
                  activeCate(cate.slug)
                    ? "bg-red-50 border-primary text-primary"
                    : "bg-white border-gray-300 text-gray-400"
                } border-2 rounded-[50px] gap-x-1 cursor-pointer transition-[0.5s] hover:text-primary hover:border-primary  hover:bg-red-50`}
                key={cate.id}
              >
                <Image
                  src={cate.icon}
                  width={isMobile ? 20 : 25}
                  height={isMobile ? 20 : 25}
                  alt={`${cate.name} icon`}
                />
                <p className="text-inherit md:text-base text-sm">{cate.name}</p>
              </Link>
            ))}
        </>
      )}
    </div>
  );
};

export default CategoryList;

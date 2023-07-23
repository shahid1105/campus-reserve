import { FcSearch } from "react-icons/fc";

const Search = () => {
  return (
    <>
      <div className="flex gap-0 mx-2 md:mx-24 lg:mx-24">
        <div className="border-[12px] border-slate-300 w-full">
          <input
            className="w-full p-1"
            type="search"
            name=""
            id=""
            placeholder="Search Here College Name"
          />
        </div>
        <div className="flex font-bold items-center bg-slate-200 rounded">
          <FcSearch className="font-bold text-5xl"></FcSearch>
        </div>
      </div>
    </>
  );
};

export default Search;

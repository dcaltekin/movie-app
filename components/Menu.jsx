import Link from "next/dist/client/link";

function Menu() {
  return (
    <div>
      {" "}
      <nav className="p-3 py-4 px-3 relative z-50 bg-slate-200 bg-opacity-10 shadow-2xl">
        <div className="container mx-auto flex flex-wrap items-center justify-start">
          <div className="flex-1 flex items-center justify-between">
            <Link href="/">
              <h1 className="text-white font-bold cursor-pointer">Logo</h1>
            </Link>
          </div>
          <ul className="flex items-center justify-start text-white mt-2">
            <li>
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Hakkımızda
              </button>
            </li>
            <li>
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                İletişim
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

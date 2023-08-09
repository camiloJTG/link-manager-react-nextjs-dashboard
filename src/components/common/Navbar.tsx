const Navbar = () => {
   return (
      <nav className='w-full z-30 top-10 bg-white shadow-lg border-b border-blue-400 mt-5'>
         <div className='w-full flex items-center justify-between px-6 mb-5'>
            <div></div>

            <div className='order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4'>
               <div className='auth flex items-center w-full md:w-full'>
                  <button className='bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700'>
                     New Link
                  </button>
                  <button className='bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100'>
                     Log out
                  </button>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

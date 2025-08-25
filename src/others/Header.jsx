import React from 'react';

const Header = ({ changeUser, firstName }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser('');
  };

  const displayName = firstName || 'Admin';
  const isAdmin = !firstName || firstName === undefined;

  return (
    <div className='p-4 text-gray-900 flex flex-col sm:flex-row items-start sm:items-end justify-between bg-white/70 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl animate-fade-in'>
      <div className='p-4 text-gray-900 mb-4 sm:mb-0'>
        <div className='p-4 text-gray-900 flex items-center space-x-4'>
          <div className='p-4 text-gray-900 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full flex items-center justify-center border-2 border-emerald-200'>
            <span className='p-4  text-xl sm:text-2xl font-bold text-slate-700'>
              {displayName.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className='p-4  text-xl sm:text-2xl font-medium text-slate-700 leading-tight'>
              Hello there! 👋
            </h1>
            <div className='p-4 text-gray-900 flex items-center space-x-2 mt-1'>
              <span className='p-4  text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent'>
                {displayName}
              </span>
              {isAdmin && (
                <span className='p-4  inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200'>
                  Admin
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={logOutUser}
        className='p-4  w-full sm:w-auto bg-gradient-to-r from-fuchsia-100 to-stone-100 hover:from-fuchsia-200 hover:to-stone-200 text-slate-800 font-semibold px-6 py-3 rounded-xl border border-fuchsia-200 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-200'
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
        <img src="/logo.png" alt="NIT Logo" className="h-12" />
        <button className="bg-white text-green-800 font-semibold px-4 py-1 rounded hover:bg-gray-100">
          Sign Up
        </button>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center text-center mt-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          <span>English</span> ↔{' '}
          <span className="text-green-700 dark:text-green-400">Kashmiri Translator</span>
        </h1>

        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2 space-x-4 italic">
          <span>“Acher khote che kuthe duur”</span>
          <span className="hidden sm:inline">“Imagination is more important than knowledge.” – Albert Einstein</span>
          <span className="hidden md:inline">“The best way...”</span>
        </div>

        {/* Chat Box */}
        <div className="mt-10 bg-white dark:bg-gray-800 shadow-md w-full max-w-5xl h-[400px] rounded-xl flex overflow-hidden">
          {/* Sidebar */}
          <aside className="bg-gray-100 dark:bg-gray-700 w-40 flex flex-col p-4 text-left">
            <h2 className="text-sm font-medium text-gray-800 dark:text-white mb-2">Chat 1</h2>
          </aside>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col justify-end p-6 relative">
            <input
              type="text"
              placeholder="Ask me anything or type to translate..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <header className="relative z-50">
        <nav className="fixed border-b top-0 left-0 right-0 headerr z-1000">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold">Numeracy</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#onboarding"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Onboarding
                </a>
                <a
                  href="#use-cases"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Use Cases
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Testimonials
                </a>
              </div>
              <div className="relative md:hidden flex items-center">
                <button
                  className="text-gray-700 focus:outline-none"
                  tabIndex={0}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="absolute right-0 w-48 py-2 mt-40  bg-white rounded-md shadow-xl opacity-0 invisible transform scale-95 transition-all duration-300 ease-in-out focus:opacity-100 focus:visible focus:scale-100">
                  <a
                    href="#features"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Features
                  </a>
                  <a
                    href="#onboarding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Onboarding
                  </a>
                  <a
                    href="#use-cases"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="relative z-10 mb-40 md:mb-[17rem]">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-16">
              Numeracy
            </h1>
          </div>
          {/*<img
            src="/peoplewaiting.svg"
            alt="peoplewaiting"
            className="absolute top-0 md:-top-[72rem] left-0 right-0 w-full opacity-10 z-0"
  />*/}
        </div>
      </main>
    </div>
  );
}

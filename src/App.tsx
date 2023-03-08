export const App = () => {
  return (
    <div className="relative lg:bg-[url('/images/fondo-mentor.jpg')] w-full h-screen bg-no-repeat bg-cover lg:flex lg:items-center lg:justify-center z-40 font-hankengrotesk">
      <div className="sticky lg:flex items-center justify-center bg-slate-100 z-10 shadow-2xl lg:py-36 lg:px-52">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl lg:w-[680px]">
          <div className="bg-gradient-to-t from-bgsecondary to-bgprimary rounded-bl-3xl rounded-br-3xl lg:rounded-3xl px-10 pb-10 pt-5 lg:p-10 flex flex-col items-center justify-center">
            <h3 className="text-tperiwinkle text-lg font-semibold">
              Your Result
            </h3>
            <div className="py-5 lg:py-8">
              <div className="rounded-full py-12 px-14 bg-gradient-to-b from-cviolet to-transparent">
                <p className="text-5xl font-bold text-white text-center mb-2">
                  76
                </p>
                <p className="text-tperiwinkle opacity-40 text-center">
                  of 100
                </p>
              </div>
            </div>
            <h2 className="text-white text-2xl pb-2 lg:pb-6 font-semibold tracking-[1px]">
              Great
            </h2>
            <p className="text-tperiwinkle text-center w-full lg:w-[220px]">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          {/* Summary */}
          <div className="px-8 py-8 lg:p-10">
            <h1 className=" text-xl lg:text-2xl text-[#303b59] font-semibold">
              Summary
            </h1>
            <div className="flex flex-col py-5 lg:py-7 gap-4 pb-6 lg:pb-10">
              <div className="py-3 px-4 bg-[#fff5f5] rounded-xl flex items-center justify-between gap-2 w-full">
                <div className="flex items-center gap-2">
                  <img src="/images/icon-reaction.svg" alt="reaction" />
                  <p className="text-[#FF5757] text-lg font-bold">Reaction</p>
                </div>
                <div className="font-bold">
                  <p className="text-gray-400">
                    <span className="text-[#303b59]">80</span> / 100
                  </p>
                </div>
              </div>
              <div className="py-3 px-4 bg-[#fffcec] rounded-xl flex items-center justify-between gap-2 w-full">
                <div className="flex items-center gap-2">
                  <img src="/images/icon-memory.svg" alt="reaction" />
                  <p className="text-[#FFB01F] text-lg font-bold">Memory</p>
                </div>
                <div className="font-bold">
                  <p className="text-gray-400">
                    <span className="text-[#303b59]">92</span> / 100
                  </p>
                </div>
              </div>
              <div className="py-3 px-4 bg-[#f2fafa] rounded-xl flex items-center justify-between gap-2 w-full">
                <div className="flex items-center gap-2">
                  <img src="/images/icon-verbal.svg" alt="reaction" />
                  <p className="text-[#00BD91] text-lg font-bold">Reaction</p>
                </div>
                <div className="font-bold">
                  <p className="text-gray-400">
                    <span className="text-[#303b59]">61</span> / 100
                  </p>
                </div>
              </div>
              <div className="py-3 px-4 bg-[#f3f3fd] rounded-xl flex items-center justify-between gap-2 w-full">
                <div className="flex items-center gap-2">
                  <img src="/images/icon-visual.svg" alt="reaction" />
                  <p className="text-[#1125D4] text-lg font-bold">Visual</p>
                </div>
                <div className="font-bold">
                  <p className="text-gray-400">
                    <span className="text-[#303b59]">72</span> / 100
                  </p>
                </div>
              </div>
            </div>
            <button className="py-4 lg:py-3 px-4 w-full rounded-full lg:rounded-3xl bg-[#303b59] hover:bg-gradient-to-t from-bgsecondary to-bgprimary text-white text-center cursor-pointer transition-colors">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

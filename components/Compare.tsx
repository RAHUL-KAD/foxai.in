export default function Compare(){
    return (


        <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            {/* See How we improved the whisper */}
          </h2>
        </div>
        <div
          className="m-auto mt-12 items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12"
        >
          <div className="group relative z-10 -mx-4 md:mx-0 md:w-6/12 lg:w-10/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
            ></div>
            <div className="grid sm:grid-cols-2">
            <div className="relative space-y-6 p-8 sm:p-12">
              <h3 className="text-center text-5xl font-semibold text-gray-700 dark:text-white">Transcribe</h3>
              <div>
                {/* <div className="relative flex justify-around">
                  <div className="flex items-end">
                    <span className="leading-0 text-7xl font-bold text-gray-800 dark:text-white">4</span>
                    <div className="pb-2">
                      <span className="block text-2xl font-bold text-gray-700 dark:text-white">%</span>
                      <span className="block text-2xl font-bold text-gray-700 dark:text-white">&nbsp; times</span>
                      <span className="block text-xl font-bold text-primary">&nbsp; Faster</span>
                    </div>
                  </div>
                </div> */}
              </div>
              <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
              <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Batch process</span>
                </li>
                <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>30+ Languages</span>
                </li>
                <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Diarization (separate per speaker) </span>
                </li>
                <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Realtime Streaming </span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Word Level timestamps</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Custom Vocabulary (keyword boosting)</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Redaction</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Summarization</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Numeral Formatting</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Profanity Filter</span>
                </li>
              </ul>
            </div>
            <div className="relative space-y-6 p-8 sm:p-12">
              <h3 className="text-center text-5xl font-semibold text-gray-700 dark:text-white">Understand</h3>
              <ul role="list" className="m-auto w-max space-y-4 py-6 text-gray-600 dark:text-gray-300">
                <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Summarisation</span>
                </li>
                <li className="space-x-2">
                  <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Topic Extraction</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Key points extraction</span>
                </li>
                <li className="space-x-2">
                <span className="font-bold text-lg text-green-500">&#10003;</span>
                  <span>Translation</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
      
          {/* <div className="group relative md:w-6/12 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 dark:shadow-none bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105"
            ></div>
            
            <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-8 md:pl-12 lg:p-16 lg:pl-20">
              <ul role="list" className="space-y-4 py-6 text-gray-600 dark:text-gray-300">
                <li className="space-x-2">
                    <span className="font-bold text-lg text-red-500">&#10003;</span>
                  <span>First premium advantage</span>
                </li>
                <li className="space-x-2">
                    <span className="font-bold text-lg text-red-500">&#10003;</span>
                  <span>Second advantage weekly</span>
                </li>
                <li className="space-x-2">
                    <span className="font-bold text-lg text-red-500">&#10003;</span>
                  <span>Third advantage donate to project</span>
                </li>
                <li className="space-x-2">
                    <span className="font-bold text-lg text-red-500">&#10003;</span>
                  <span>Fourth, access to all components weekly</span>
                </li>
              </ul>
              
            </div>
          </div> */}
        </div>
      </div>
                                          
    )
}
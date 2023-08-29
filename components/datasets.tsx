export default function datasets(){
    return (
        <section
            id='datasets' className="md:pt-5 pb-10 mt-10"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto md:text-center">
                    <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-[#333] sm:text-5xl flex items-center justify-center">
                        Synthetic Datasets
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#Image</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#medical</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brain Tumor</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Synthetic Generated images of a Brain Tumor.</p>
                        <a href="https://drive.google.com/drive/folders/1h_dja2fg0nMEontZPRg9YtlrKUOx8bjr?usp=sharing" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Explore Dataset
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#Audio</span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">#ASR</span>
                        
                        <a>
                            <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-gray-900 dark:text-white">Audio Digit Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Most extensive collection of generated audio recordings across 10 distinct languages.</p>
                        <a href="https://huggingface.co/datasets/Voxlab/Synthetic-Spoken-Digit-Dataset" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium mt-2 text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Explore dataset
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>

                    

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Dataset contains english sentences spoken by men and women.</p>
                        {/* <a href="#" 
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">English Accent Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This dataset contains english speakers from different accents like Australian, British, American, and many more.</p>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>
                        
                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Spanish Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Dataset contains Spanish sentences spoken by men and women.</p>
                        {/* <a href="#" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                       
                        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">In Progress</span>

                        <a>
                            <h5 className="mb-2 mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">French Dataset</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This Dataset contains French sentences spoken by men and women.</p>
                        {/* <a href="#" 
                            className="inline-flex items-center justify-center rounded-xl border-2 bg-[#333] px-3 py-2 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> */}
                    </div>

                </div>
            </div>

        </section>
    )
}
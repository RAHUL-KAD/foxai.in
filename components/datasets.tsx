export default function datasets(){
    return (
        <section
            id='datasets' className="md:pt-5 pb-10 w-screen"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto md:text-center">
                    {/* <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-[#333] sm:text-5xl flex items-center justify-center whitespace-wrap">
                        Solutions we provide
                    </h1> */}

                    {/* <h1 className="mb-4 text-3xl text-[#333] font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">Solutions we provide</h1>
                    <p className="mb-6 text-lg font-normal text-[#333] lg:text-lg sm:px-16 xl:px-48">Improve Customer services with Generative AI, that understands your customer needs and interacts with your agents.</p> */}

                

                <div className="isolate overflow-hidde">

                    <div className="mx-auto px-6 pb-96 pt-10 text-center sm:pt-32 lg:px-8">
                        <div className="mx-auto">
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-900 mb-5">Solutions we provide</h2> */}
                        <p className="mt-2 text-4xl font-bold tracking-tight text-[#333] sm:text-5xl">Solutions we provide <br className="hidden sm:inline lg:hidden"/></p>
                        </div>  
                        <div className="relative mt-6">
                        <p className="mx-auto max-w-2xl text-lg leading-8 text-[#333]">Improve Customer services with Generative AI, that understands your customer needs and interacts with your agents.</p>
                        {/* <svg viewBox="0 0 1208 1024" className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                            <ellipse cx="604" cy="50" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="700" ry="700" />
                            <defs>
                            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                <stop stop-color="#6a32ee" />
                                <stop offset="1" stop-color="#816dad" />
                            </radialGradient>
                            </defs>
                        </svg> */}
                        </div>
                    </div>
                    <div className="flow-root bg-white pb-24 sm:pb-32">
                        <div className="-mt-80">
                        <div className="mx-auto max-w-full px-6 lg:px-8">
                            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-6xl lg:grid-cols-3 content-center ">
                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Summarization</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">Transcript summarization can summarize text in a transcript into points to remember by.</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Sentiment Analysis</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base text-left leading-7 text-gray-600">Sentiment Analysis can help detect emotional value in conversations, by retrieving positive, negative, and neutral statements in the transcript.</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>
                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <div>
                                {/* <h3 id="tier-team" className="text-base font-semibold leading-7 text-indigo-600">Team</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Topic Extraction</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base text-left leading-7 text-gray-600">Extract the conversation topic discussed between agent and customer.</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-team" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Customer Satisfaction</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">Check wether customer was satisfied or not by agent</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Customer Turnover chances</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">Determine wether a customer can turn into paying customer or not.</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-8">
                                <div>
                                {/* <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3> */}
                                <div className="flex items-baseline gap-x-2">
                                    <span className="text-2xl font-semibold tracking-tight text-gray-900">Custom Solution</span>
                                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                                </div>
                                <p className="mt-6 text-base leading-7 text-left text-gray-600">You can configure custom solution that your contact center needs.</p>
                                
                                </div>
                                {/* <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started today</a> */}
                            </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
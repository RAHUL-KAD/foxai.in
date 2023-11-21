export default function Blog(){
    return (
        <div>
            <div className="bg-white py-24 sm:py-32 max-w-7xl mt-20">
            <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p className="mt-2 text-lg leading-8 text-center text-gray-600">Learn how to grow your business with our expert advice.</p>
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <div className="mt-20 mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">

                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                <time dateTime="2020-03-16" className="block text-sm leading-6 text-gray-600">Mar 16, 2020</time>
                <h2 id="featured-post" className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We’re incredibly proud to announce we have secured $75m in Series B</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus.</p>
                <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                    <div className="flex">
                    <a href="#" className="text-sm font-semibold leading-6 text-indigo-600" aria-describedby="featured-post">Continue reading <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                    <a href="#" className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                        Michael Foster
                    </a>
                    </div>
                </div>
                </article>
                <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                <div className="-my-12 divide-y divide-gray-900/10">
                    <article className="py-12">
                    <div className="group relative max-w-xl">
                        <time dateTime="2020-03-16" className="block text-sm leading-6 text-gray-600">Mar 10, 2020</time>
                        <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            Boost your conversion rate
                        </a>
                        </h2>
                        <p className="mt-4 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.</p>
                    </div>
                    <div className="mt-4 flex">
                        <a href="#" className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900">
                        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50" />
                        Lindsay Walton
                        </a>
                    </div>
                    </article>

                </div>
    </div>
  </div>
</div>

        </div>
                                          
    )
}
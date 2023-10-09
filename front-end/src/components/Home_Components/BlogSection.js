import React from 'react'

const BlogSection = () => {
    return (
        <section className="max-w-7xl p-7 mx-auto pt-8">
            <h1 class="mb-4 sm:text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl text-center pt-6">Many AMAZING TRIP BLOG posts </h1>
            <p class="mb-9 text-base font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400 text-center py-2 px-8 ">Read popular places to travel.</p>
            <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
                <div className="col-span-1">
                    {/* Nội dung cột trái */}
                    {/* Đây chỉ có một hàng duy nhất */}
                    1
                </div>
                <div className="col-span-1 grid grid-rows-3 gap-4">
                    {/* Nội dung cột phải */}
                    {/* Có 3 hàng */}
                    <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                        <h5 class="mb-3 text-lg font-bold">Welcome to California</h5>
                        <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                            <small>Published <u>13.01.2022</u> by
                                <a href="#!">Anna Maria Doe</a></small>
                        </p>
                        <p class="text-neutral-500 dark:text-neutral-300">
                            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
                            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
                            ullamcorper diam.
                        </p>
                    </div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
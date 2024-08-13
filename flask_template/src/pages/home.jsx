import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const HomePage = ()=> {

    return(
        <div className="">
            <Navbar></Navbar>
            <div className="">
                {/* Hero */}
                <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
                    {/* Announcement Banner */}
                    <div className="flex justify-center">
                    <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300" href="#">
                        PRO release - Join to waitlist
                        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </span>
                    </a>
                    </div>
                    {/* End Announcement Banner */}
                    {/* Title */}
                    <div className="mt-5 max-w-2xl text-center mx-auto">
                    <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                        Let's Build
                        <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Together</span>
                    </h1>
                    </div>
                    {/* End Title */}
                    <div className="mt-5 max-w-3xl text-center mx-auto">
                    <p className="text-lg text-gray-600">Preline UI is an open-source set of prebuilt UI components, ready-to-use examples and Figma design system based on the utility-first Tailwind CSS framework.</p>
                    </div>
                    {/* Buttons */}
                    <div className="mt-8 gap-3 flex justify-center">
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4" href="#">
                        Get started
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                    <button type="button" className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        $ npm i preline
                        <span className="flex justify-center items-center bg-gray-200 rounded-md size-7">
                        <svg className="shrink-0 size-4 group-hover:rotate-6 transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={8} height={4} x={8} y={2} rx={1} ry={1} /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /></svg>
                        </span>
                    </button>
                    </div>
                    {/* End Buttons */}
                    <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
                    <span className="text-sm text-gray-600">Package Manager:</span>
                    <span className="text-sm font-bold text-gray-900">npm</span>
                    <svg className="size-5 text-gray-300" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
                    </svg>
                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
                        Installation Guide
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </a>
                    </div>
                </div>
                </div>
                {/* End Hero */}

            </div>

            <div className="">
                {/* Icon Blocks */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                    {/* Icon Block */}
                    <div>
                    <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                        <svg className="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={10} height={14} x={3} y={8} rx={2} /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800">Responsive</h3>
                        <p className="mt-1 text-gray-600">Responsive, and mobile-first project on the web</p>
                    </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div>
                    <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                        <svg className="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx={17} cy={17} r={3} /><circle cx={7} cy={7} r={3} /></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800">Customizable</h3>
                        <p className="mt-1 text-gray-600">Components are easily customized and extendable</p>
                    </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div>
                    <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                        <svg className="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
                        <p className="mt-1 text-gray-600">Every component and plugin is well documented</p>
                    </div>
                    </div>
                    {/* End Icon Block */}
                    {/* Icon Block */}
                    <div>
                    <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
                        <svg className="shrink-0 size-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                        <p className="mt-1 text-gray-600">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                    </div>
                    {/* End Icon Block */}
                </div>
                </div>
                {/* End Icon Blocks */}

            </div>

            <div className="">
                {/* Features */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="relative p-6 md:p-16">
                    {/* Grid */}
                    <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                        <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
                        Fully customizable rules to match your unique needs
                        </h2>
                        {/* Tab Navs */}
                        <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                        <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                            <span className="flex gap-x-6">
                            <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" /><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" /><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" /><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" /><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg>
                            <span className="grow">
                                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Advanced tools</span>
                                <span className="block mt-1 text-gray-800">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
                            </span>
                            </span>
                        </button>
                        <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                            <span className="flex gap-x-6">
                            <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /></svg>
                            <span className="grow">
                                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Smart dashboards</span>
                                <span className="block mt-1 text-gray-800">Quickly Preline sample components, copy-paste codes, and start right off.</span>
                            </span>
                            </span>
                        </button>
                        <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                            <span className="flex gap-x-6">
                            <svg className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
                            <span className="grow">
                                <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">Powerful features</span>
                                <span className="block mt-1 text-gray-800">Reduce time and effort on building modern look design with Preline only.</span>
                            </span>
                            </span>
                        </button>
                        </nav>
                        {/* End Tab Navs */}
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-6">
                        <div className="relative">
                        {/* Tab Content */}
                        <div>
                            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                            <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                            </div>
                            <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                            <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                            </div>
                            <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                            <img className="shadow-xl shadow-gray-200 rounded-xl" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80" alt="Features Image" />
                            </div>
                        </div>
                        {/* End Tab Content */}
                        {/* SVG Element */}
                        <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                            <svg className="w-16 h-auto text-orange-500" width={121} height={135} viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
                            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
                            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth={10} strokeLinecap="round" />
                            </svg>
                        </div>
                        {/* End SVG Element */}
                        </div>
                    </div>
                    {/* End Col */}
                    </div>
                    {/* End Grid */}
                    {/* Background Color */}
                    <div className="absolute inset-0 grid grid-cols-12 size-full">
                    <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
                    </div>
                    {/* End Background Color */}
                </div>
                </div>
                {/* End Features */}

            </div>

            <Footer></Footer>
        </div>
    )
}
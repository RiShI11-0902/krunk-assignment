import { useState } from 'react'
import { bag, mic, robo } from './assets'
import { FaLink } from "react-icons/fa6";
import { IoIosArrowForward } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div class="lg:flex lg:justify-around lg:items-center">
                <div class="ex  bg-gradient-to-l from-purple-400 to-purple-900 py-56 h-[40%] w-[30%] rounded-br-full lg:rounded-b-full  lg:w-[30%] lg:py-80 lg:-ml-96">
                </div>
                <div class="mobilebody w-[100%] h-fit bg-white p-1   absolute top-1 left-0 rounded-3xl lg:w-[23%] lg:top-14 lg:left-40 md:w-[45%] md:left-56 ">

                    <div class="screen    rounded-3xl relative">
                        <div class="user  p-0.5  bg-blue-100 rounded-t-3xl rounded-b-xl ">
                            <div class="box flex  mt-1  p-1 items-center  ml-4 justify-between">
                                <div class="flex  space-x-1 items-center">
                                    <div className='w-20 relative items-center'>
                                        <img class="rounded-full w-16 bg-white" src={robo} alt="" />
                                        <div className='p-1 w-fit absolute right-5 bottom-1 bg-green-600 rounded-full'></div>
                                    </div>
                                    <div class="text text-sm -ml-5 text-blue-500">
                                        <h3 className='font-bold text-lg'>Timpu</h3>
                                        <span>Chat assistant</span>
                                    </div>

                                </div>
                                <div class="flex flex-row items-center space-x-2">
                                    <div className='p-1 bg-green-600 rounded-full'></div>
                                    <p>Online</p>
                                </div>

                            </div>
                        </div>
                        <div class="chat-body">
                            <div class="chat p-1 lg:p-1 text-xs  rounded-r-2xl rounded-tl-xl rounded-bl-sm mt-1 w-[65%] ml-2">
                                <p class="p-0 lg:p-0 bg-gradient-to-r text-sm from-blue-100 to-white p-2 font-medium lg:text-xs lg:font-normal">Hi, Sam i am your personal shopping assitant How can i help you?
                                </p>
                                <span>4 : 45 pm</span>
                            </div>
                            <div class="chat p-1 lg:p-1 text-xs  rounded-r-2xl rounded-tl-xl rounded-bl-xl rounded-br-sm  w-[65%] ml-[8rem] ">
                                <p class="p-2 lg:p-0 bg-gradient-to-r from-green-300 to-green-100   text-sm font-medium lg:text-xs lg:font-normal  ">I am looking for a handbag with long strap</p>
                                <span className='ml-44 lg:ml-40'>4 : 46 pm</span>
                            </div>
                           
                            <div class="chat p-1 lg:p-1 text-sm rounded-r-2xl rounded-tl-xl rounded-bl-sm mt-2.5 w-[65%] ml-2">
                                <p class="p-0 lg:p-0 text-gray-400 font-medium lg:text-xs lg:font-normal">Popular tags for handbag</p>
                            </div>
                            <div class="chat p-1 lg:p-1 text-xs  rounded-r-2xl rounded-tl-xl rounded-bl-sm mt-1 w-[85%] ml-2">
                                <p class="p-0 lg:p-0  flex flex-row space-x-2 font-medium lg:text-xs lg:font-normal">
                                    <ul className='flex text-sm flex-row space-x-3 w-fit overflow-hidden'>
                                        <li className='min-w-fit  border-blue-700 text-blue-400 p-1 border-2'>clutch</li>
                                        <li className='min-w-fit  border-blue-700 text-blue-400 p-1 border-2'>fabric lining</li>
                                        <li className='min-w-fit  border-blue-700 text-blue-400 p-1 border-2'>Baggit</li>
                                        <li className='min-w-fit  border-blue-700 text-blue-400 p-1 border-2'>Multi</li>
                                    </ul>
                                    <IoIosArrowForward className='w-12 text-2xl' />
                                </p>
                            </div>
                            <div className='p-1'>
                                <div class="chat box p-1 lg:p-1 text-xs bg-gradient-to-r from-blue-300 to-blue-100  rounded-full mt-1 w-[70%] ml-2">
                                    <div className='flex flex-row items-center bg-white rounded-xl '>
                                        <div>
                                            <img className='w-24 rounded-2xl p-2' src={bag} alt="" />
                                            <img src="" alt="" />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p class="p-0 lg:p-0  font-medium text-sm lg:font-normal"> Bags on Timpu</p>
                                            <span>1123 Products</span>
                                        </div>
                                        <div>
                                            <IoIosArrowForward className='w-12 text-2xl' />
                                        </div>
                                    </div>
                                    <div className='p-2 text-sm font-medium'><p>or set filter and help us choose the best bag for you</p></div>
                                </div>
                                <span className=' ml-2 text-xs '>4 : 48 pm</span>
                            </div>
                            <div className=''>
                                <div className='flex flex-row justify-around'>
                                    <p>Select filters</p>
                                    <p className='flex flex-row space-x-4'>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 3.33331H12.1667" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.83333 3.33331H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18 10H10.5" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.16667 10H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18 16.6667H13.8333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.5 16.6667H3" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.1667 1.66669V5.00002" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M7.16669 8.33331V11.6666" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M13.8333 15V18.3333" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span>filter</span>
                                    </p>
                                </div>
                                <div className=' p-1 items-center  w-full'>
                                    <div className='flex flex-row justify-around'>
                                        <p className=' p-1 flex flex-row items-center space-x-5 text-blue-500  border-2 border-blue-700 rounded-lg '>Strap - Long <span className='ml-5'><RxCross2 /></span></p>
                                        <p className=' bg-gray-200 p-1  flex flex-row items-center space-x-5  max-w-fit   rounded-lg'>colour <span className='ml-5'><RxCross2 /></span></p>
                                        <p className=' bg-gray-200 p-1  flex flex-row items-center space-x-5  max-w-fit  rounded-lg'>size <span className='ml-5'><RxCross2 /></span></p>
                                    </div>
                                    <div className='flex mt-3 flex-row justify-around'>
                                        <p className=' bg-gray-200 p-1  flex flex-row items-center space-x-5 max-w-fit  rounded-lg'>brand <span className='ml-5'><RxCross2 /></span></p>
                                        <p className=' bg-gray-200 p-1  flex flex-row items-center space-x-5  max-w-fit  rounded-lg'>material <span className='ml-5'><RxCross2 /></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-blue-100 mt-3'>

                                <div class="write-msg flex flex-row space-x-4 relative items-center ">
                                    <input type="text" placeholder="Type A Message" class="p-2 rounded-xl mt-3 ml-4 w-[69%] focus:border-violet-500 mb-4" />
                                    <FaLink className='w-10 absolute right-24 ' />
                                    <div class=" bg-blue-600 p-2 rounded-lg">
                                        <IoIosArrowForward className='w-12 text-white text-2xl' />
                                    </div>
                                </div>
                                <div className='flex flex-row items-center -mt-5 space-x-5 w-fit mx-auto'>
                                    <p>Powered by</p>
                                    <span className='flex flex-row items-center'>Krunk.ai <img src={mic} className='w-10' alt="" /> </span>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default App

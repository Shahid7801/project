import React from 'react';

import { Button } from './button';

import image from "./assets/quete.png";
import Boy from "./assets/boy.png";
import hand from "./assets/hand.png";
import headphone from "./assets/head.png";
import laptop from "./assets/lap.png";
import icon from "./assets/Icon.png";
import box from "./assets/box.svg";
import chart from "./assets/chart.svg";
import ques from "./assets/ques.svg";
import list from "./assets/list.svg";
import slap from "./assets/slap.svg";

import cr from "./assets/flag.png";
import Bulb from "./assets/bulb.svg";
import book from "./assets/book.svg";
import group from "./assets/pep.svg";
import link from "./assets/in.svg";
import career from "./assets/door.svg";
import AI from "./assets/ai.svg";

export const PromoCard = ({price1 , price2}) => {
    return (
        <div className=" flex items-center justify-center w-full min-h-[800px] bg-[#02030E] ">
            <div className="flex items-center justify-center flex-col lg:flex-row h-full w-full p-4 md:px-20 lg:max-w-[1400px] gap-8">
                <div className="flex flex-col items-start justify-center w-full lg:w-1/3 h-full p-6 gap-6">
                    <h1 className="text-6xl text-[#e9e8ff] font-sans">Artificial Intelligence Course Fee
                    </h1>
                    <p className="text-[#c9c6ec] text-lg">Quality learning, simplified and budget-
                        friendly – just for you!
                    </p>
                    <div className="flex w-full  p-4 flex-col items-start justify-center gap-4 bg-[#0a0c19] rounded-xl  bg-cover">
                        < img src={image}alt="arrow"  height={30} width={30} />
                        <p className="text-[#c9c6ec] text-lg poppin">“The YHills course is straightforward,
                            featuring hands-on projects and a
                            real-world approach, I recommend it!”</p>

                        <div className="flex flex-row w-full max-w-[320px] h-auto items-center justify-between p-4 px-6 rounded-lg bg-[#0d0f1c] border border-[#15192e]">
                            <div className="flex flex-col items-start justify-center">
                                <img src={Boy} alt="arrow" height={30} width={30} className="rounded-sm"/>
                                <h2 className="text-sm text-[#c9c6ec]">Priyanshu K</h2>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="flex flex-row items-center justify-center gap-1 w-full text-[orange]">
                                ★★★★★
                         </div>
                                <p className="text-xs text-[#bdb9e2]">
                                    5-star rating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full lg:w-1/3 h-[645px] p-4 ">
                    <div className="absolute top-0 flex flex-col items-start justify-start bg-[#6B59ED] rounded-[25px] w-full max-w-[500px] h-[165px] p-5 gap-2">
                        <h1 className="text-xl font-semibold text-white ">Mentor-Led Program</h1>
                        <h1 className="text-4xl font-bold text-white ">₹ {price1} <span className="font-normal text-lg"> /Course</span></h1>

                    </div>
                    <div className="aboslute mt-[116px] flex flex-col w-full max-w-[400px] bg-[#0d0f1c] rounded-b-xl min-h-[525px] px-4 py-1 gap-3">
                        <div className="flex h-[75px] w-[75px] items-center justify-center bg-[#02030a] z-[4] rounded-xl p-2 border border-[#6B59ED]">
                            <img src={hand} alt="img" height={50} width={50} />
                        </div>
                        <div className="text-lg font-semibold text-[#c9c6ec] mb-1">You’ll Get Access to:</div>
                        <ul className="flex flex-col items-start justify-center w-full h-auto gap-3 mb-10 ">
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={headphone} alt="arrow" height={18} width={18} />
                                Live Mentorship
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={laptop} alt="arrow" height={18} width={18} />
                                Project-Based Learning
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={icon} alt="arrow" height={18} width={18} />
                                Recorded Video Lectures
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={box} alt="arrow" height={18} width={18} />
                                Industry based Project
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={chart} alt="arrow" height={18} width={18} />
                                Industry graded Certificate
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={ques} alt="arrow" height={18} width={18} />
                                Doubt Clearing Session
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={list} alt="arrow" height={18} width={18} />
                                Quiz & Assessments
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={slap} alt="arrow" height={18} width={18} />
                              Personal Dashboard
                            </li>
                        </ul>
                        <Button variant="custom" className="bg-[#6B59ED] text-white rounded-xl w-full max-w-[175px] flex items-center justify-center text-lg font-bold px-5 py-2 ml-4">Start Learning</Button>
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center w-full lg:w-1/3 h-[645px] p-4 ">
                    <div className="absolute top-0 flex flex-col items-start justify-start bg-[#6B59ED] rounded-[25px] w-full max-w-[500px] h-[165px] p-5 gap-2">
                        <h1 className="text-xl font-semibold text-white ">Professional Program</h1>
                        <h1 className="text-4xl font-bold text-white ">₹ {price2} <span className="font-normal text-lg"> /Course</span></h1>

                    </div>
                    <div className="aboslute mt-[116px] flex flex-col w-full max-w-[400px] bg-[#0d0f1c] rounded-b-xl min-h-[525px] px-4 py-1 gap-3">
                        <div className="flex h-[75px] w-[75px] items-center justify-center bg-[#02030a] z-[4] rounded-xl p-2 border border-[#6B59ED]">
                            <img src={cr} alt="arrow" height={50} width={50} />
                        </div>
                        <div className="text-lg font-semibold text-[#c9c6ec] mb-1">Everything in Mentor-Led, Plus:</div>
                        <ul className="flex flex-col items-start justify-center w-full h-auto gap-3 mb-10">
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={Bulb} alt="arrow" height={18} width={18} />
                                Aptitude Grooming
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={book} alt="arrow" height={18} width={18} />
                               Specific Resume Building
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                               <span className='text-green-700 px-1 font-extrabold'>..</span> 
                                Personality Development
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={group} alt="arrow" height={18} width={18} />
                               Group  Discussion Session
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                               <span className='text-green-700 px-1 font-extrabold'>#</span> 
                                Placement Assistance
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={link} alt="arrow" height={18} width={18} />
                               Linkedin Optimization Session
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={career }alt="arrow" height={18} width={18} />
                               Access to Our Career Portal
                            </li>
                            <li className="flex flex-row gap-3 items-center justify-start text-md text-[#c9c6ec] hover:text-[#8475f4]">
                                <img src={AI} alt="arrow" height={18} width={18} />
                               AI Mock Interview Portal
                            </li>
                        </ul>
                        <Button variant="custom" className="bg-[#6B59ED] text-white rounded-xl w-full max-w-[175px] flex items-center justify-center text-lg font-bold px-5 py-2 ml-4">Start Learning</Button>

                    </div>

                </div>
            </div>
        </div>
    )
}

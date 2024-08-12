"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'MERN Development',
        title: 'Greens International E-commerce - User Side',
        description: 'The user interface of the Greens International E-commerce platform, designed to provide an intuitive and engaging shopping experience. Features include a responsive product catalog, user-friendly shopping cart, streamlined checkout process, and account management functionalities.',
        stack: [
            { name: 'PostgreSQL' },
            { name: 'Express.js' },
            { name: 'Next.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'Tailwind CSS' },
        ],
        image: '/assets/work/greensuser.png',
        live: 'https://www.greensintl.com',
        github: '',
    },
    {
        num: '02',
        category: 'MERN Development',
        title: 'Greens International E-commerce - Admin Side',
        description: 'The admin interface of the Greens International E-commerce platform, designed for managing products, orders, and user accounts. Features include an intuitive dashboard, comprehensive order management, product CRUD operations, and user administration.',
        stack: [
            { name: 'PostgreSQL' },
            { name: 'Express.js' },
            { name: 'Next.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'Tailwind CSS' },
        ],
        image: '/assets/work/greensadmin.png',
        live: 'https://www.greensintl.com',
        github: '',
    },
    {
        num: '03',
        category: 'MERN Development',
        title: 'Doctor Booking Website',
        description: 'A comprehensive MERN stack application for booking doctor appointments online. Features include user authentication, doctor profiles, appointment scheduling, and notifications. Designed to streamline the booking process and improve patient-doctor interactions.',
        stack: [
            { name: 'MongoDB' },
            { name: 'Express.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/doctor.png',
        live: '',
        github: 'https://github.com/abhijithp327/Doctor-appointment-booking-app',
    },
    {
        num: '04',
        category: 'MERN Development',
        title: 'Tour Booking Web App',
        description: 'A full-featured MERN stack application for booking tours and travel packages online. Features include user registration, tour catalog, booking management, payment integration, and user reviews. Designed to offer a seamless experience for users to discover and book their next adventure.',
        stack: [
            { name: 'MongoDB' },
            { name: 'Express.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/tour.png',
        live: 'https://tour-mangement-app.vercel.app/home',
        github: 'https://github.com/abhijithp327/Tour-Mangement-App',
    },
    {
        num: '05',
        category: 'MERN Development',
        title: 'Digitic E-commerce - User Side',
        description: 'The user side of the Digitic E-commerce platform, designed to deliver a seamless shopping experience. It features a responsive product catalog, easy navigation, shopping cart, and an efficient checkout process.',
        stack: [
            { name: 'MongoDB' },
            { name: 'Express.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/digitic.png',
        live: '',
        github: 'https://github.com/abhijithp327/Ecommerce-Admin-Website',
    },
    {
        num: '06',
        category: 'MERN Development',
        title: 'Digitic E-commerce - Admin Side',
        description: 'The admin interface of the Digitic E-commerce platform, built to manage products, orders, and users efficiently. Features include a comprehensive admin dashboard, product management, order tracking, and user administration.',
        stack: [
            { name: 'MongoDB' },
            { name: 'Express.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/admin1.png',
        live: '',
        github: 'https://github.com/abhijithp327/Ecommerce-Admin-Website',
    },
    {
        num: '07',
        category: 'MERN Development',
        title: 'Food Delivery App',
        description: 'A robust MERN stack application for managing food deliveries. It includes features such as user authentication, restaurant and menu management, order placement, real-time order tracking, and payment integration.',
        stack: [
            { name: 'MongoDB' },
            { name: 'Express.js' },
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/foodapp.png',
        live: '',
        github: 'https://github.com/abhijithp327/Food-delivery-webapp',
    },

]

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-outline text-transparent">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            <p className="text-white/60">{project.description}</p>
                            <div className="flex flex-col gap-2">
                                {/* Stack display */}
                                <ul className="flex flex-wrap gap-4">
                                    {project.stack.slice(0, 3).map((item, index) => (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== 2 && ','} {/* Add comma between items, except after the last one */}
                                        </li>
                                    ))}
                                </ul>
                                {/* Additional stack items */}
                                {project.stack.length > 3 && (
                                    <ul className="flex flex-wrap gap-4 mt-2">
                                        {project.stack.slice(3).map((item, index) => (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 4 && ','} {/* Add comma between items, except after the last one */}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                fill className="object-cover"
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;

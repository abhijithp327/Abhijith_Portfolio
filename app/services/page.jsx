"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: '01',
        title: 'Full-Stack Web Development',
        description: 'Building responsive and scalable web applications using MongoDB, Express, React, and Node.js.',
        href: 'https://www.google.com/search?q=Full-Stack+Web+Development+using+MERN+stack'
    },
    {
        num: '02',
        title: 'API Development & Integration',
        description: 'Designing and implementing RESTful APIs with Node.js and Express, integrating third-party services.',
        href: 'https://www.google.com/search?q=API+Development+and+Integration+with+Node.js+and+Express'
    },
    {
        num: '03',
        title: 'Front-End Development',
        description: 'Creating dynamic and user-friendly interfaces with React, Redux, NextJs, and Tailwind CSS for seamless user experiences.',
        href: 'https://www.google.com/search?q=Front-End+Development+with+React+and+Redux'
    },
    {
        num: '04',
        title: 'Backend Development',
        description: 'Developing robust server-side applications using Node.js, Express, and MongoDB for efficient data handling and processing.',
        href: 'https://www.google.com/search?q=Backend+Development+using+Node.js+and+MongoDB'
    },
];



const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/* Top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;
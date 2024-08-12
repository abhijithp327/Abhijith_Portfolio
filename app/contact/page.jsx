"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";


import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [

    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+91) 7510720805',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'abhijithp327@gmail.com',
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        description: 'Kochi,India',
    },
]


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form  */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                I'm always excited to collaborate on new projects and bring innovative ideas to life. Whether you have a specific vision or need guidance to turn your concept into reality, I'm here to help. Let's connect and create something amazing together. Your project deserves the best, and I’m ready to deliver just that.
                            </p>
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First Name" />
                                <Input type="lastname" placeholder="Last Name" />
                                <Input type="email" placeholder="Email Address" />
                                <Input type="phone" placeholder="Phone Number" />
                            </div> */}
                            {/* select */}
                            {/* <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a Service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a Service</SelectLabel>
                                        <SelectItem value="est">Front End Development</SelectItem>
                                        <SelectItem value="cst">Back End Stack Development</SelectItem>
                                        <SelectItem value="cst">Full Stack Development</SelectItem>
                                        <SelectItem value="mst">Custom Web Solutions</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}
                            {/* textarea */}
                            {/* <Textarea className="h-[200px]" placeholder="Type your message here..." /> */}
                            {/* btn */}
                            <Button
                                size=""
                                className="max-w-40"
                                onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=abhijithp327@gmail.com", "_blank")}
                            >
                                Send Message
                            </Button>

                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end xl:order-1 xl:order mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
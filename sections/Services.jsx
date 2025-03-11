

import Heading from "../assets/svg/Heading";
import { chaiwaaiServices } from "../constants";
import Section from "./Section";
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Heading title="Franchise" text="Want to collaborate with us? Reach out to us!" />
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex z-1 items-center h-[39rem] mb-5 p-8 border border-neutral-200 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
                    >
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img src="/chai.png" className="w-full h-full object-cover md:object-right" width={800} height={730} alt="Chai" />
                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="text-[2rem] font-bold text-yellow-500 font-serif leading-normal mb-4">Chaiwaai</h4>
                            <p className="font-semibold text-amber-500 body-2 mb-[3rem]">We are looking for similar minded people to collaborate with us and make this vision into a reality. If you are interested do reach out to us!, We&apos;d be glad to hear you out!</p>
                            <ul className="body-2 text-amber-500">
                                {chaiwaaiServices.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        className="flex items-start py-4 border-t border-amber-500"
                                    >
                                        <img src="/tick1.svg" width={20} height={20} alt="tick" />
                                        <p className="ml-2">{item}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="relative min-h-[39rem] border border-green-500 rounded-3xl overflow-hidden"
                        >
                            <img src="/menu.png" className="h-full w-full object-cover" width={630} height={750} alt="menu" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-t from-black/50 to-transparent">
                                <h4 className="text-[2rem] font-bold text-yellow-500 font-serif leading-normal mb-4">Where Chai-ship matters.</h4>
                                <p className="font-semibold text-amber-500 body-2 mb-[3rem]">Visit us and create your Chai-ship moments!</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="p-4 bg-white rounded-3xl overflow-hidden lg:min-h-[46rem]"
                        >
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="text-[2rem] font-bold font-serif leading-normal mb-4">Community</h4>
                                <p className="body-2 mb-[2rem]">A diverse community sharing their thoughts and blogs on tea! What are your thoughts? We&apos;d love to know!</p>
                                <ul className="flex items-center justify-between">
                                    <li className="flex items-center justify-between">
                                        <div className="flex items-center justify-center bg-conic-gradient rounded-2xl md:h-[4rem] gap-5">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                src="/facebook.svg"
                                                width={40}
                                                height={40}
                                                alt="facebook"
                                            />
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                src="/twitter.svg"
                                                width={40}
                                                height={40}
                                                alt="twitter"
                                            />
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                src="/instagram.svg"
                                                width={40}
                                                height={40}
                                                alt="instagram"
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative h-[20rem] rounded-xl overflow-hidden md:h-[25rem]">
                                <img src="/comm.png" className="w-full h-full object-cover rounded-3xl" width={520} height={400} alt="community" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
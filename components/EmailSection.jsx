import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const EmailSection = () => { 

    const handleCopy = () => {
        navigator.clipboard.writeText('slim12252@gmail.com');
        // Show copied popup
        alert('Email copied!');
    };

    return (
        <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
            <div className="z-10">
                <h5 className="text-4xl font-bold my-2 text-black">Let's Connect</h5>
                <p className="text-black mb-4 max-w-md mt-8 text-justify">
                    I'm currently looking for new opportunities, my inbox is always open. Do hit me up if you have any questions or just want to say hi! I'll try my best to get back to you!
                </p>
                <h4 className="pb-3 mt-6 text-black font-semibold">Let's get in touch!</h4>
                <div className="flex flex-row gap-4 mt-6">
                    <Link href="https://github.com/ShaunLim08" target="_blank" className="text-2xl text-gray-600">
                        <FaGithub />
                    </Link>
                    <Link href="https://www.linkedin.com/in/shaun-lim-bb563b222/" target="_blank" className="text-2xl text-gray-600">
                        <FaLinkedin />
                    </Link>
                    <Link href="https://www.instagram.com/_shaun_shaun_shaun_/" target="_blank" className="text-2xl text-gray-600">
                        <FaInstagram />
                    </Link>
                    <div className="text-2xl cursor-pointer text-gray-600" onClick={handleCopy}>
                        <FaEnvelope />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EmailSection;
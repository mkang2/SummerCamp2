import React from 'react';
//import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/20/solid';
function Footer() {
    return (
        <footer className="bg-yellow-100 py-6 px-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 items-center">
                <div className="md:pl-24 space-y-2">
                    <div className="flex items-center space-x-4">
                        <img src="/Logo.png" alt="Calvary Logo" className="h-8 w-auto" />
                        <span className="font-bold text-xl">Calvary Summer Camp</span>
                    </div>
                    <p className="text-gray-600 text-sm md:pl-12">
                        © 2024 Calvary KUMC. All rights reserved
                    </p>
                </div>
                <div className="text-gray-700 text-sm space-y-1 md:pt-8">
                    <div className='text-lg font-bold'>Contact Us</div>
                    <div className='flex'><PhoneIcon className='text-black w-5 h-5 mr-2' /> (917) 282-5706; (908) 930-6483</div>
                    <div className='flex'><EnvelopeIcon className='text-black w-5 h-5 mr-2' /> calvarykumc.summercamp@gmail.com</div>
                    <div className='flex'> <MapPinIcon className='text-black w-5 h-5 mr-2' />572 Ryders Lane, East Brunswick, NJ 08816</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

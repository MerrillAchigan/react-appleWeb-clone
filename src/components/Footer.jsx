import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
   <footer className='py-5 sm:px-10 px-5'>
        <div className='screen-max-width'>
            <div>
                <p className='font-semibold text-gray-600 text-xs'>More ways to shop: {' '}
                    <span className='underline text-blue-700'>
                         Find an apple store {' '}
                    </span>
                    or {' '}
                    <span className='underline text-blue-700'>
                         other retailer
                    </span>  {' '}
                    near you.
                </p>
                <p className='font-semibold text-gray-600 text-xs'>Or Call 0022-9913-2336-8 {' '}

                </p>
            </div>
            <div className='bg-neutral-800 my-5 h-[1px] w-full'>
                <div className='flex md:flex-row flex-col md:items-center justify-between'>
                    <p className='font-semibold text-gray-600 text-xs'>Copyright ©️ 2025 Juicee Inc. All rights reserved</p>
                    <div className='flex'>
                        {footerLinks.map((link, i) => (
                            <a key={link} className='font-semibold text-gray-600 text-xs'>{link} {' '}
                                {i !== footerLinks.length -1 && <span className='mx-2 text-gray-400'>|</span>}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
   </footer>
  )
}

export default Footer
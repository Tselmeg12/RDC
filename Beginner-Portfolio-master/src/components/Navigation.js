import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#002A51',
      }}
      className="font-sans fixed top-0 w-screen z-40"
    >
      <div className="text-left py-5">
        <ScrollLink to="header" smooth={true}className="text-3xl  font-bold text-white flex-1 cursor-pointer">
          <h1>
            {content.nav.logo}
            <span className="h-3 w-3 bg-red-400 inline-block ml-2  rounded-full"></span>
          </h1>
        </ScrollLink>

     </div>
        <div className="text-center py-5">
       
       
       <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-10 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

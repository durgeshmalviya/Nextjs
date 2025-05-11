"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.scss"; // Import custom SCSS

export default function PageSP() {
    const [isMounted, setIsMounted] = useState(false);
    const bodyRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    useEffect(() => {
      if (isMounted) {
        const script = document.createElement('script');
        script.innerHTML = `
          var swiper = new Swiper(".swiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true
            },
            keyboard: {
              enabled: true
            },
            mousewheel: {
              thresholdDelta: 70
            },
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            breakpoints: {
              640: {
                slidesPerView: 2
              },
              768: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 2
              },
              1560: {
                slidesPerView: 3
              }
            }
          });
        `;
        document.body.appendChild(script);
      }
    }, [isMounted]);
  
    if (!isMounted) {
      return null;
    }
  
  return (
     <><main>
     <div>
       <span>GULFPORT, FL</span>
       <h1>Salty Pelican Boat Tours</h1>
       <hr/>
       <p>Beauty and mystery are hidden in the beautiful waters that surround the St. Petersburg and Tampa regions. Explore, learn, and let yourself go with daily departures & private charters upon request.</p>
       <a href="#">CHECK AVAILABILITY</a>
     </div>
     <div className="swiper">
       <div className="swiper-wrapper">
         <div className="swiper-slide swiper-slide--one">
           <div>
             <h2>Jellyfish</h2>
             <p>Jellyfish and sea jellies are the informal common names given to the medusa-phase of certain gelatinous members of the subphylum Medusozoa, a major part of the phylum Cnidaria.</p>
             <a href="https://en.wikipedia.org/wiki/Jellyfish" target="_blank">explore</a>
           </div>
         </div>
         <div className="swiper-slide swiper-slide--two">
           <div>
             <h2>Seahorse</h2>
             <p>
               Experience the magic of a Florida sunset like never before on our daily Sunset Cruise. Departing from St. Petersburg, this 90-minute excursion offers the perfect vantage point to witness the breathtaking hues of the setting sun reflecting off the tranquil waters. Join us aboard to find that sweet spot where sky meets sea in a spectacular display of color and light.
             </p>
             <a href="https://cdn.prod.website-files.com/67646bc27cd171f4f4446754/67648015fb1098364eaba017_dolpins-950x650-salty-pelican-banners-021.jpg" target="_blank">explore</a>
           </div>
         </div>
   
         <div className="swiper-slide swiper-slide--three">
   
           <div>
             <h2>octopus</h2>
             <p>
               Octopuses inhabit various regions of the ocean, including coral reefs, pelagic waters, and the seabed; some live in the intertidal zone and others at abyssal depths. Most species grow quickly, mature early, and are short-lived.
             </p>
             <a href="https://en.wikipedia.org/wiki/Octopus" target="_blank">explore</a>
           </div>
         </div>
   
         <div className="swiper-slide swiper-slide--four">
   
           <div>
             <h2>Shark</h2>
             <p>
               Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head.
             </p>
             <a href="https://en.wikipedia.org/wiki/Shark" target="_blank">explore</a>
           </div>
         </div>
   
         <div className="swiper-slide swiper-slide--five">
   
           <div>
             <h2>Dolphin</h2>
             <p>
               Dolphins are widespread. Most species prefer the warm waters of the tropic zones, but some, such as the right whale dolphin, prefer colder climates. Dolphins feed largely on fish and squid, but a few, such as the orca, feed on large mammals such as seals.
             </p>
             <a href="https://en.wikipedia.org/wiki/Dolphin" target="_blank">explore</a>
           </div>
         </div>
       </div>
 
       <div className="swiper-pagination"></div>
     </div>
     <img src="https://cdn.pixabay.com/photo/2021/11/04/19/39/jellyfish-6769173_960_720.png" alt="" className="bg"/>
     <img src="https://cdn.pixabay.com/photo/2012/04/13/13/57/scallop-32506_960_720.png" alt="" className="bg2"/>
   </main></>
  );
}

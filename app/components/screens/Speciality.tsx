"use client";
// import React, { useEffect, useRef, useState } from "react";
// import CountUp from "react-countup";

// const Speciality = () => {
//   const counterRefs = useRef<HTMLDivElement[]>([]);
//   const [isVisible, setIsVisible] = useState(false);

//   const handleIntersection = (
//     entries: IntersectionObserverEntry[],
//     observer: IntersectionObserver
//   ) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const index = counterRefs.current.indexOf(
//           entry.target as HTMLDivElement
//         );
//         setIsVisible(index !== -1);
//         observer.unobserve(entry.target);
//       }
//     });
//   };

//   useEffect(() => {
//     const options = {
//       threshold: 0.25,
//     };

//     const observer = new IntersectionObserver(handleIntersection, options);

//     counterRefs.current.forEach((ref) => {
//       observer.observe(ref);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <section className="bg-neutral-900 py-16">
//       <h1 className="text-center text-3xl font-bold pb-10 text-cyan-500">
//         Our specialties
//       </h1>
//       <div className="hidden lg:block">
//         <div className="flex flex-wrap justify-center items-center gap-20">
//           <div
//             ref={(el) => (counterRefs.current[0] = el as HTMLDivElement)}
//             className="counter"
//           >
//             <div className="w-64 h-64 rounded-full bg-teal-700 flex flex-col items-center justify-center circle">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={1000} duration={2} delay={0} />
//                   </h1>
//                   {isVisible && (
//                     <span className="text-3xl font-semibold">+</span>
//                   )}
//                 </div>
//               )}
//               <p className="text-2xl">Students</p>
//             </div>
//           </div>
//           <div className="w-64 h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle">
//             <div className="">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={80} duration={2} delay={0} />
//                   </h1>
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Faculty</p>
//             </div>
//           </div>
//           <div className="w-64 h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle">
//             <div className="">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={65} duration={2} delay={0} />
//                   </h1>
//                   {isVisible && (
//                     <span className="text-3xl font-semibold">+</span>
//                   )}
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Experience</p>
//             </div>
//           </div>
//           <div className="w-64 h-64 rounded-full bg-teal-700 flex flex-col items-center justify-center circle">
//             <div>
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={200} duration={2} delay={0} />
//                   </h1>
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Alumni</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="block lg:hidden">
//         <div className="flex flex-wrap justify-center items-center gap-5">
//           <div
//             ref={(el) => (counterRefs.current[0] = el as HTMLDivElement)}
//             className="counter"
//           >
//             <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle mb-5">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={1000} duration={2} delay={0} />
//                   </h1>
//                   {isVisible && (
//                     <span className="text-3xl font-semibold">+</span>
//                   )}
//                 </div>
//               )}
//               <p className="text-2xl">Students</p>
//             </div>
//           </div>
//           <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle">
//             <div className="">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={80} duration={2} delay={0} />
//                   </h1>
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Faculty</p>
//             </div>
//           </div>
//           <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle">
//             <div className="">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={65} duration={2} delay={0} />
//                   </h1>
//                   {isVisible && (
//                     <span className="text-3xl font-semibold">+</span>
//                   )}
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Experience</p>
//             </div>
//           </div>
//           <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle">
//             <div className="">
//               {isVisible && (
//                 <div className="flex items-center">
//                   <h1 className="text-4xl">
//                     <CountUp start={0} end={200} duration={2} delay={0} />
//                   </h1>
//                 </div>
//               )}
//             </div>
//             <div>
//               <p className="text-2xl">Alumni</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Speciality;

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Specialites: React.FC = () => {
  const counterRefs = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleIntersection: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    counterRefs.current.forEach((ref) => {
      if (ref) {
        // Check if ref is not null before observing
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-neutral-900 py-16">
      <div className="special-head">
        <h1 className="text-center text-3xl font-bold pb-10 text-cyan-500">
          Our specialties
        </h1>
      </div>
      <div className="specialites-wrapper">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div
            ref={(el) => el && (counterRefs.current[3] = el)}
            className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle"
          >
            <div className="">
              {isVisible && (
                <div className="flex items-center">
                  <h1 className="text-4xl">
                    {isVisible && (
                      <CountUp start={0} end={1000} duration={2} delay={0} />
                    )}
                    {isVisible && <span>+</span>}
                  </h1>
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl">Students</p>
            </div>
          </div>
          <div
            ref={(el) => el && (counterRefs.current[3] = el)}
            className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle"
          >
            <div className="">
              {isVisible && (
                <div className="flex items-center">
                  <h1 className="text-4xl">
                    {isVisible && (
                      <CountUp start={0} end={80} duration={2} delay={0} />
                    )}
                  </h1>
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl">Faculty</p>
            </div>
          </div>
          <div
            ref={(el) => el && (counterRefs.current[3] = el)}
            className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle"
          >
            <div className="">
              {isVisible && (
                <div className="flex items-center">
                  <h1 className="text-4xl">
                    {isVisible && (
                      <CountUp start={0} end={65} duration={2} delay={0} />
                    )}
                    {isVisible && <span>+</span>}
                  </h1>
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl">Experience</p>
            </div>
          </div>

          <div
            ref={(el) => el && (counterRefs.current[3] = el)}
            className="w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-teal-700  flex flex-col items-center justify-center circle"
          >
            <div className="">
              {isVisible && (
                <div className="flex items-center">
                  <h1 className="text-4xl">
                    {isVisible && (
                      <CountUp start={0} end={200} duration={2} delay={0} />
                    )}
                  </h1>
                </div>
              )}
            </div>
            <div>
              <p className="text-2xl">Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialites;

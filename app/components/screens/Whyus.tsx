// import Image from "next/image";

// export default function Whyus() {
//   return (
//     <section className="whyus_section">
//       <div className="whyus_wrapper">
//         <div className="why_lf">
//           <h1 className="text-center text-3xl text-orange font-bold pb-10 text-shadow-orange">
//             Why Little Flower
//           </h1>
//         </div>
//         <div className="whyus_container">
//           <div className="whyus_item">
//             <Image src="/icons/cap.png" width={100} height={100} alt="img" />
//             <span>
//               <p>Academic support</p>
//             </span>
//           </div>
//           <div className="whyus_item">
//             <Image src="/icons/cpu.png" width={100} height={100} alt="img" />
//             <span>
//               <p>Integrated learning</p>
//             </span>
//           </div>
//           <div className="whyus_item">
//             <Image
//               src="/icons/problem.png"
//               width={100}
//               height={100}
//               alt="img"
//             />
//             <span>
//               <p>Problem solving</p>
//             </span>
//           </div>
//           <div className="whyus_item">
//             <Image src="/icons/sports.png" width={100} height={100} alt="img" />
//             <span>
//               <p>Holistic activities</p>
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function WhyUs() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-16 bg-neutral-900 px-4">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-500 mb-4 lg:mb-6">
          Why Little Flower
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5 }}
          className="card w-full md:w-1/2 lg:w-1/4 xl:w-1/5 bg-teal-700 rounded-md"
        >
          <Image
            src="/images/sports1.jpg"
            alt="Card 1"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <div className="card-content p-4">
            <h2 className="text-lg font-bold mb-2">Academic Excellence</h2>
            <p className="text-gray-200">
              We are committed to delivering the highest standards of academic
              excellence through innovative teaching methods and rigorous
              curriculum.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card w-full md:w-1/2 lg:w-1/4 xl:w-1/5 bg-teal-700 rounded-md"
        >
          <Image
            src="/images/sports1.jpg"
            alt="Card 2"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <div className="card-content p-4">
            <h2 className="text-lg font-bold mb-2">Holistic Development</h2>
            <p className="text-gray-200">
              We prioritize holistic development, nurturing the physical,
              emotional, and intellectual well-being of every student.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card w-full md:w-1/2 lg:w-1/4 xl:w-1/5 bg-teal-700 rounded-md"
        >
          <Image
            src="/images/sports1.jpg"
            alt="Card 3"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <div className="card-content p-4">
            <h2 className="text-lg font-bold mb-2">Dedicated Faculty</h2>
            <p className="text-gray-200">
              Our team of dedicated teachers are passionate about student
              success, guiding and inspiring students to reach their full
              potential.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card w-full md:w-1/2 lg:w-1/4 xl:w-1/5 bg-teal-700 rounded-md"
        >
          <Image
            src="/images/sports1.jpg"
            alt="Card 3"
            width={400}
            height={250}
            className="rounded-lg"
          />
          <div className="card-content p-4">
            <h2 className="text-lg font-bold mb-2">Dedicated Faculty</h2>
            <p className="text-gray-200">
              Our team of dedicated teachers are passionate about student
              success, guiding and inspiring students to reach their full
              potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

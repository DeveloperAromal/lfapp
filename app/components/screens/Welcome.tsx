// import Image from "next/image";
// import Link from "next/link";

// export default function Wecome() {
//   return (
//     <section className="welcome">
//       <div className="flex gap-10 py-20 flex-wrap items-center justify-center">
//         <div>
//           <Image
//             src="/images/school.jpg"
//             alt="logo"
//             width={600}
//             height={600}
//             className="rounded-2xl hidden lg:block"
//           />
//           <Image
//             src="/images/school.jpg"
//             alt="logo"
//             width={640}
//             height={640}
//             className="rounded-2xl p-4 block lg:hidden"
//           />
//         </div>
//         <div>
//           <div>
//             <h1 className="welcome-head text-center text-3xl font-bold text-orange text-shadow-orange">
//               Welcome to our school
//             </h1>
//             <p className="welcome-para max-w-screen-sm text-justify text-xl text-white hidden lg:block">
//               We Little Flower English Medium Higher Secondary School, nestled
//               in Edava, Thiruvananthapuram, Kerala, is committed to delivering
//               academic excellence. Our dedicated teachers prioritize
//               child-centered learning, nurturing a strong foundation for
//               holistic development. Guiding students through a seamless
//               transition from childhood to adolescence, we enrich their
//               education. With a rich history spanning 65 years, our institution
//               stands out for its commitment to student success. Our stimulating
//               and inclusive environment encourages curiosity, critical thinking,
//               and personal growth. Offering a diverse array of dynamic programs
//               and extracurricular activities, we cater to the unique talents of
//               our students, ensuring an exceptional educational journey
//             </p>
//             <p className="welcome-para max-w-screen-sm text-justify text-small text-white mx-4 block lg:hidden">
//               We Little Flower English Medium Higher Secondary School, nestled
//               in Edava, Thiruvananthapuram, Kerala, is committed to delivering
//               academic excellence. Our dedicated teachers prioritize
//               child-centered learning, nurturing a strong foundation for
//               holistic development. Guiding students through a seamless
//               transition from childhood to adolescence, we enrich their
//               education.
//             </p>
//             <Link href="/about">
//               <button className="bg-orange rounded-2xl px-5 mt-8 p-2 hidden lg:block">
//                 Read more
//               </button>
//             </Link>
//             <div className="flex items-center justify-center">
//               <Link href="/about">
//                 <button className="welcome-button bg-orange rounded-2xl px-5 p-2 block lg:hidden">
//                   Read more
//                 </button>
//               </Link>
//             </div>
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

export default function Welcome() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="welcome">
      <div className="flex gap-10 py-20 flex-wrap items-center justify-center">
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.5 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/school_mod.jpg"
              alt="logo"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="welcome-head text-center text-2xl md:text-3xl font-bold text-cyan-500 mb-4 lg:mb-6">
                Welcome to Our School
              </h1>
              <div className="w-64 h-64 rounded-md bg-cyan-100 filter-blur absolute -z-10">.</div>
              <p className="welcome-para max-w-screen-md text-center text-lg lg:text-md lg:px-4 mb-6">
                Welcome to Little Flower English Medium Higher Secondary School! Nestled in the serene locale of Edava, Thiruvananthapuram, Kerala, we are dedicated to delivering academic excellence. Guided by our committed teachers, we prioritize child-centered learning and holistic development, enriching the educational journey of every student.
              </p>
              <div className="flex items-center justify-center">
                <Link href="/about">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="welcome-button bg-cyan-500 rounded-md px-8 py-3 text-lg hover:bg-cyan-600 transition duration-300 ease-in-out"
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

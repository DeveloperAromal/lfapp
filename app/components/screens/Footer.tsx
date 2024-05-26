import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faDiscord,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl text-center font-semibold">Quick Links</h2>
          <ul className="mt-2 flex items-center justify-center">
            <div>
              <li className="text-center">
                <Link href="/">Home</Link>
              </li>
              <li className="text-center">
                <Link href="/about">About Us</Link>
              </li>
              <li className="text-center">
                <Link href="/contact">Contact Us</Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-center">Follow Us</h2>
          <ul className="mt-2 flex gap-4">
            <li>
              <FontAwesomeIcon
                icon={faYoutube}
                className="w-8 h-8 hover:text-red-700"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-8 h-8 hover:text-blue-400"
              />
            </li>
            <div>
              <Link href="https://www.instagram.com/lfem_hss/">
                <li className="hover:bg-gradient-to-br hover:from-pink-500 hover:to-yellow-500 rounded-lg ">
                  <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
                </li>
              </Link>
            </div>
            <div>
              <Link href="https://www.facebook.com/people/Little-Flower-English-Medium-Higher-Secondary-School-Edava-Official/100057068126083/">
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-8 h-8  hover:text-blue-500"
                  />
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-center  font-semibold">Contact Info</h2>
          <div className="flex items-center justify-center">
            <div>
              <p className="mt-2 text-center">123 Street Name, City</p>
              <p className="text-center">info@example.com</p>
              <p className="text-center">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <div>
          <p className="text-center ">
            Created and developed by{" "}
            <span className="text-purple-500">
              <Link href="https://devaromal.vercel.app" target="blank">
                developer Aromal
              </Link>
            </span>{" "}
            All Rights Reserved&copy;
          </p>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div>
  <p className="text-center py-10">
    Created and developed by{" "}
    <span className="text-purple-500">
      <Link href="https://devaromal.vercel.app" target="blank">
        developer Aromal
      </Link>
    </span>{" "}
    All Rights Reserved&copy;
  </p>
</div>; */
}

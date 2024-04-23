import { FaCalendarDays } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import Image from 'next/image';
import { cardAnimalImg1, LionImg, meerkatImg } from '@/lib/images';
import AsidebarBlog from '@/components/ui/asidebar-blog';
export default function AnimalDescribe() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        <main>
          <div>
            <h1 className="font-medium">
              {`North America > Canada > `}
              <span className="font-bold">
                Meet The Animals Of Lion King In Real Life
              </span>
            </h1>
            <div className="border-b-[3px]  border-[#008ebe] w-[280px] my-2"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-extrabold">
              Meet The Animals Of Lion King In Real Life
            </h1>
            <div className="flex italic  items-center gap-5 my-4">
              <div className="flex gap-2">
                <span className="flex items-center gap-2">
                  <div className="w-7 h-7 text-[#008ebe] rounded-[8px] border bg-white flex justify-center items-center">
                    <FaCalendarDays className="" />
                  </div>
                  <h2>dd/mm/yyyy</h2>
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-7 text-[#008ebe] h-7 rounded-[8px] border bg-white flex justify-center items-center">
                    <FaClock />
                  </div>
                  <h2>00/00 am</h2>
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-7 text-[#008ebe] h-7 rounded-[8px] border bg-white flex justify-center items-center">
                    <FaComment />
                  </div>

                  <h2>Comments (12)</h2>
                </span>
              </div>
              <div>
                <div className="flex flex-wrap gap-2">
                  <div className="w-[40px] h-[40px] text-[24px]  rounded-[50%] text-[#008EBE] border border-[#008EBE] flex items-center justify-center">
                    <FaFacebookF />
                  </div>

                  <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE] border border-[#008EBE] flex items-center justify-center">
                    <IoLogoInstagram />
                  </div>
                  <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE] border  border-[#008EBE]  flex items-center justify-center">
                    <FaLinkedinIn />
                  </div>
                  <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE] border border-[#008EBE] flex items-center justify-center">
                    <FaXTwitter />
                  </div>
                  <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE] border border-[#008EBE]  flex items-center justify-center">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <Image src={LionImg} alt="animal" className="object-cover" />
              <p>
                Released in 1994, Disney’s The Lion King is a cinematic
                masterpiece that continues to captivate audiences of all age
                groups. With its captivating story, memorable characters, and
                fantastic animation, the film introduced us to the majestic
                African savannah and its vibrant wildlife. But how well do you
                know the real-life counterparts of these iconic movie
                characters?
                <br />
                <br />
                In this blog, we’ll explore the incredible animals from The Lion
                King and their real-world doubles. So let’s embark on a journey
                through the Pride Lands and beyond, where HAKUNA MATATA is a way
                of life.
              </p>
              <h1 className="text-4xl font-extrabold my-3">Lions</h1>
              <p>
                In the movie: Lions are the undisputed rulers of the Pride Lands
                in The Lion King, with characters like Mufasa, Simba (Mufasa’s
                son), Sarabi (Mufasa’s wife), and Scar (Musafa’s brother & the
                antago -nist) playing pivotal roles.
                <br />
                <br />
                In real life: Lions, known as the ‘King of Animals’, are the
                only social cats in the animal kingdom. These apex predators
                belong to the Felidae family, which ideally makes them the
                relatives of your domesticated house cat. Boasting majestic
                manes and powerful roars, they truly deserve the title of the
                Savannah’s king. While their portrayal of lions in the movie is
                mostly accurate, they are currently considered vulnerable, as
                per the red list of the International Union for Conservation of
                Nature (IUCN).
              </p>
            </div>
            {/*  */}
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-extrabold my-3">Meerkat</h1>
              <Image src={meerkatImg} alt="animal" className="object-cover" />
              <p>
                In the movie: Lions are the undisputed rulers of the Pride Lands
                in The Lion King, with characters like Mufasa, Simba (Mufasa’s
                son), Sarabi (Mufasa’s wife), and Scar (Musafa’s brother & the
                antago -nist) playing pivotal roles.
                <br />
                <br />
                In real life: Lions, known as the ‘King of Animals’, are the
                only social cats in the animal kingdom. These apex predators
                belong to the Felidae family, which ideally makes them the
                relatives of your domesticated house cat. Boasting majestic
                manes and powerful roars, they truly deserve the title of the
                Savannah’s king. While their portrayal of lions in the movie is
                mostly accurate, they are currently considered vulnerable, as
                per the red list of the International Union for Conservation of
                Nature (IUCN).
              </p>
            </div>
          </div>
        </main>
        <AsidebarBlog />
      </div>
    </>
  );
}

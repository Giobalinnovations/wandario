import { asideImg, cardAnimalImg1 } from '@/lib/images';
import { GoSearch } from 'react-icons/go';
import Image from 'next/image';
import LinkButton from './link-button';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import CardAnimal from './card-animal';

export default function AsidebarBlog() {
  return (
    <>
      <aside>
        <div>
          <Image src={asideImg} alt="animal" className="object-cover" />
          <form className=" relative border rounded-[80px]">
            <div className="flex items-center justify-center">
              <GoSearch className="absolute left-2 text-[#008EBE] font-bold" />
              <input
                type="search"
                id="search"
                placeholder=""
                className=" h-[50px] border-none outline-none bg-transparent px-10  rounded-[80px] outline-[#008EBE] w-full"
              />
              <LinkButton
                href="/#"
                text="Search"
                className="absolute -right-1 border-none bg-[#008EBE]
                text-white rounded-[80px] py-7 px-14"
              />
            </div>
          </form>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-[26px] font-medium">Stay Connected</h1>
              <div className="border-b-[3px]  border-[#008ebe] w-[210px] my-2"></div>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="w-[40px] h-[40px] text-[24px] bg-white  rounded-[50%] text-[#008EBE]  border-[#008EBE] flex items-center justify-center">
                <FaFacebookF />
              </div>

              <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE]  border-[#008EBE] flex items-center justify-center">
                <IoLogoInstagram />
              </div>
              <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE]  border-[#008EBE]  flex items-center justify-center">
                <FaLinkedinIn />
              </div>
              <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE]  border-[#008EBE] flex items-center justify-center">
                <FaXTwitter />
              </div>
              <div className="w-[40px] h-[40px] text-[24px] bg-white rounded-[50%] text-[#008EBE]  border-[#008EBE]  flex items-center justify-center">
                <FaPinterestP />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Meet The Animals Of Lion King In Real Life"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Meet The Animals Of Lion King In Real Life"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Meet The Animals Of Lion King In Real Life"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
          <CardAnimal
            imgSrc={cardAnimalImg1}
            title="Meet The Animals Of Lion King In Real Life"
            paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            date="dd/mm/yyyy"
            time="00/00 am"
            comments="Comments (12)"
          />
        </div> */}
      </aside>
    </>
  );
}

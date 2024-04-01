import {
  dishImg,
  foodImg,
  instagramIcon,
  logo,
  placesImg,
  soloTripsImg,
} from '@/lib/images';
import Logo from './logo';
import Image from 'next/image';
import Link from 'next/link';
import Section from './section';
import Wrapper from './wrapper';

export default function Footer() {
  return (
    <footer className="bg-[url(../../public/assets/images/footer/footer-bg.png)] object-cover  text-white">
      <Section>
        <Wrapper>
          <div className="flex justify-center flex-wrap  items-start lg:flex">
            {/* logo */}
            <div className="flex gap-8 flex-col ">
              <div>
                <Logo imgSrc={logo} />
              </div>
              <p className="w-[377px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`}</p>

              <div>
                <div className="w-[42px] h-[42px] rounded-[50%] border flex items-center justify-center">
                  <Image src={instagramIcon} alt="logo" />
                </div>
              </div>
            </div>
            {/* quick links */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-[700]">Quick Links</h1>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Travel Tips & Guide</Link>
              <Link href={'#'}>Destinations</Link>
              <Link href={'#'}>Photography</Link>
              <Link href={'#'}>Accommodations</Link>
              <Link href={'#'}>Resources</Link>
              <Link href={'#'}>Contact Us</Link>
            </div>
            <div className="flex flex-col gap-[50px]">
              <aside className="flex  items-start gap-8">
                {/* web stories */}
                <div>
                  <h1 className="text-[22px] font-[700]">Web Stories</h1>
                  <div className="flex flex-wrap gap-2 my-2 w-[200px]">
                    <div className="flex flex-col my-2 items-center">
                      <Image
                        src={soloTripsImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">Solo trips</h4>
                    </div>

                    <div className="flex flex-col my-2 items-center">
                      <Image
                        src={placesImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">4 places to..</h4>
                    </div>

                    <div className="flex flex-col my-2 items-center">
                      <Image
                        src={foodImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">3 food trips</h4>
                    </div>

                    <div className="flex flex-col my-2 items-center">
                      <Image
                        src={dishImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">3 dishes</h4>
                    </div>
                  </div>
                </div>
                {/* support */}
                <div className="flex flex-col gap-2">
                  <h1 className="text-[22px] font-[700]">Support</h1>
                  <Link href={'#'}>Terms & Condition</Link>
                  <Link href={'#'}>Privacy Policy</Link>
                  <Link href={'#'}>Legal Information</Link>
                  <Link href={'#'}>Disclaimer</Link>
                  <Link href={'#'}>Affiliate Disclosure</Link>
                </div>
              </aside>
              {/* search bar */}
              <div>
                <h1 className="mb-4 font-[700] text-[22px]">
                  Subscribe To Our Newsletter
                </h1>
                <form className="flex relative ">
                  <input
                    type="search"
                    id="search"
                    placeholder="Enter email id"
                    className="w-[484px] h-[50px] border bg-transparent   rounded-[100px] px-3"
                  />
                  <button
                    type="submit"
                    className="absolute right-0  w-[162px] h-[50px] bg-[#ffff] rounded-[100px] font-[600] text-[18px] text-[#008EBE]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
      <div className="mb-7">
        <div className="border-[#008EBE] border w-full"></div>
        <h1 className="font-[400] text-[20px] text-center mt-5">
          Copyright © 2023 Travel View Guide All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
}

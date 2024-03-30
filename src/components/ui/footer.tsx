import { instagramIcon, logo, soloTripsImg } from '@/lib/images';
import Logo from './logo';
import Image from 'next/image';
import Link from 'next/link';
import Section from './section';
import Wrapper from './wrapper';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Section>
        <Wrapper>
          <div className="flex">
            {/* logo */}
            <div>
              <div>
                <Logo imgSrc={logo} />
              </div>
              <p className="w-[377px]">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`}</p>

              <div>
                <div>
                  <Image src={instagramIcon} alt="logo" />
                </div>
              </div>
            </div>
            {/* quick links */}
            <div className="flex flex-col gap-2">
              <h1>Quick Links</h1>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Travel Tips & Guide</Link>
              <Link href={'#'}>Destinations</Link>
              <Link href={'#'}>Photography</Link>
              <Link href={'#'}>Accommodations</Link>
              <Link href={'#'}>Resources</Link>
              <Link href={'#'}>Contact Us</Link>
            </div>
            <div>
              <aside className="flex items-center justify-center">
                {/* web stories */}
                <div>
                  <h1>Web Stories</h1>
                  <div className="flex flex-wrap">
                    <div className="flex flex-col items-center">
                      <Image
                        src={soloTripsImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">Solo trips</h4>
                    </div>

                    <div className="flex flex-col items-center">
                      <Image
                        src={soloTripsImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">Solo trips</h4>
                    </div>

                    <div className="flex flex-col items-center">
                      <Image
                        src={soloTripsImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">Solo trips</h4>
                    </div>

                    <div className="flex flex-col items-center">
                      <Image
                        src={soloTripsImg}
                        alt="logo"
                        className="w-[71px] h-[71px] rounded-[50%] object-cover border-[#008ebe] border-2"
                      />
                      <h4 className="text-[11px] font-[600]">Solo trips</h4>
                    </div>
                  </div>
                </div>
                {/* support */}
                <div className="flex flex-col">
                  <h1>Support</h1>
                  <Link href={'#'}>Terms & Condition</Link>
                  <Link href={'#'}>Privacy Policy</Link>
                  <Link href={'#'}>Legal Information</Link>
                  <Link href={'#'}>Disclaimer</Link>
                  <Link href={'#'}>Affiliate Disclosure</Link>
                </div>
              </aside>
              {/* search bar */}
              <div>{/* <h1>Subscribe To Our Newsletter</h1> */}</div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </footer>
  );
}

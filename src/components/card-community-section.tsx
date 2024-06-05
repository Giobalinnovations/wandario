'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function CardCommunitySection() {
  return (
    <>
      {/* <div className=" relative rounded-[50px] ">
        <div className="">
          <Image src={cardCommunitybg} alt="" className="object-cover -z-30" />
        </div>
        <div className="absolute top-6 mx-auto flex flex-col items-center w-full text-white">
          <h2 className="font-bold text-3xl">Travel Tips From Community</h2>
          <div className="border-b-[3px]  border-[#008ebe] w-[90px] my-2"></div>
        </div>

        <section className="absolute  z-10 flex top-2/4  translate-y-1/2  justify-center gap-3 mx-2.5">
          {Communities.map((community, index) => (
            <CardCommunity key={index} {...community} />
          ))}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay
            spaceBetween={10}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              580: {
                slidesPerView: 2,
              },

              1000: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </section>
      </div> */}
    </>
  );
}

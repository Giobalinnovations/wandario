import CardImgBlog2 from '@/components/ui/card-img-blog2';
import {
  northAmericaBlogCanadaImg1,
  northAmericaBlogCanadaImg2,
  northAmericaBlogCanadaImg3,
} from '@/lib/images';

export default function CardBlogAmericaCanadaSection() {
  return (
    <>
      <div className="flex items-center gap-3 justify-center h-full">
        <div>
          <CardImgBlog2
            bgImgSrc={northAmericaBlogCanadaImg1}
            alt="card blog image1"
            date="February 9, 2024"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
        <div className="flex flex-col gap-3">
          <CardImgBlog2
            bgImgSrc={northAmericaBlogCanadaImg2}
            alt="card blog image1"
            date="February 9, 2024"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <CardImgBlog2
            bgImgSrc={northAmericaBlogCanadaImg3}
            alt="card blog image1"
            date="February 9, 2024"
            title="Lorem Ipsum is simply dummy text of the printing and typesetting"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
        </div>
      </div>
    </>
  );
}

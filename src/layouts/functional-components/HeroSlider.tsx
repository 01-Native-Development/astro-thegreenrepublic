import type { Product } from "@/lib/shopify/types";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const HeroSlider = ({ products }: { products: Product[] }) => {
  return (
    <>
      {" "}
      <Swiper
        pagination={{
          clickable: true,
          bulletClass: "banner-pagination-bullet",
          bulletActiveClass: "banner-pagination-bullet-active",
        }}
        modules={[Pagination]}
      >
        {" "}
        {products?.map((item: Product) => (
          <SwiperSlide key={item.id}>
            {" "}
            <div className="items-center px-7 xl:px-16 row">
              {" "}
              <div className="order-2 lg:order-0 sm:col-12 lg:col-6">
                {" "}
                <div className="py-10 lg:py-0 text-center">
                  {" "}
                  {item?.description && (
                    <p className="mb-2 lg:mb-3 font-medium text-light md:text-xl dark:text-darkmode-light">
                      {" "}
                      {item.description}{" "}
                    </p>
                  )}{" "}
                  <div className="row">
                    {" "}
                    <h1 className="mx-auto mb-4 lg:mb-10 col-10 sm:col-8 lg:col-12">
                      {" "}
                      {item.title}{" "}
                    </h1>{" "}
                  </div>{" "}
                  {item.handle && (
                    <a
                      className="font-medium btn btn-primary btn-sm md:btn-lg"
                      href={`products/${item.handle}`}
                    >
                      {" "}
                      Shop Now{" "}
                    </a>
                  )}{" "}
                </div>{" "}
              </div>{" "}
              <div className="sm:col-12 lg:col-6">
                {" "}
                {item.featuredImage && (
                  <img
                    src={item.featuredImage.url}
                    className="mx-auto w-[388px] lg:w-full"
                    width={"507"}
                    height={"385"}
                    alt="banner image"
                  />
                )}{" "}
              </div>{" "}
            </div>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>{" "}
    </>
  );
};
export default HeroSlider;

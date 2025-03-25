"use client"; // For Next.js (remove if plain React)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function BusinessPartners() {
  const partners = [
    { id: 1, src: "/images/westin.png", alt: "Westin" },
    { id: 2, src: "/images/summit.png", alt: "Summit" },
    { id: 3, src: "/images/holcim.png", alt: "Holcim" },
    { id: 4, src: "/images/etv.png", alt: "ETV" },
    { id: 5, src: "/images/westin.png", alt: "Westin" },
  ];

  return (
    <div className="business-partners">
      <h2 className="title">BUSINESS PARTNERS</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <img
              src={partner.src}
              alt={partner.alt}
              className="partner-logo"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

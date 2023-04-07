import React from "react";
import s from "./commonCarousel.module.sass"
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import '../swiperCustom.sass'
import {FreeMode, Pagination} from "swiper";
import ModalWindow from "../ModalWindow";
import {
    changeStateOfModalWindow,
    setStateOfModalWindow
} from "../../../../../store/reduxToolkit/features/marketplace-page/marketplaceSlice";
import {useTypeDispatch} from "../../../../../hooks/useTypeDispatch";
import {IModalWindowInfoModel} from "../../../../../interfaces/marketplaceInterfaces/marketplaceInterfaces";

import img1 from "assets/images/imagesMarketplace/img_1.png"
import img2 from "assets/images/imagesMarketplace/img_2.png"
import img3 from "assets/images/imagesMarketplace/img_3.png"
import img4 from "assets/images/imagesMarketplace/img_4.png"
import img5 from "assets/images/imagesMarketplace/img5.jpg"
import img6 from "assets/images/imagesMarketplace/img6.png"

const CommonCarousel = () => {
    const dispatch = useTypeDispatch()
    const handleOpenModal = ({image, name, price, shop}: IModalWindowInfoModel) => {
        dispatch(setStateOfModalWindow({image, name, price, shop}))
        dispatch(changeStateOfModalWindow(true))
    };

    return (
        <div className={s.mainWrapper}>
            {/*<div className={s.headerWithLinks}>*/}
            {/*    <div>Everything for photo</div>*/}
            {/*</div>*/}
            <div className={s.carousel}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={-30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        1380: {
                            slidesPerView: 5,
                            spaceBetween: -10
                        },
                        1100: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        460: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },

                    }}

                >
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img6}
                                alt="Olympus trip AF "
                                onClick={() => {
                                    handleOpenModal({
                                        image: img6,
                                        name: "Brown Headphones SP 2494685",
                                        price: "120$",
                                        shop: "MOMENT"
                                    })
                                }}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>120$</div>
                                <div className={s.name}>Brown Headphones SP 2494685</div>
                                <div className={s.shop}>MOMENT</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img1}
                                alt="zenith"
                                onClick={() => {
                                    handleOpenModal({
                                        image: img1,
                                        name: "Parfum Spray",
                                        price: "50$",
                                        shop: "Chanel"
                                    })
                                }}

                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>50$</div>
                                <div className={s.name}>Parfum Spray</div>
                                <div className={s.shop}>Chanel</div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img2} alt="Headphones SP 2494685"
                                onClick={() => {
                                    handleOpenModal({
                                        image: img2,
                                        name: "Headphones SP 2494685",
                                        price: "120$",
                                        shop: "MOMENT"
                                    })
                                }}

                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>120$</div>
                                <div className={s.name}>
                                    Headphones SP 2494685
                                </div>
                                <div className={s.shop}>MOMENT</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img3} alt="image3"
                                onClick={() => {
                                    handleOpenModal({
                                        image: img3,
                                        name: "Paper coffe cup",
                                        price: "15$",
                                        shop: "Best Sale"
                                    })
                                }}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>15$</div>
                                <div className={s.name}>Paper coffe cup</div>
                                <div className={s.shop}>Best sale</div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img4} alt=""
                                onClick={() => {
                                    handleOpenModal({
                                        image: img4,
                                        name: "Sed diam nonummy",
                                        price: "200$",
                                        shop: "35 stOre"
                                    })
                                }}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>200$</div>
                                <div className={s.name}>Sed diam nonummy</div>
                                <div className={s.shop}>35 stOre</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={s.imageAndReviewProductWrapper}>
                            <img
                                className={s.image}
                                src={img5} alt=""
                                onClick={() => {
                                    handleOpenModal({
                                        image: img5,
                                        name: "Herbal shampoo",
                                        price: "55$",
                                        shop: "35 stOre"
                                    })
                                }}
                            />
                            <div className={s.aboutProduct}>
                                <div className={s.price}>55$</div>
                                <div className={s.name}>Herbal shampoo</div>
                                <div className={s.shop}>35 stOre</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <ModalWindow/>
            </div>
        </div>
    )
}
export default CommonCarousel



import React from "react";
import MainCarousel from "./mainCarousel/MainCarousel";
import CommonCarousel from "./commonCarousel/CommonCarousel";
import s from "./marketplace.module.sass"
import ButtonGrey from "../../../shared/additionalComponents/buttons/ButtonGrey";
import ButtonCoral from "../../../shared/additionalComponents/buttons/ButtonCoral";

const Marketplace = () => {
    return (
        <div className={s.marketplaceWrapper}>
            <div className={s.categoryHeader}>Market</div>
            <div className={s.categoryButtonsWrapper}>
                <div className={s.categoryButtons}>
                    <div><ButtonGrey name={"Shop"}/></div>
                    <div><ButtonGrey name={"Headphones"}/></div>
                    <div><ButtonGrey name={"Parfums"}/></div>
                    <div><ButtonGrey name={"Fruits"}/></div>
                    <div><ButtonGrey name={"Mobiles"}/></div>
                    <div><ButtonGrey name={"Laptops"}/></div>
                </div>
                <div><ButtonCoral name={"Create"}/></div>
            </div>
            <div className={s.commonCarouselWrapper}>
                <CommonCarousel/>
            </div>
            <div className={s.categoryHeader}>Categories</div>
            <div className={s.mainCarouselWrapper}>
                <MainCarousel/>
            </div>
            <div className={s.categoryHeader}>Brand Collection</div>
            <div className={s.commonCarouselWrapper}>
                <CommonCarousel/>
            </div>
        </div>
    )
}
export default Marketplace
import * as React from 'react';
import CropperModal from "./CropperModal";
import UserInfo from "../../sidebar/UserInfo";
import s from "./settings.module.sass"
import SocialInfoAboutUser from "../../../shared/additionalComponents/SocialInfoAboutUser";
import TabsSettings from "./TabsSettings";
export default function Settings() {
    return (
    <div className={s.settingsWrapper}>
        <div className={s.headerSettings}>Account Settings</div>
        <TabsSettings/>
    </div>

    );
}
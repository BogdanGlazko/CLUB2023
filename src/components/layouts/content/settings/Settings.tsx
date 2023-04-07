import * as React from 'react';
import {useEffect} from 'react';
import s from "./settings.module.sass"
import TabsSettings from "./TabsSettings";

export default function Settings() {
    useEffect(() => {
        const element = document.getElementById('scroll');
        console.log(element)
        if (element) {
            element.scrollIntoView({ behavior:"auto" });
        }
    },[]);

    return (
    <div className={s.settingsWrapper}>
        <div className={s.headerSettings}>Account Settings</div>
        <TabsSettings/>
    </div>

    );
}
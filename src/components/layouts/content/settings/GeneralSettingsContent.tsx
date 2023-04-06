import * as React from 'react';
import s from "./settings.module.sass"
import ToogleSwitch from "../../../shared/additionalComponents/Toogle";
import ButtonCoral from "../../../shared/additionalComponents/buttons/ButtonCoral";
import ButtonGrey from "../../../shared/additionalComponents/buttons/ButtonGrey";

export default function GeneralSettingsContent() {
    return (
        <div>
            <div className={s.settingsGeneralWrapper}>
                <div className={s.headersGeneral}>
                    <div>
                        Basic
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className={s.formsGeneral}>
                    <div className={s.formAboutUserInfo}>
                        <div className={s.name}>
                            <div className={s.inputMargin}>
                                <div className={s.headerNameOfElement}>First Name</div>
                                <input type="text" placeholder="Your name..."/>
                            </div>
                            <div>
                                <div className={s.headerNameOfElement}>Last Name</div>
                                <input type="text" placeholder="Your last name..."/>
                            </div>
                        </div>

                        <div>
                            <div className={s.headerNameOfElement}>Email</div>
                            <input type="text" placeholder="Your name"/>
                        </div>

                        <div>
                            <div className={s.headerNameOfElement}>About me</div>
                            <input className={s.aboutMeInput} type="text"/>
                        </div>

                        <div>
                            <div className={s.headerNameOfElement}>Location</div>
                            <input type="text"/>
                        </div>
                        <div className={s.aboutWork}>
                            <div className={s.inputMargin}>
                                <div className={s.headerNameOfElement}>Working at</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div className={s.headerNameOfElement}>Relationship</div>
                                <input type="text" placeholder="None..."/>
                            </div>
                        </div>

                        <div className={s.buttonsWrapper}>
                            <ButtonGrey name={"Cancel"}/>
                            <ButtonCoral name={"Save"}/>
                        </div>

                    </div>
                </div>
            </div>


            <div className={s.settingsGeneralWrapper}>
                <div className={s.headersGeneral}>
                    <div>
                        Privacy
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                </div>
                <div className={s.formsGeneral}>
                    <div className={s.checkBoxSection}>
                        <div className={s.wrapperCheckBoxSection}>
                            <div>
                                <div className={s.headerOfElementPrivacy}>Who can follow me ?</div>
                                <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <div><ToogleSwitch isChecked={true} /></div>
                        </div>
                        <div className={s.wrapperCheckBoxSection}>
                            <div>
                                <div className={s.headerOfElementPrivacy}>Show my activities ?</div>
                                <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</div>
                            </div>
                            <div><ToogleSwitch/></div>
                        </div>
                        <div className={s.wrapperCheckBoxSection}>
                            <div>
                                <div className={s.headerOfElementPrivacy}>Search engines?</div>
                                <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
                            </div>
                            <div><ToogleSwitch isChecked={true} /></div>
                        </div>
                        <div className={s.wrapperCheckBoxSection}>
                            <div>
                                <div className={s.headerOfElementPrivacy}>Allow Commenting?</div>
                                <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</div>
                            </div>
                            <div><ToogleSwitch/></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}
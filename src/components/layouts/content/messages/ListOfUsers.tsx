import React from "react";
import s from "./messages.module.sass"
import {useSelector, useDispatch} from 'react-redux'
import {changeStateOfMessage} from "store/reduxToolkit/features/messages-page/messagesSlice"
import {messagesPage} from "store/reduxToolkit/features/messages-page/messagesSelectors";

const ListOfUsers = () => {

    const messages = useSelector(messagesPage)
    const dispatch = useDispatch()
    const arrNum = messages.users.length;

    const result = [];
    for (let i = 0; ; i++) {
        if (i === arrNum) break;
        const name = {
            name: Object.values(messages.users[i])[0][0].name,
            img: Object.values(messages.users[i])[0][0].img,
            id: i
        };
        result.push(name);
    }

    return (
        <>
            <div className={s.listOfUsers}>
                <div className={s.wrapperSearchInput}>
                    <input
                        className={s.searchInput}
                        type="text"
                        placeholder={"Search"}
                        defaultValue={""}
                    />
                    <div className={s.searchInputIcon}>
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.65625 8.17969L10.1562 4.82031C10.1562 4.14323 9.90885 3.55729 9.41406 3.0625C8.91927 2.56771 8.33333 2.32031 7.65625 2.32031C6.97917 2.32031 6.39323 2.56771 5.89844 3.0625C5.40365 3.55729 5.15625 4.14323 5.15625 4.82031L7.65625 8.17969ZM4.6875 1.89062C5.52083 1.08333 6.51042 0.679688 7.65625 0.679688C8.80208 0.679688 9.77865 1.08333 10.5859 1.89062C11.4193 2.69792 11.8359 3.67448 11.8359 4.82031L7.65625 10.6797H12.6562C13.099 10.6797 13.4896 10.849 13.8281 11.1875C14.1667 11.5 14.3359 11.8776 14.3359 12.3203V17.3203H0.976562V12.3203C0.976562 11.8776 1.14583 11.5 1.48438 11.1875C1.82292 10.849 2.21354 10.6797 2.65625 10.6797H7.65625L3.47656 4.82031C3.47656 3.67448 3.88021 2.69792 4.6875 1.89062ZM12.6562 14V12.3203H2.65625V14H12.6562Z" fill="#A0A0A0"/>
                        </svg>
                    </div>
                </div>

                {result.map(e =>
                    <div
                    className={s.usersInMessages}
                    onClick={() => dispatch(changeStateOfMessage({
                                          id: e.id,
                                          img: e.img,
                                          name: e.name
                                      }))}
                    key={e.id}>
                    <img alt={""}
                         key={e.id}
                         src={e.img}
                    />
                        <div className={s.bounceGreen}>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_1_38)">
                                    <rect x="5" y="1.75" width="12" height="12" rx="6" fill="#10B981"/>
                                    <rect x="6" y="2.75" width="10" height="10" rx="5" stroke="white" strokeWidth="2"/>
                                </g>
                                <defs>
                                    <filter id="filter0_dd_1_38" x="0" y="0.75" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_38"/>
                                        <feOffset dy="2"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_38"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1_38"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="3"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                        <feBlend mode="normal" in2="effect1_dropShadow_1_38" result="effect2_dropShadow_1_38"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_38" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    <div className = {s.wrapperInfoAboutLastSeen} key={e.id + Math.random()}>
                        <div className={s.infoAboutLastSeen}>
                            <div>
                                <div>{e.name}</div>
                                <div>
                                    {e.id===0?"Tue":e.id===1?"Week Ago":e.id===2?"4 Hours ago":"Mon"}
                                </div>
                            </div>
                            <div>{e.id===0?"Seddiam nonummy nibh euismod laoreet":e.id===1?"Euismod laoreet":
                                e.id===2?"Seddiam nonummy nibh euismod laoreet":"Nonummy nibh euismod"}
                            </div>
                        </div>
                         </div>
                </div>)}

                {result.map(e =>
                    <div
                        className={s.usersInMessages}
                        onClick={() => dispatch(changeStateOfMessage({
                            id: e.id,
                            img: e.img,
                            name: e.name
                        }))}
                        key={e.id}>
                        <img alt={""}
                             key={e.id}
                             src={e.img}
                        />
                        <div className={s.wrapperInfoAboutLastSeen} key={e.id + Math.random()}>
                            <div className={s.infoAboutLastSeen}>
                                <div>
                                    <div>{e.name}</div>
                                    <div>
                                        {e.id===0?"Tue":e.id===1?"Week Ago":e.id===2?"4 Hours ago":"Mon"}
                                    </div>
                                </div>
                                <div>{e.id===0?"Seddiam nonummy nibh euismod laoreet":e.id===1?"Euismod laoreet":
                                    e.id===2?"Seddiam nonummy nibh euismod laoreet":"Nonummy nibh euismod"}
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    );
}
export default ListOfUsers;

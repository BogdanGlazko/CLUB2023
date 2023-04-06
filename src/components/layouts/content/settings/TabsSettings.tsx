import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import s from "./settings.module.sass"
import SocialInfoAboutUser from "../../../shared/additionalComponents/SocialInfoAboutUser";
import CropperModal from "./CropperModal";
import UserInfo from "../../sidebar/UserInfo";
import GeneralSettingsContent from "./GeneralSettingsContent";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabsSettings() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            '& .MuiTabs-indicator': {
                backgroundColor: "grey",
                height: "4px"
            },
            '& .MuiTabs-flexContainer': {
                flexWrap:"wrap"
            },
            "& .MuiButtonBase-root": {
                color: "grey",
                textTransform: "none !important",
                fontFamily: "Inter !important",
                fontSize: "15px !important",
                fontWeight: "400 !important",
                lineHeight: "23px !important",
                letterSpacing: "0em !important",
                textAlign: "center !important"

            }
        }}>

            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                "& .Mui-selected": {
                    color: "black !important"
                }

            }}>

                <Tabs value={value} onChange={handleChange} aria-label="tabs">
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Profile" {...a11yProps(1)} />
                    <Tab label="Privacy" {...a11yProps(2)} />
                    <Tab label="Notification" {...a11yProps(3)} />
                    <Tab label="Social links" {...a11yProps(4)} />
                    <Tab label="Billing" {...a11yProps(5)} />
                    <Tab label="Security" {...a11yProps(6)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <GeneralSettingsContent/>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <div className={s.settingsWrapper}>
                    <div className={s.changePhotoWrapper}>
                        <div className={s.userInfoWrapper}>
                            <UserInfo/>
                            <div><CropperModal/></div>
                        </div>
                        <div><SocialInfoAboutUser/></div>
                    </div>

                </div>
            </TabPanel>

            <TabPanel value={value} index={2}>

            </TabPanel>
        </Box>
    );
}
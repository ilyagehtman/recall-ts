import React from "react";
import classes from "./Logo.module.sass";
import classNames from "classnames";

interface LogoProps {
    alt?: boolean;
}

const Logo: React.FC<LogoProps> = ({ alt }) => {
    return <svg className={
        classNames(
            classes.logo,
            { [classes.alt]: alt }
        )
    } width="60" height="55" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_205_852)">
            <path
                d="M49.8769 21.2153C50.2958 20.2235 50.2067 19.2228 49.6274 18.231C49.1017 17.3357 48.2996 16.809 47.2303 16.6598C46.0272 16.493 44.7262 16.8002 43.3628 17.5726C41.9815 18.3626 41.0725 19.3106 40.6626 20.3902C40.2973 21.347 40.4042 22.3476 41.0012 23.3658C41.429 24.0943 42.0082 24.6122 42.73 24.8843C43.4251 25.1477 43.8261 25.2266 44.842 24.9809C44.9311 24.9633 45.0113 24.9019 45.047 24.8229C45.0916 24.7439 45.1005 24.6473 45.0737 24.5596L44.4499 22.7075C44.3965 22.5407 44.2093 22.4442 44.04 22.4968C43.4608 22.6636 43.3628 22.5407 43.1221 22.1721C42.935 21.9 42.9439 21.5752 43.0954 21.2153C43.2202 20.8993 43.4786 20.6097 43.8707 20.3288L46.1342 24.1909C46.2233 24.3401 46.4193 24.4016 46.5797 24.3138L46.8293 24.1821C48.3977 23.3131 49.4225 22.3037 49.8769 21.2153ZM46.7847 19.1087C47.1412 19.1526 47.3818 19.3018 47.5422 19.5651C47.6847 19.8021 47.6937 20.083 47.56 20.399C47.4441 20.6799 47.2035 20.952 46.8293 21.2153L45.7153 19.3194C46.1164 19.135 46.4728 19.0648 46.7847 19.1087Z"/>
            <path
                d="M45.8935 33.2142C43.5587 32.7928 42.3735 31.5552 42.3735 29.5364C42.3735 28.2373 42.8815 27.263 43.8974 26.6222C44.8598 26.0166 46.0361 25.7181 47.3817 25.7181C48.9947 25.7181 50.2512 26.0692 51.1156 26.7627C51.9978 27.4736 52.4433 28.4128 52.4433 29.5627C52.4433 30.4843 52.1849 31.2568 51.677 31.8536C51.1779 32.4417 50.3848 32.8718 49.3244 33.1176C49.2353 33.1352 49.1461 33.1264 49.0749 33.0825C48.9947 33.0298 48.9412 32.9596 48.9234 32.8718L48.5045 30.9847C48.4867 30.8969 48.5045 30.8003 48.558 30.7301C48.6115 30.6511 48.6917 30.6072 48.7808 30.5897C49.7789 30.4404 49.9125 29.984 49.9125 29.5978C49.9125 29.2204 49.761 28.9395 49.4402 28.7113C49.0927 28.4655 48.4689 28.3338 47.5778 28.3338C46.5797 28.3338 45.8757 28.4655 45.4925 28.7113C45.136 28.9395 44.9756 29.2204 44.9756 29.5978C44.9756 29.8699 45.0648 30.0806 45.2519 30.2561C45.3945 30.3878 45.7064 30.5633 46.4104 30.6687C46.4995 30.6774 46.5797 30.7301 46.6332 30.8091C46.6866 30.8793 46.7044 30.9759 46.6866 31.0637L46.2945 32.9508C46.2411 33.1264 46.0717 33.2493 45.8935 33.2142Z"/>
            <path
                d="M28.2401 39.9378C28.4005 40.3415 28.5074 40.719 28.5698 41.0701C28.6322 41.4299 28.6589 41.9829 28.6589 42.729L28.6411 45.4676C28.6411 46.5648 28.748 47.3021 28.953 47.7498C29.1669 48.2062 29.5322 48.5661 30.0313 48.8294C30.5214 49.0839 31.1897 49.2068 32.072 49.2068C33.07 49.2068 33.8542 48.9874 34.4067 48.5485C34.9592 48.1096 35.3513 47.3987 35.583 46.4419C35.6008 46.3541 35.5919 46.2664 35.5385 46.1961C35.4939 46.1259 35.4137 46.0733 35.3246 46.0557L33.5512 45.6695C33.3819 45.6344 33.2126 45.7309 33.1591 45.8977C33.0255 46.3454 32.8829 46.5297 32.7849 46.6087C32.6423 46.714 32.4373 46.7755 32.17 46.7755C31.8135 46.7755 31.6175 46.714 31.5284 46.6613C31.4036 46.5999 31.3234 46.5297 31.2878 46.4419C31.2788 46.4068 31.2254 46.2664 31.2165 45.8187C31.5729 45.6783 32.1165 45.5203 32.8472 45.3535C33.6314 45.1692 34.2018 44.9585 34.576 44.7127C34.9592 44.4582 35.2622 44.1159 35.4761 43.6945C35.69 43.282 35.788 42.7905 35.788 42.2375C35.788 41.3685 35.5296 40.6487 35.0127 40.1133C34.4958 39.5691 33.8186 39.297 33.0076 39.297C32.5264 39.297 32.063 39.4111 31.6442 39.6305C31.3858 39.7622 31.1363 39.9378 30.9046 40.1484L30.7976 39.7446C30.762 39.6042 30.6283 39.4989 30.4768 39.4989H28.552C28.445 39.4989 28.3381 39.5515 28.2757 39.6393C28.2133 39.7183 28.1955 39.8324 28.2401 39.9378ZM31.7868 41.8074C32.2234 41.5089 32.6601 41.5089 32.9364 41.8161C33.0878 41.9917 33.1591 42.2024 33.1591 42.4569C33.1591 42.6676 33.0968 42.8343 32.972 42.966C32.8918 43.045 32.6512 43.2118 31.9472 43.3961C31.662 43.4663 31.4125 43.5365 31.1986 43.6068V43.598C31.1986 42.8168 31.2699 42.4745 31.3323 42.3252C31.4214 42.1321 31.5729 41.9566 31.7868 41.8074Z"/>
            <path
                d="M11.8878 16.0717L22.626 22.1809C22.7864 22.2686 22.8398 22.4705 22.7507 22.6285L21.7705 24.2962C21.6814 24.4542 21.4764 24.5069 21.316 24.4191L10.5778 18.31C10.4174 18.2222 10.364 18.0203 10.4531 17.8623L11.4333 16.1946C11.5314 16.0366 11.7363 15.9839 11.8878 16.0717Z"/>
            <path
                d="M22.7329 35.4261L11.9947 41.5352C11.8343 41.623 11.6294 41.5703 11.5403 41.4123L10.56 39.7446C10.4709 39.5866 10.5244 39.3847 10.6848 39.297L21.4229 33.1878C21.5833 33.1 21.7883 33.1527 21.8774 33.3107L22.8577 34.9784C22.9468 35.1364 22.8844 35.3383 22.7329 35.4261Z"/>
            <path
                d="M39.8693 55C26.5558 55 5.56958 46.3015 4.68736 45.9328L3.96554 45.6344L0 9.59384L11.3619 8.74242L24.2299 15.7644L19.7832 4.51165L30.6282 0L31.0114 0.0614427C32.9719 0.394989 50.3312 3.40568 54.9384 7.75056C59.5633 12.1218 60.0891 18.0905 59.9822 23.3482C59.9287 26.3326 59.9376 28.9658 59.9644 32.0117C59.9733 33.6618 59.9822 35.4086 59.9822 37.3659C59.9911 48.4081 49.7609 55 39.8693 55ZM6.4518 43.7999C10.2837 45.3359 28.4361 52.3667 39.8693 52.3667C48.442 52.3667 57.3177 46.7579 57.3177 37.3659C57.3177 35.4173 57.3088 33.6706 57.2999 32.0292C57.282 28.9571 57.2642 26.315 57.3177 23.2956C57.4157 18.3714 56.9612 13.3155 53.0937 9.65528C49.7787 6.5217 36.3493 3.66023 30.958 2.72981L23.2229 5.95117L27.3756 16.4579C27.6875 17.2478 27.4736 18.1256 26.8231 18.6874C26.1726 19.2491 25.2636 19.3457 24.5062 18.9331L10.7738 11.4371L2.96747 12.0252L6.4518 43.7999Z"/>
            <path
                d="M37.6592 9.24278L37.3027 10.182C37.2404 10.3488 37.1245 10.4716 36.9641 10.5419C36.7948 10.6033 36.6076 10.6033 36.4383 10.5331C35.8947 10.2961 35.3422 10.2961 34.9145 10.6121C34.6828 10.7876 34.5224 11.0246 34.4244 11.3318C34.2551 11.8673 34.1659 12.4641 34.1659 13.1137V17.7921C34.1659 18.1344 33.8808 18.4153 33.5332 18.4153H32.4906C32.1431 18.4153 31.8579 18.1344 31.8579 17.7921V8.8829C31.8579 8.5318 32.1431 8.2597 32.4906 8.2597H33.3639C33.7204 8.2597 33.9966 8.5318 33.9966 8.8829V8.91801C34.1749 8.69858 34.3442 8.5318 34.5135 8.4177C35.3333 7.87349 36.376 7.94371 37.3651 8.47036C37.6414 8.61958 37.7661 8.95312 37.6592 9.24278Z"/>
        </g>
        <defs>
            <clipPath id="clip0_205_852">
                <rect width="60" height="55"/>
            </clipPath>
        </defs>
    </svg>;
};

export default Logo;
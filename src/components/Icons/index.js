import React from 'react';

const Icons = ({ name }) => {
  switch (name) {
    case 'logo':
      return (
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.2 0.174999C10.95 0.174999 12.5333 0.599999 13.95 1.45C15.3833 2.3 16.4833 3.45833 17.25 4.925L14.525 5.925C13.975 4.975 13.2333 4.23333 12.3 3.7C11.3667 3.15 10.3333 2.875 9.2 2.875C7.43333 2.875 5.96667 3.48333 4.8 4.7C3.61667 5.93333 3.025 7.45 3.025 9.25C3.025 11.05 3.61667 12.5667 4.8 13.8C5.96667 15.0167 7.43333 15.625 9.2 15.625C10.3333 15.625 11.3667 15.3583 12.3 14.825C13.2333 14.275 13.975 13.525 14.525 12.575L17.25 13.575C16.4833 15.0417 15.3833 16.2 13.95 17.05C12.5333 17.9 10.95 18.325 9.2 18.325C6.61667 18.325 4.45833 17.4583 2.725 15.725C0.991667 13.9917 0.125 11.8333 0.125 9.25C0.125 6.66667 0.991667 4.50833 2.725 2.775C4.45833 1.04167 6.61667 0.174999 9.2 0.174999Z"
            fill="white"
          />
        </svg>
      );
    case 'arrow-right-up':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5858 7L5.63604 16.9497C5.24552 17.3403 5.24552 17.9734 5.63604 18.364C6.02656 18.7545 6.65973 18.7545 7.05025 18.364L17 8.41421V14C17 14.5523 17.4477 15 18 15C18.5523 15 19 14.5523 19 14V7C19 5.89543 18.1046 5 17 5H10C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7H15.5858Z" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9571 1.04289C13.3476 1.43342 13.3476 2.06658 12.9571 2.45711L6.75 8.66421L0.542893 2.45711C0.152369 2.06658 0.152369 1.43342 0.542893 1.04289C0.933417 0.652369 1.56658 0.652369 1.95711 1.04289L6.75 5.83579L11.5429 1.04289C11.9334 0.652369 12.5666 0.652369 12.9571 1.04289Z"
          />
        </svg>
      );
    case 'scroll':
      return (
        <svg width="17" height="29" viewBox="0 0 17 29" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 20.5V8.5C15 4.91015 12.0899 2 8.5 2C4.91015 2 2 4.91015 2 8.5V20.5C2 24.0899 4.91015 27 8.5 27C12.0899 27 15 24.0899 15 20.5ZM8.5 0C3.80558 0 0 3.80558 0 8.5V20.5C0 25.1944 3.80558 29 8.5 29C13.1944 29 17 25.1944 17 20.5V8.5C17 3.80558 13.1944 0 8.5 0Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 5C9.05228 5 9.5 5.44772 9.5 6V10C9.5 10.5523 9.05228 11 8.5 11C7.94772 11 7.5 10.5523 7.5 10V6C7.5 5.44772 7.94772 5 8.5 5Z"
          />
        </svg>
      );
    case 'traders':
      return (
        <svg width="29" height="31" viewBox="0 0 29 31" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5192 11.9124L4.92964 15.692V28.5351L9.2183 30.9849L12.9735 28.8151C13.2923 29.0251 13.7175 29.0251 14.0718 28.8484C14.6032 28.5334 14.8158 27.8683 14.4969 27.3437C14.3461 27.0939 14.1038 26.911 13.8202 26.8328C13.5366 26.7546 13.2335 26.7871 12.9735 26.9236C12.6192 27.1336 12.4066 27.5187 12.442 27.9034L9.2183 29.7248L6.56109 28.22L12.6192 24.7555L13.6821 25.3855L15.2764 26.2953L16.3393 26.8903L27.0383 20.8013C27.3572 21.0113 27.7823 21.0113 28.1721 20.8013C28.7035 20.5212 28.8806 19.8562 28.5618 19.3315C28.4109 19.0817 28.1686 18.8989 27.885 18.8207C27.6014 18.7425 27.2983 18.775 27.0383 18.9115C26.684 19.1215 26.5069 19.5062 26.5069 19.8912L18.2167 24.5805L16.3379 25.6656L13.9642 24.3008L9.57124 21.781V18.9475L16.1608 22.7267L16.8694 22.342L27.6035 16.2173V15.7976L27.4263 11.5974L23.6708 9.46393C23.6708 9.25425 23.6 9.07924 23.5291 8.90423C23.4205 8.71388 23.2572 8.55963 23.0598 8.46098C22.8625 8.36233 22.64 8.32372 22.4204 8.35002C22.2008 8.37632 21.9941 8.46635 21.8263 8.60874C21.6586 8.75112 21.5373 8.93946 21.4779 9.14993C21.4185 9.3604 21.4235 9.58355 21.4925 9.79116C21.5615 9.99877 21.6912 10.1815 21.8653 10.3163C22.0394 10.4511 22.25 10.5318 22.4706 10.5483C22.6911 10.5648 22.9116 10.5163 23.1043 10.409V10.3756L26.3635 12.2304L26.4697 15.1699L20.2699 11.6364V7.53815L9.60633 1.44978C9.60633 1.23977 9.53547 1.06476 9.42918 0.890083C9.14575 0.365051 8.47259 0.190042 7.94114 0.470058C7.68279 0.613947 7.49286 0.853337 7.41316 1.13556C7.33346 1.41779 7.37052 1.71974 7.51617 1.97498C7.66181 2.23022 7.90412 2.41785 8.1898 2.49659C8.47547 2.57533 8.78111 2.53873 9.03947 2.39484V2.3615L15.6999 6.17573L19.206 8.16785V15.692L16.9031 17.0217V9.46259L13.3959 7.46814L6.73553 3.68858L5.63722 3.05855L1.35195 5.50836V9.77761L1.3182 9.81094C0.822192 10.091 0.609605 10.756 0.92847 11.2807C1.07935 11.5305 1.32165 11.7134 1.60523 11.7915C1.8888 11.8697 2.19196 11.8372 2.45195 11.7007C2.57821 11.6278 2.68856 11.5309 2.77662 11.4156C2.86468 11.3002 2.9287 11.1687 2.96496 11.0288C3.00121 10.8888 3.00897 10.7431 2.98781 10.6002C2.96664 10.4572 2.91697 10.3198 2.84167 10.196C2.73759 10.0232 2.59144 9.87877 2.41651 9.77594V6.13806L4.93167 4.70464V11.5987L4.15222 12.0537L2.41651 13.0335L1.35363 13.6635V25.8419H1.31988C0.823872 26.1566 0.611302 26.8216 0.930167 27.3467C1.00398 27.4714 1.10213 27.5804 1.21892 27.6674C1.33572 27.7544 1.46883 27.8177 1.61055 27.8534C1.75226 27.8892 1.89975 27.8969 2.04447 27.8759C2.1892 27.8549 2.32828 27.8058 2.45363 27.7313C2.98474 27.4517 3.16221 26.7866 2.84335 26.2616C2.73926 26.0889 2.59312 25.9446 2.41821 25.8419V14.2572L9.04317 10.5127L11.5192 11.9124ZM5.99252 16.3217L12.0506 12.8571V15.6906L8.47394 17.7201V22.411L11.5205 24.1258L5.99388 27.2753L5.99252 16.3217ZM15.8062 17.1967L13.1489 15.692V11.6324L9.03947 9.25291L5.99252 11.0027V4.4933L15.8062 10.0936V17.1967ZM10.102 18.0364L12.6175 16.603L16.1605 18.6678L20.2699 16.323V12.8571L25.9724 16.0767L16.1605 21.501L10.102 18.0364Z"
          />
        </svg>
      );
    case 'bg':
      return (
        <svg
          width="1293"
          height="1834"
          viewBox="0 0 1293 1834"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <circle
              cx="916.5"
              cy="916.5"
              r="235.816"
              stroke="url(#paint0_linear_2057_2)"
              strokeOpacity="0.7"
              strokeWidth="1.4"
            />
            <circle
              cx="916.5"
              cy="916.5"
              r="429.6"
              stroke="url(#paint1_linear_2057_2)"
              strokeOpacity="0.7"
              strokeWidth="1.4"
            />
            <circle
              cx="916.5"
              cy="916.5"
              r="666.2"
              stroke="url(#paint2_linear_2057_2)"
              strokeOpacity="0.7"
              strokeWidth="1.4"
            />
            <circle
              cx="916.5"
              cy="916.5"
              r="915.8"
              stroke="url(#paint3_linear_2057_2)"
              strokeOpacity="0.7"
              strokeWidth="1.4"
            />
          </g>
          <g opacity="0.6" filter="url(#filter0_f_2057_2)">
            <circle cx="384" cy="1662" r="4" fill="#A66AFF" />
          </g>
          <g opacity="0.6" filter="url(#filter1_f_2057_2)">
            <circle cx="270" cy="1079" r="4" fill="#6A8BFF" />
          </g>
          <g opacity="0.6" filter="url(#filter2_f_2057_2)">
            <circle cx="1233" cy="1206" r="4" fill="#45B1FF" />
          </g>
          <g opacity="0.6" filter="url(#filter3_f_2057_2)">
            <circle cx="772" cy="1103" r="4" fill="#755AD2" />
          </g>
          <g opacity="0.2" filter="url(#filter4_f_2057_2)">
            <circle cx="986" cy="1829" r="4" fill="#82D2FF" />
          </g>
          <defs>
            <filter
              id="filter0_f_2057_2"
              x="379"
              y="1657"
              width="10"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2057_2" />
            </filter>
            <filter
              id="filter1_f_2057_2"
              x="265"
              y="1074"
              width="10"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2057_2" />
            </filter>
            <filter
              id="filter2_f_2057_2"
              x="1228"
              y="1201"
              width="10"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2057_2" />
            </filter>
            <filter
              id="filter3_f_2057_2"
              x="767"
              y="1098"
              width="10"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2057_2" />
            </filter>
            <filter
              id="filter4_f_2057_2"
              x="981"
              y="1824"
              width="10"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2057_2" />
            </filter>
            <linearGradient
              id="paint0_linear_2057_2"
              x1="679.984"
              y1="679.984"
              x2="1163.17"
              y2="690.589"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#91E4FF" stopOpacity="0.6" />
              <stop offset="0.295443" stopColor="#E77FFA" stopOpacity="0.79" />
              <stop offset="0.540308" stopColor="#362962" />
              <stop offset="0.9375" stopColor="#9D71FB" stopOpacity="0.71" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2057_2"
              x1="1010"
              y1="486"
              x2="1274.11"
              y2="1094.24"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#91E4FF" stopOpacity="0.6" />
              <stop offset="0.295443" stopColor="#E77FFA" stopOpacity="0.79" />
              <stop offset="0.540308" stopColor="#362962" />
              <stop offset="0.9375" stopColor="#9D71FB" stopOpacity="0.71" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_2057_2"
              x1="942.5"
              y1="212.001"
              x2="1392.84"
              y2="1042.51"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#91E4FF" stopOpacity="0.6" />
              <stop offset="0.295443" stopColor="#E77FFA" stopOpacity="0.79" />
              <stop offset="0.540308" stopColor="#362962" />
              <stop offset="0.9375" stopColor="#9D71FB" stopOpacity="0.71" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_2057_2"
              x1="888.999"
              y1="0.000290146"
              x2="1444.77"
              y2="1090.1"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#91E4FF" stopOpacity="0.6" />
              <stop offset="0.295443" stopColor="#E77FFA" stopOpacity="0.79" />
              <stop offset="0.540308" stopColor="#362962" />
              <stop offset="0.9375" stopColor="#9D71FB" stopOpacity="0.71" />
            </linearGradient>
          </defs>
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default Icons;

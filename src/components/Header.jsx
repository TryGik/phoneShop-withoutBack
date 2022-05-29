import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalCount, selectTotalPrice } from '../redux/reducer/cartSlice';

function Header() {
    // console.log('render Header')
    const totalCount = useSelector(selectTotalCount);
    const totalPrice = useSelector(selectTotalPrice);

    return (
        <header>
            <div className="wrapper__header">
                <div className="header__logo">
                    <Link className="logo__link" to="/"></Link>
                </div>
                <div className="header__social">
                    <a href="https://vk.com" target="_blank" rel='noreferrer' className="social">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#ff1a27"></circle>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.9381 18.625H13.8059C13.8059 18.625 14.0674 18.5925 14.2016 18.4294C14.3251 18.2808 14.3214 18.0024 14.3214 18.0024C14.3214 18.0024 14.3039 16.6906 14.8443 16.4975C15.3848 16.3045 16.0616 17.7658 16.7862 18.3261C17.335 18.7531 17.7519 18.6575 17.7519 18.6575L19.6908 18.6276C19.6908 18.6276 20.7049 18.5567 20.2213 17.6582C20.1819 17.5848 19.9409 16.9937 18.7812 15.7793C17.5685 14.5076 17.7284 14.7134 19.1928 12.5142C20.0849 11.1742 20.4419 10.3568 20.3297 10.0067C20.2236 9.67272 19.5672 9.76069 19.5672 9.76069L17.3843 9.77606C17.2874 9.76313 17.1893 9.78274 17.1023 9.83243C17.0193 9.90061 16.9531 9.99141 16.9098 10.0963C16.6832 10.7572 16.4136 11.3983 16.1033 12.0146C15.1309 13.8739 14.739 13.9729 14.5829 13.8568C14.2137 13.5877 14.3062 12.7755 14.3062 12.199C14.3062 10.3961 14.5487 9.64453 13.8332 9.44981C13.596 9.3849 13.4209 9.34305 12.8145 9.33536C12.0353 9.32682 11.3744 9.33536 11.003 9.54461C10.7559 9.67784 10.5641 9.9836 10.6801 10.0007C10.8241 10.0229 11.1508 10.1006 11.3244 10.3662C11.548 10.7078 11.5404 11.4765 11.5404 11.4765C11.5404 11.4765 11.6692 13.5988 11.2372 13.8619C10.9431 14.043 10.5391 13.674 9.67277 11.983C9.37992 11.3976 9.12067 10.7917 8.89662 10.1689C8.85674 10.0629 8.79519 9.96894 8.71698 9.89477C8.61538 9.81876 8.50115 9.76675 8.38121 9.7419L6.30666 9.75727C6.30666 9.75727 5.99514 9.76752 5.88069 9.91954C5.77912 10.0553 5.87311 10.3363 5.87311 10.3363C5.87311 10.3363 7.49666 14.6186 9.33624 16.776C11.0227 18.7548 12.9381 18.625 12.9381 18.625Z"
                                fill="white"></path>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer' className="social">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14" r="14" fill="#ff1a27"></circle>
                            <path
                                d="M13.9995 8.29202C15.869 8.29202 16.0899 8.29876 16.8287 8.33342C17.511 8.36519 17.8814 8.48168 18.1286 8.57988C18.4305 8.69915 18.7047 8.88192 18.9334 9.1164C19.1622 9.35087 19.3404 9.63185 19.4567 9.94121C19.5507 10.1935 19.6663 10.5737 19.6973 11.2727C19.7311 12.0285 19.7386 12.2557 19.7386 14.1696C19.7386 16.0836 19.7311 16.3108 19.6973 17.0666C19.6663 17.7626 19.5572 18.1477 19.4567 18.398C19.3404 18.7074 19.1622 18.9884 18.9334 19.2229C18.7047 19.4573 18.4305 19.6401 18.1286 19.7594C17.8814 19.8557 17.511 19.9741 16.8287 20.0058C16.0899 20.0405 15.869 20.0482 13.9995 20.0482C12.13 20.0482 11.9092 20.0405 11.1713 20.0058C10.489 19.9741 10.1177 19.8576 9.87143 19.7594C9.56949 19.6401 9.29531 19.4573 9.06655 19.2229C8.8378 18.9884 8.65957 18.7074 8.54334 18.398C8.44935 18.1458 8.3328 17.7665 8.30178 17.0675C8.26794 16.3108 8.26136 16.0845 8.26136 14.1696C8.26136 12.2547 8.26794 12.0285 8.30178 11.2727C8.3328 10.5737 8.44747 10.1935 8.54334 9.94121C8.66008 9.63138 8.83904 9.35011 9.06863 9.11561C9.29822 8.8811 9.57332 8.69859 9.87613 8.57988C10.1224 8.4836 10.4937 8.36519 11.176 8.33342C11.9139 8.29876 12.1357 8.29202 14.0042 8.29202H13.9995ZM14.0042 7C12.1037 7 11.865 7.0077 11.1187 7.04236C10.5379 7.05493 9.96339 7.16788 9.41934 7.37644C8.95352 7.56013 8.53035 7.84157 8.17699 8.20268C7.82364 8.56379 7.54791 8.9966 7.36751 9.47332C7.16352 10.0311 7.05355 10.6204 7.0423 11.2159C7.00752 11.9803 7 12.2239 7 14.1716C7 16.1192 7.00752 16.3628 7.0423 17.1282C7.05385 17.7227 7.16381 18.311 7.36751 18.8679C7.54713 19.3444 7.82203 19.7772 8.17458 20.1384C8.52712 20.4997 8.94951 20.7815 9.41464 20.9657C9.95863 21.1744 10.5332 21.287 11.114 21.2988C11.8603 21.3335 12.099 21.3422 13.9995 21.3422C15.9 21.3422 16.1388 21.3335 16.886 21.2988C17.4668 21.287 18.0414 21.1744 18.5854 20.9657C19.0505 20.7815 19.4729 20.4997 19.8254 20.1384C20.178 19.7772 20.4529 19.3444 20.6325 18.8679C20.8362 18.311 20.9462 17.7227 20.9577 17.1282C20.9915 16.3628 21 16.1192 21 14.1716C21 12.2239 20.9915 11.9803 20.9577 11.2159C20.9462 10.621 20.8363 10.0324 20.6325 9.47524C20.4526 8.99899 20.1776 8.56648 19.8251 8.20539C19.4726 7.84431 19.0503 7.56262 18.5854 7.37836C18.0413 7.1698 17.4668 7.05686 16.886 7.04429C16.1341 7.00963 15.901 7.00193 13.9995 7.00193L14.0042 7Z"
                                fill="white"></path>
                            <path
                                d="M14 10.4881C13.2892 10.4883 12.5944 10.7043 12.0034 11.109C11.4125 11.5136 10.952 12.0887 10.6801 12.7614C10.4082 13.4342 10.3371 14.1744 10.4759 14.8885C10.6147 15.6026 10.9571 16.2585 11.4598 16.7732C11.9625 17.288 12.6029 17.6386 13.3001 17.7805C13.9973 17.9225 14.7199 17.8496 15.3766 17.5709C16.0333 17.2922 16.5946 16.8203 16.9895 16.2149C17.3844 15.6095 17.5952 14.8977 17.5952 14.1696C17.5952 13.6861 17.5022 13.2073 17.3215 12.7605C17.1408 12.3138 16.876 11.9079 16.5421 11.566C16.2083 11.2242 15.8119 10.953 15.3757 10.768C14.9396 10.5831 14.4721 10.4879 14 10.4881ZM14 16.5602C13.5384 16.5602 13.0872 16.42 12.7034 16.1573C12.3196 15.8946 12.0205 15.5213 11.8439 15.0845C11.6672 14.6476 11.621 14.167 11.7111 13.7033C11.8011 13.2396 12.0234 12.8136 12.3498 12.4793C12.6762 12.145 13.092 11.9173 13.5447 11.8251C13.9974 11.7328 14.4667 11.7802 14.8931 11.9611C15.3196 12.142 15.684 12.4484 15.9405 12.8415C16.1969 13.2347 16.3338 13.6968 16.3338 14.1696C16.3338 14.8036 16.0879 15.4117 15.6502 15.86C15.2126 16.3083 14.619 16.5602 14 16.5602Z"
                                fill="white"></path>
                            <path
                                d="M17.7363 11.2034C18.2004 11.2034 18.5766 10.818 18.5766 10.3427C18.5766 9.86731 18.2004 9.48196 17.7363 9.48196C17.2722 9.48196 16.896 9.86731 16.896 10.3427C16.896 10.818 17.2722 11.2034 17.7363 11.2034Z"
                                fill="white"></path>
                        </svg>
                    </a>
                </div>
                <div className="header__phone-number">
                    <svg className="phone-number--svg" width="21" height="20" viewBox="0 0 21 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.87068 0C4.43421 0.122506 4.9477 0.346667 5.37152 0.747029C5.56075 0.925836 5.7406 1.11194 5.92462 1.29805C6.41569 1.7912 6.92396 2.26924 7.39418 2.78116C8.2486 3.71064 8.40342 4.89817 7.84667 6.0367C7.6652 6.42737 7.41838 6.7842 7.11684 7.09182C6.90207 7.30295 6.86036 7.5464 6.90832 7.82425C7.01258 8.442 7.30868 8.97999 7.65431 9.48461C8.54887 10.7879 9.65664 11.8748 11.0428 12.6583C11.3801 12.857 11.7476 12.9991 12.1307 13.079C12.4368 13.1374 12.6938 13.0853 12.9362 12.8585C13.4528 12.3758 14.0523 12.0244 14.756 11.8857C15.6506 11.7116 16.4628 11.9243 17.1394 12.5212C17.9214 13.2098 18.6257 13.9809 19.3519 14.7248C19.7241 15.1069 19.8997 15.6021 20.0165 16.1156V17.0133C20.0045 17.0571 19.9904 17.1003 19.98 17.1441C19.7809 18.0022 19.3081 18.6585 18.5271 19.0782C17.549 19.6057 16.4679 19.9145 15.3587 19.9832C13.8823 20.0796 12.4858 19.7574 11.1528 19.1339C8.85018 18.0569 6.90207 16.4925 5.11504 14.7159C4.13426 13.7442 3.24062 12.6883 2.4444 11.5604C1.6296 10.4021 0.915932 9.18799 0.442066 7.84563C0.227683 7.21152 0.079538 6.55692 0 5.8923V4.44829C0.0100562 4.42433 0.0174001 4.39933 0.0218948 4.37374C0.0958246 3.62986 0.2794 2.901 0.566658 2.21085C0.796553 1.65045 1.0572 1.10777 1.53107 0.695941C1.95854 0.320081 2.4616 0.117293 3.01053 0H3.87068ZM14.7425 18.1414C15.7851 18.1461 16.6942 17.9256 17.5497 17.4892C18.2639 17.1243 18.3838 16.3856 17.8203 15.8158C17.2211 15.2097 16.6178 14.6075 16.0103 14.009C15.6756 13.6775 15.2805 13.6123 14.8441 13.8005C14.5272 13.9365 14.2676 14.1518 14.0158 14.3791C13.6024 14.7534 13.1103 14.9328 12.5587 14.9573C11.7658 14.9922 11.0428 14.743 10.3526 14.389C8.79284 13.5888 7.53754 12.4326 6.4845 11.0485C5.83652 10.1972 5.31105 9.28078 5.09679 8.21836C4.92111 7.34622 5.07177 6.55019 5.71297 5.88917C5.90634 5.68654 6.06488 5.45333 6.18215 5.19897C6.39744 4.73813 6.3156 4.30441 5.94547 3.95514C5.81828 3.83419 5.69264 3.71116 5.57013 3.58501C5.08532 3.0856 4.60312 2.58306 4.08755 2.11493C3.5897 1.66348 2.85935 1.78964 2.54605 2.37975C1.85376 3.68336 1.67026 5.05613 1.99555 6.49806C2.26455 7.68819 2.82599 8.74905 3.48283 9.76455C4.5807 11.464 5.91784 12.9596 7.4119 14.3181C8.69744 15.4869 10.0747 16.5316 11.6386 17.3078C12.6406 17.8036 13.6853 18.1544 14.7425 18.1409V18.1414Z"
                            fill="#ff1a27"></path>
                    </svg>
                    <a className="phone-number--tel" href="tel:0710000000">(071) 000-00-00</a>
                    <a className="phone-number--tel" href="tel:0719999999">(071) 999-99-99</a>
                </div>
                <div className="header__worktime">Ежедневно 9:00-18:00</div>
                <Link to="/cart" className="header__cart">

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0L0.833333 0C0.612319 0 0.400358 0.0877974 0.244078 0.244078C0.0877973 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877973 1.26631 0.244078 1.42259C0.400358 1.57887 0.612319 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61504 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833Z"
                            fill="#A6A6A6"></path>
                        <path
                            d="M5.83366 20.0001C6.75413 20.0001 7.50032 19.2539 7.50032 18.3334C7.50032 17.4129 6.75413 16.6667 5.83366 16.6667C4.91318 16.6667 4.16699 17.4129 4.16699 18.3334C4.16699 19.2539 4.91318 20.0001 5.83366 20.0001Z"
                            fill="#A6A6A6"></path>
                        <path
                            d="M14.1667 20.0001C15.0871 20.0001 15.8333 19.2539 15.8333 18.3334C15.8333 17.4129 15.0871 16.6667 14.1667 16.6667C13.2462 16.6667 12.5 17.4129 12.5 18.3334C12.5 19.2539 13.2462 20.0001 14.1667 20.0001Z"
                            fill="#A6A6A6"></path>
                    </svg>

                    <span className="countsht">{totalCount}</span>

                    <div>
                        <span className="pricesht">
                            {totalPrice} </span>
                        <span className="currency">
                            руб. </span>
                    </div>
                </Link>
            </div>

        </header >
    )
}

export default Header
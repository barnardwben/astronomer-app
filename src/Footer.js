import React, { useEffect, useRef } from "react";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="fg-item-one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 52"
                width={40}
                height={52}
              >
                <defs>
                  <linearGradient
                    x1="20.4142014%"
                    y1="-5.53089117%"
                    x2="81.7536617%"
                    y2="89.3033953%"
                    id="linearGradient-mkc5nq6028-1"
                  >
                    <stop stopColor="#DBCDF6" offset="0%" />
                    <stop stopColor="#FFFFFF" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#linearGradient-mkc5nq6028-1)"
                  d="M112.226 62.014c-6.963.227-13.421 3.17-18.186 8.288-9.835 10.565-9.3 27.217 1.193 37.12A25.861 25.861 0 0 0 107.957 114l1.385-3.485a22.233 22.233 0 0 1-11.608-5.78c-9.021-8.514-9.482-22.83-1.026-31.914 4.097-4.4 9.65-6.932 15.637-7.127a22.122 22.122 0 0 1 13.27 3.852h-.001l1.386-3.49A25.735 25.735 0 0 0 113.09 62c-.287 0-.575.005-.864.014Zm2.64 13.325h-3.629l-.044.11-9.241 23.26-.095.24H105.962l.043-.111 2.267-5.87h9.965l2.295 5.87.044.111h4.236l-.095-.24-5.967-15.02-.044-.11h-4.105l.092.239 2.117 5.477h-7.082l5.3-13.718.093-.238h-.255Z"
                  transform="translate(-87 -62)"
                />
              </svg>
            </div>
            <div className="fg-item-two">
              <div className="fgi2-list-one">
                <h2>Product</h2>
                <ul>
                  <li>
                    <a href="#">Astro</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Why Airflow</a>
                  </li>
                </ul>
              </div>
              <div className="fgi2-list-two">
                <h2>Resources</h2>
                <ul>
                  <li>
                    <a href="#">Docs</a>
                  </li>
                  <li>
                    <a href="#">Registry</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                  <li>
                    <a href="#">Certification</a>
                  </li>
                  <li>
                    <a href="#">Forum</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Weekly Demo</a>
                  </li>
                </ul>
              </div>
              <div className="fgi2-list-three">
                <h2>Company</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="fg-item-three">
              <div className="fgi3-flex">
                <div className="social-links">
                  <a href="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                      width={33}
                      height={32}
                    >
                      <path
                        fill="#fff"
                        opacity={0.505}
                        d="M16.288 0C7.293 0 0 7.293 0 16.29c0 7.197 4.667 13.302 11.14 15.457.815.149 1.112-.354 1.112-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184-.741-1.881-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.354.148-1.053.568-1.771 1.034-2.178-3.617-.411-7.42-1.809-7.42-8.051 0-1.778.635-3.232 1.677-4.371-.168-.412-.727-2.068.159-4.311 0 0 1.368-.438 4.48 1.67a15.56 15.56 0 0 1 4.078-.548c1.383.006 2.777.186 4.078.548 3.11-2.108 4.475-1.67 4.475-1.67.889 2.243.33 3.899.162 4.311 1.044 1.139 1.675 2.593 1.675 4.371 0 6.258-3.809 7.635-7.438 8.038.585.503 1.106 1.497 1.106 3.017 0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784 6.468-2.159 11.131-8.26 11.131-15.455C32.579 7.293 25.285 0 16.288 0"
                      />
                    </svg>
                  </a>
                </div>
                <div className="social-links">
                  <a href="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                      width={33}
                      height={32}
                    >
                      <path
                        fill="#fff"
                        fillRule="nonzero"
                        d="M32.078 16c0 8.84-7.16 16-16 16s-16-7.16-16-16 7.16-16 16-16 16 7.16 16 16ZM13.15 24.44c7.096 0 10.976-5.88 10.976-10.976 0-.168 0-.336-.008-.496a7.903 7.903 0 0 0 1.928-2 7.83 7.83 0 0 1-2.216.608 3.855 3.855 0 0 0 1.697-2.136c-.745.44-1.569.76-2.449.936a3.839 3.839 0 0 0-2.816-1.216 3.858 3.858 0 0 0-3.856 3.856c0 .304.032.6.104.88a10.943 10.943 0 0 1-7.952-4.032 3.87 3.87 0 0 0-.52 1.936c0 1.336.68 2.52 1.72 3.208a3.79 3.79 0 0 1-1.744-.48v.048a3.862 3.862 0 0 0 3.096 3.784 3.846 3.846 0 0 1-1.744.064 3.852 3.852 0 0 0 3.6 2.68 7.754 7.754 0 0 1-5.712 1.592 10.748 10.748 0 0 0 5.896 1.744"
                        opacity={0.505}
                      />
                    </svg>
                  </a>
                </div>
                <div className="social-links">
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                      width={33}
                      height={32}
                    >
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M16.079 0c8.836 0 16 7.163 16 16s-7.164 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16Zm5.035 11.543c-1.86 0-3.109 1.021-3.62 1.989h-.052V11.85h-3.67v12.308h3.825V18.07c0-1.605.303-3.16 2.294-3.16 1.897 0 1.984 1.72 1.988 3.124v6.125H25.7v-6.751c0-3.315-.715-5.864-4.586-5.864Zm-9.74.307H7.545v12.308h3.827V11.85ZM9.46 5.73a2.218 2.218 0 1 0 0 4.436 2.218 2.218 0 0 0 0-4.436Z"
                        opacity={0.505}
                      />
                    </svg>
                  </a>
                </div>
                <div className="social-links">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 33 32"
                      width={33}
                      height={32}
                    >
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M16.078 0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.836 0-16-7.163-16-16s7.164-16 16-16Zm.339 9h-.677c-.648.004-2.14.017-3.704.067l-.524.019-.522.021c-1.473.066-2.858.17-3.507.34a2.725 2.725 0 0 0-1.946 1.895c-.4 1.455-.451 4.288-.458 4.995v.326c.007.707.059 3.54.458 4.995.252.92.997 1.647 1.946 1.896.649.168 2.034.273 3.507.339l.522.021.524.018c1.565.051 3.056.064 3.704.067l.25.001H16.417c1.404-.008 6.77-.06 8.257-.446a2.725 2.725 0 0 0 1.946-1.896c.4-1.455.451-4.288.458-4.995V16.338c-.007-.708-.059-3.541-.458-4.996a2.725 2.725 0 0 0-1.946-1.896c-1.486-.387-6.853-.438-8.257-.445Zm-2.536 4.285 5.715 3.215-5.715 3.215v-6.43Z"
                        opacity={0.505}
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="copyright-area">
              <div className="cp-flex">
                <div>© Astronomer 2022</div>
                <div className="flex-terms">
                  <div>
                    <a href="#">Terms</a>
                  </div>
                  <div>
                    <a href="#">Privacy</a>
                  </div>
                  <div>
                    <a href="#">Security</a>
                  </div>
                </div>
              </div>
              <div className="cp-text">
                Apache Airflow, Airflow, and the Airflow logo are trademarks of
                the Apache Software Foundation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

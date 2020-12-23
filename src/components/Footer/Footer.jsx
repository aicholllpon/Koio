import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="pg-footer">
        <footer className="footer">
          <svg className="footer-wave-svg mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link" href="#">
                  <svg className="footer-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 112.82">
                    <path className="footer-logo-path text" d="M109.06,110a6.87,6.87,0,0,1-4,1.34,6,6,0,0,1-4.4-1.77,6,6,0,0,1-1.76-4.43,5.87,5.87,0,0,1,1.65-4.29,5.63,5.63,0,0,1,4.19-1.68,7.84,7.84,0,0,1,4.29,1.37V110Zm0-11.18a9.63,9.63,0,0,0-4.35-1.18,7.1,7.1,0,0,0-5.32,2.17,8,8,0,0,0,0,10.85,7.1,7.1,0,0,0,5.29,2.21,7.32,7.32,0,0,0,4.35-1.44v1.15h1.58V90.28h-1.58v8.49ZM60,110a6.87,6.87,0,0,1-4,1.34,6,6,0,0,1-4.4-1.77,6,6,0,0,1-1.76-4.43,5.87,5.87,0,0,1,1.65-4.29,5.61,5.61,0,0,1,4.19-1.68A7.84,7.84,0,0,1,60,100.49V110Zm0-11.18a9.63,9.63,0,0,0-4.35-1.18,7.1,7.1,0,0,0-5.32,2.17,8,8,0,0,0,0,10.85,7.1,7.1,0,0,0,5.29,2.21A7.36,7.36,0,0,0,60,111.38v1.15h1.58V90.28H60v8.49Zm59.55,11.83a7.07,7.07,0,0,1-.34-2.76V99.13h4.12V97.86h-4.12V93s-1.57,0-1.57,2.06v2.8h-4v1.27h4v10.54a2.81,2.81,0,0,0,1,2.29,3.58,3.58,0,0,0,2.43.83,7,7,0,0,0,3-.75v-1.49a6.66,6.66,0,0,1-2.69.71c-1,0-1.62-.22-1.85-.66Zm-36.42-.45h0a2.29,2.29,0,0,1-.57,1.12,2.34,2.34,0,0,1-.59-1.09L78.55,100c-.58-1.74-1.39-2.11-2-2.11s-1.39.37-2,2.11l-3.41,10.2a2.21,2.21,0,0,1-.6,1.09,2.5,2.5,0,0,1-.57-1.12h0L66.2,97.87H64.67l4,12.72h0c.55,1.78,1.36,2.16,2,2.16h0c.59,0,1.4-.37,2-2.1L76,100.44a2.41,2.41,0,0,1,.59-1.1h0a2.31,2.31,0,0,1,.59,1.1l3.41,10.2c.59,1.73,1.4,2.1,2,2.1h0c.59,0,1.4-.38,2-2.16h0l4-12.72H87l-3.82,12.29Zm-57.88-.54a6.19,6.19,0,0,1-4.09,1.89,3.08,3.08,0,0,1-2.08-.7,2.16,2.16,0,0,1-.84-1.72,3.43,3.43,0,0,1,2-3,9,9,0,0,1,5-1.06v4.57Zm1.94,1.6c-.24,0-.35-.25-.35-.75v-9.07a3.35,3.35,0,0,0-1.3-2.84,5.32,5.32,0,0,0-3.3-1,9,9,0,0,0-4.75,1.56v1.61A7.58,7.58,0,0,1,22,98.87q3.26,0,3.26,3v1.86a13.42,13.42,0,0,0-6.35,1.59,4.22,4.22,0,0,0-2.22,3.76,3.47,3.47,0,0,0,1.15,2.63,4,4,0,0,0,2.81,1.08A7.48,7.48,0,0,0,25.25,111a4.09,4.09,0,0,0,.31,1.45.74.74,0,0,0,.72.36h.06a6.86,6.86,0,0,0,2.95-.75v-1.5a7.54,7.54,0,0,1-2.1.67Zm111.32-12a5.19,5.19,0,0,0-4-1.59,5.56,5.56,0,0,0-4.85,2.83h-.06V90.26h-1.57V112.5h1.57V102.24c1.3-2.1,2.9-3.14,4.81-3.14q4,0,4,5.06v8.34H140v-9a6.17,6.17,0,0,0-1.49-4.38ZM91.67,93h1.58V90.24H91.67V93Zm0,19.5h1.58V97.86H91.67V112.5ZM39.21,97.57a5.57,5.57,0,0,0-4.85,2.83H34.3V97.86H32.73V112.5H34.3V102.24c1.26-2.1,2.86-3.14,4.82-3.14,2.66,0,4,1.69,4,5.06v8.34h1.56v-8.93a6.21,6.21,0,0,0-1.48-4.41,5.21,5.21,0,0,0-4-1.59ZM9.9,109.44a6.47,6.47,0,0,1-4.72,1.82,10.34,10.34,0,0,1-3.61-.68v-8.87q2.49-2.83,5.12-2.84a4.58,4.58,0,0,1,3.63,1.68,6.28,6.28,0,0,1,1.44,4.26,6.22,6.22,0,0,1-1.86,4.63Zm-3-11.87A7.3,7.3,0,0,0,1.57,100v-9.7H0v21.43a14,14,0,0,0,5.22,1.1,8.16,8.16,0,0,0,6-2.2,7.85,7.85,0,0,0,2.25-5.87,7.29,7.29,0,0,0-1.84-5.15,6.14,6.14,0,0,0-4.72-2Z"
                      transform="translate(0 0)"></path>
                    <path className="footer-logo-path icon" d="M90,20.07c-2.77-.58-3.1.86-1.9,3.5,6.29,13.87.69,27.42-5.31,30.78A6.75,6.75,0,0,1,82.65,53c-.71-6.59-3.22-12.31-4.91-12.32-1.34,0-.5,5.63-.86,10.62-2.22-1.32-3.59-2.24-6-1.83-3.41.6-7.92,7.78-8.09,6.75-1.35-8.32,1.89-21.12,6.38-22.49.69-.27,1.91.78,4.65,1.81,2.13.8,1.86-1.31.88-2.1a10.29,10.29,0,0,0-10.95-.78C57,35.94,54,50.94,57.6,57.06a9.6,9.6,0,0,0,6.77,4.67c4.53.51,5.91-.43,9.57-4.9a4.16,4.16,0,0,0,1.72.84c-3,9.24-14.12,17-16.52,15.69-11.68-7.93-8.45-33.28-.2-55.58,1.34-3.63,3.55-10,4-12.35,1.22-6-6.38-7.17-11.58-2.77C47.61,5.86,44,13.32,41,22,31.59,49.5,35.6,72.76,52.49,77.8c19.43,5.8,28.67-6.29,30.11-18.44a25.68,25.68,0,0,0,3.58.18c6-.12,14.55-3.22,17.1-16.35C105.2,33.28,98.83,21.75,90,20.07Z"
                      transform="translate(0 0)"></path>
                  </svg>
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Support</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Product Care</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Shipping</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">Gift Cards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company </h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Contact</a>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a href="#">News</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Sell</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#">Infinity Exchange</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Guidliness</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Support Center</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <a target="_blank" rel="noopener noreferrer" href="#">Service Status</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Security</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Blog</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                    <a href="#">Customers</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description"> Have a support question?</p>
                <a className="footer-call-to-action-button button" href="#" target="_self"> Get in Touch </a>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper"> <a className="footer-call-to-action-link" href="tel:0124-64XXXX" target="_self"> 0124-64XXXX </a></p>
              </div>
            </div>
            <div className="footer-social-links"> <svg className="footer-social-amoeba-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 54">
              <path className="footer-social-amoeba-path" d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"></path>
            </svg>
              <a className="footer-social-link linkedin" href="#" target="_blank">
                <span className="hidden-link-text">Linkedin</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
              <a className="footer-social-link twitter" href="#" target="_blank">
                <span className="hidden-link-text">Twitter</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                  <path className="footer-social-icon-path" d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "></path>
                </svg>
              </a>
              <a className="footer-social-link youtube" href="#" target="_blank">
                <span className="hidden-link-text">Youtube</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <path className="footer-social-icon-path" d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                </svg>
              </a>
              <a className="footer-social-link github" href="#" target="_blank">
                <span className="hidden-link-text">Github</span>
                <svg className="footer-social-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path className="footer-social-icon-path" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z "></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="#" target="_self"> © Copyright All rights reserved 2020. </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
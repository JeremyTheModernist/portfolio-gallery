import React from 'react'

function Footer(props){
  return(
    <div class="footer">
    <div class="footer__container">
      <div class="footer__contact">For inquiries around purchasing or further info, please contact  me at <a href="mailto:m_mcinarnay@bellsouth.net">m_mcinarnay@bellsouth.net</a></div>
      <ul class="footer__byline">
        <li class="footer__bio">
          Margie McInarnay is an artist and painter living and working out of Montgomery, AL.
        </li>
        <ul class="footer__social">
          <li>
            <a href="mailto:m_mcinarnay@bellsouth.net" target="_top">Contact Me</a>
          </li>
          <li>
            {/* Facebook */}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/margie-mcinarnay-86b410137/" target="_blank">LinkedIn</a>
          </li>
        </ul>

      </ul>
      <span class="footer__copyright">©2019 All rights reserved</span>
    </div>
    </div>
  )
}

export default Footer;

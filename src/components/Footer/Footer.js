import React from 'react'

function Footer(props){
  return(
    <div class="footer">
    <div class="footer__container">
      <div class="footer__contact">For inquiries around purchasing or further info, please contact  me at <a href="mailto:maggieolah@att.net">maggieolah@att.net</a></div>
      <ul class="footer__byline">
        <li class="footer__bio">
          Margie McInarnay is an artist and painter living and working out of Montgomery, AL.
        </li>
        <ul class="footer__social">
          <li>
            Contact Me
          </li>
          <li>
            Facebook
          </li>
          <li>
            LinkedIn
          </li>
        </ul>

      </ul>
      <span class="footer__copyright">©2019 All rights reserved</span>
    </div>
    </div>
  )
}

export default Footer;

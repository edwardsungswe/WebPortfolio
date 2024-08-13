import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/edwardsungswe" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/edwardsungswe/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio by <a href="https://github.com/edwardsungswe" target="_blank" rel="noreferrer">Edward Sung</a></p>
    </footer>
  );
}

export default Footer;
import React from "react";
import { AiFillGithub } from 'react-icons/ai';

function FooterBar() {
  return (
    <footer className="footer fixed-bottom bg-light text-center text-lg-start">
      <div
        className="text-center p-4"
        style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
      >
        Made by Sabuj Golui. Get connected with me on GitHub:&nbsp;
        <a className="text-dark" href="https://github.com/sabujgolui" rel="noopener noreferrer" target="_blank">
          <AiFillGithub/>
        </a>
      </div>
    </footer>
  );
}

export default FooterBar;

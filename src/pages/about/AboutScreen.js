import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            
            <div>
              
                <p>Hi, I'm SonubabuT</p>
            
              <h1>Invoice for GBK</h1>
            </div>
          </div>

          <PageTitle title="Invoice Maker" />
          <div className="mt-2 pl-4 text-sm">
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:tsonubabu0@gmail.com"
                className="underline cursor-pointer"
              >
                tsonubabu0@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.facebook.com/lwin.im/"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                facebook
              </a>
            </div>
            <div>
              <span>🎁 </span>
                
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> SonubabuT</li>
              <li> MERN Stack Developer</li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+91 7339290039"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +917339290039
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;

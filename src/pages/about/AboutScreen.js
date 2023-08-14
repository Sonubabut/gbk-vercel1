import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://raw.githubusercontent.com/lwinmoepaing/lwinmoepaing/main/img/gitto.gif"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              
              <h1> Hi I am SonuBabuT </h1>
            </div>
          </div>

          <PageTitle title="Invoice Maker" />
          <div className="mt-2 pl-4 text-sm">
            
          </div>
          <div className="font-title mt-3 mb-5">
            
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:gbkflowers@gmail.com"
                className="underline cursor-pointer"
              >
                tsonubabu0@gmail.com
              </a>{" "}
              (or){" "}
              
            </div>
            <div>
              <span>🎁 </span>
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <h1>SonuBabuT</h1>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+917339290039"
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

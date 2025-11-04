import cssLogo from "../../../public/assets/Logo/css-logo.svg";
import HtmlLogo from "../../../public/assets/Logo/HTML-logo.svg";
import JavaLogo from "../../../public/assets/Logo/java-logo.svg";
import JsLogo from "../../../public/assets/Logo/javascript-logo.svg";
import PostgreLogo from "../../../public/assets/Logo/PostgreSQL-logo.svg";
import ReactLogo from "../../../public/assets/Logo/react.svg";
import SpringbootLogo from "../../../public/assets/Logo/springboot-logo.svg";
import NodeJsLogo from "../../../public/assets/Logo/Nodejs-logo.svg";
import "../../css/Tecnologies.css";

function Tecnologies() {
  return (
    <ul className="grid grid-flow-col grid-rows-2 gap-y-5 lg:flex lg:gap-2 lg:justify-center">
      <li className="logos h-[45px] w-[45px]">
        <img src={NodeJsLogo} title="Node.js" alt="logo nodejs" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={HtmlLogo} title="HTML5" alt="logo html" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={cssLogo} title="CSS3" alt="logo css" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={JsLogo} title="JavaScript" alt="logo javascript" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={ReactLogo} title="React" alt="logo react" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={JavaLogo} title="Java" alt="logo java" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={PostgreLogo} title="PostgreSQL" alt="logo postgresql" className="w-full h-full" />
      </li>
      <li className="logos h-[45px] w-[45px]">
        <img src={SpringbootLogo} title="SpringBoot" alt="logo springboot" className="w-full h-full" />
      </li>
    </ul>
  );
}

export default Tecnologies;

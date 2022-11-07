import { ReactComponent as SvgLogo } from "./critter-catalog.svg";

import "./Logo.css";

/**
 * Logo of CritterCatalog. Rendered as an SVG contained in a div.
 *
 * @param   {String}    color   Color of the logo. Parsed as CSS.
 *                              Defaults to white (#FFFFFF).
 * @returns
 */
function Logo({ color = "#FFFFFF" }) {
  return (
    <div className="logo-container">
      <SvgLogo className="logo" />
    </div>
  );
}

export default Logo;

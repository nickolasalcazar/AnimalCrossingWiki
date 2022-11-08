import { ReactComponent as SvgLogo } from "./critter-catalog.svg";

import "./Logo.css";

/**
 * Logo of CritterCatalog. Rendered as an SVG contained in a div.
 *
 * @returns {SvgLogo}
 */
function Logo() {
  return <SvgLogo className="logo-wrapper" />;
}

export default Logo;

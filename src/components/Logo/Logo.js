import { ReactComponent as SvgLogoLarge } from "./critter-catalog.svg";
import { ReactComponent as SvgLogoSmall } from "./critter-catalog-small.svg";

import "./Logo.css";

/**
 * Logo of CritterCatalog. Rendered as an SVG contained in a div.
 *
 * @returns {SvgLogo}
 */
function Logo({ shrink }) {
  return shrink ? (
    <SvgLogoSmall className="logo-wrapper" />
  ) : (
    <SvgLogoLarge className="logo-wrapper" />
  );
}

export default Logo;

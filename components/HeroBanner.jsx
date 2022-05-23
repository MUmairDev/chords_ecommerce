import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  const mediaMatch = window.matchMedia("(max-width: 1145px)");
  const [matches, setMatches] = React.useState(mediaMatch.matches);
  React.useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const styles = {
    container: (displayImg) => ({
      display: displayImg && "none",
    }),
  };
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          style={styles.container(matches)}
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>A dream shop for music lovers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

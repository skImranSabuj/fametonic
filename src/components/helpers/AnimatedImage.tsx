"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type AnimatedImageProps = {
  src: string | StaticImageData;
  alt?: string;
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt = "Image" }) => {
  const [isReady, setIsReady] = useState(false);

  const handleLoadingComplete = () => {
    setIsReady(true);
  };

  return (
    <Image
      src={src}
      alt={alt}
      priority
      onLoadingComplete={handleLoadingComplete}
      className={`md:block transition-all duration-500 ease-in-out ${
        isReady ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-md"
      }`}
    />
  );
};

export default AnimatedImage;

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const Box = styled.div`
  
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImgTeam() {
  const [width, setWidth] = useState(0);
  const [height, setheight] = useState(0);

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height} = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <Box className=" relative z-0 top-0 w-[100%] h-[100%]">
        <Image
          src={"/illustrmaritim.png"}
          alt="Illustration maritimer Hintergrund"
          width={900}
          height={1900}
        />
      </Box>
    );
    

  }

  return null;
}

export default BGImgTeam;
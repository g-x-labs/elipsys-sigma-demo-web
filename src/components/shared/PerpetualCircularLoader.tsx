import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { formatTime } from "@/lib/utils/formats";

// TODO: Idk where to place this component
const PerpetualCircularLoader: React.FC = () => {
  const cxcy = 70; // Center of the circle
  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  const [timeElapsed, setTimeElapsed] = useState(0); // Timer state

  // TODO: Will consider using Jotai, but maybe useEffect is more suitable here
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1); // Increment timer by 1 second
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <motion.svg
        className="-rotate-90 transform"
        width={cxcy * 2}
        height={cxcy * 2}
        viewBox={`0 0 ${cxcy * 2} ${cxcy * 2}`}
        animate={{ rotate: -360 }} // Change to negative for counter-clockwise
        transition={{
          repeat: Infinity,
          duration: 2, // Time for one full rotation (2 seconds)
          ease: "linear",
        }}
      >
        <circle
          cx={cxcy}
          cy={cxcy}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.25} // Show partial stroke to create spinner effect
          strokeLinecap="round" // Rounded heads and tails
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="10%" stopColor="#0A0A0A" stopOpacity="0" />{" "}
            {/* Start transparent */}
            <stop offset="25%" stopColor="#0A0A0A" stopOpacity="0.3" />{" "}
            {/* Transition black to a visible state */}
            <stop offset="75%" stopColor="#C2FB20" stopOpacity="1" />{" "}
            {/* Transition to full green */}
            <stop offset="100%" stopColor="#C2FB20" stopOpacity="1" />{" "}
            {/* Ensure full green at the end */}
          </linearGradient>
        </defs>
      </motion.svg>
      <span className="absolute text-white text-b2">
        {formatTime(timeElapsed)}
      </span>
    </div>
  );
};

export { PerpetualCircularLoader };

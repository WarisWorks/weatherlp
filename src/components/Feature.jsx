import {React, useState} from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

function Feature({ icon, title }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#064C73] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#FFF] mt-4">
          سىز ئۈچۈن ئەڭ يېڭى ھاۋارايىدىن ئالدىن مەلۇمات ئۇچۇرىنى يەتكۈزىمىز
        </span>

        <span className="text-[#FFF] underline mt-[3rem] hover:cursor-pointer">
          تەپسىلاتى
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AddCartButton from "./AddCartButton";
export default function Carousel(props) {
  const [state, setState] = useState({ index: 0, direction: "for" });
  const variants = {
    enterForward: { x: ["100%", "0%"], opacity: [0, 1] },
    enterBackwards: { x: ["-100%", "0%"], opacity: [0, 1] },
    exitForward: { x: "-100%", opacity: [1, 0] },
    exitBackwards: { x: "100%", opacity: [1, 0] },
  };

  const next = () => {
    setState((prevState) => {
      const oldState = { ...prevState };
      if (oldState.index === props.products.length - 1) {
        return { index: 0, direction: "for" };
      } else {
        return { index: oldState.index + 1, direction: "for" };
      }
    });
  };

  const prev = () => {
    setState((prevState) => {
      const oldState = { ...prevState };
      if (oldState.index === 0) {
        return { index: props.products.length - 1, direction: "back" };
      } else {
        return { index: oldState.index - 1, direction: "back" };
      }
    });
  };

    useEffect(() => {
      const x = setInterval(() => {
        next();
      }, 5000);

      return () => {
        clearInterval(x);
      };
    }, []);

  return (
    <div className="carousel">
      <button onClick={prev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={next}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <AnimatePresence>
        <motion.div
          className="img_div"
          key={state.index}
          variants={variants}
          animate={
            state.direction === "for" ? "enterForward" : "enterBackwards"
          }
          exit={state.direction === "for" ? "exitForward" : "exitBackwards"}
        >
          <img
            onContextMenu={(e) => {
              e.preventDefault();
            }}
            src={props.products[state.index].image}
            alt="product-image"
            draggable="false"
          />
          <h3>
            {props.products[state.index].title.substring(0, 60)}
            {props.products[state.index].title.length > 60 ? "..." : ""}
            <AddCartButton item={props.products[state.index]} />
          </h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

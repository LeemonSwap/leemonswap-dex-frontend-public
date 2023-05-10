import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { StateContext } from "../context/stateContext";
import "chartist/dist/index.css";
import "../node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.css";
import { motion, AnimatePresence } from "framer-motion";

import {
  LineChart,
  Interpolation,
  // easings,
  // AutoScaleAxis,
  // FixedScaleAxis,
  // Svg,
  // AnimationDefinition,
} from "chartist";

export default function ToggleChart() {
  const { isDark } = useContext(StateContext);
  const [open, setOpen] = useState(true);
  const [applyEffect, setApplyEffect] = useState(false);
  let Chart;

  useEffect(() => {
    setTimeout(() => {
      setApplyEffect(open);
    }, 500);

    const ChartistTooltip = require("chartist-plugin-tooltips-updated");

    setTimeout(() => {
      Chart = new LineChart(
        "#chart",
        {
          labels: ["08 AM", "01 PM", "06 PM", "10 PM", "02 AM"],
          series: [
            [
              { meta: "08 AM", value: 1.24077 },
              { meta: "01 PM", value: 0.23077 },
              { meta: "06 PM", value: 0.42077 },
              { meta: "10 PM", value: 0.91077 },
              { meta: "02 AM", value: 1.24077 },
            ],
          ],
        },
        {
          // low: 0,
          // high: 2,
          showArea: true,
          areaBase: 0,
          // showPoint: true,
          lineSmooth: Interpolation.cardinal({ tension: 0.8 }),
          fullWidth: true,
          // width: "300px",
          height: "300px",
          axisX: { showGrid: false, showLabel: true },
          axisY: {
            position: "end",
            onlyInteger: false,
            offset: 30,
          },
          chartPadding: {
            right: 40,
            left: 20,
            // left: 50,
          },
          plugins: [
            ChartistTooltip({
              // currency: "$",
              class: "chart-tooltip",
              appendToBody: true,
            }),
          ],
        }
      );

      // ANIMATE CHART
      // Chart.on("draw", (data) => {
      //   if (data.type === "line" || data.type === "area") {
      //     data.element.animate({
      //       d: {
      //         begin: 500 * data.index,
      //         dur: 500,
      //         from: data.path
      //           .clone()
      //           .scale(1, 0)
      //           .translate(0, data.chartRect.height())
      //           .stringify(),
      //         to: data.path.clone().stringify(),
      //         easing: easings.easeInSine,
      //       },
      //     });
      //   }
      // });
    }, 300);
  }, [open, setApplyEffect]);

  // UNUSED CHART TYPE BUTTON
  /* <button className="flex items-center h-[36px] gap-2 px-[10px] rounded-[5px] bg-leemon-gray-light2 dark:bg-leemon-purple-dark2">
              <Image
                src={isDark ? "/chart-line-dark.svg" : "/chart-line.svg"}
                width={20}
                height={20}
                alt="chart type"
              />
              <span className="text-leemon-purple-dark2 dark:text-white">
                Line
              </span>
              <Image
                src={isDark ? "/arrow-down-dark.svg" : "/arrow-down.svg"}
                width={11}
                height={11}
                alt="arrow down"
              />
            </button> */

  return (
    <section className="flex flex-col w-full">
      {/* TOGGLE */}
      <nav
        className="
          flex justify-between items-center pl-[26px] pr-[13px] 
          w-full min-h-[49px] bg-leemon-green-light3 dark:bg-leemon-purple-dark2 
          rounded-[15px] border-[1px] border-leemon-purple-mid2 dark:border-leemon-purple-dark5
          drop-shadow-shape-light dark:drop-shadow-shape-dark
        "
      >
        <span className="text-leemon-purple-dark2 dark:text-white font-semibold20 text-[16px]">
          Chart
        </span>
        <button onClick={() => setOpen(!open)}>
          <Image
            src={
              open
                ? isDark
                  ? "/circle-arrow-up-dark.svg"
                  : "/circle-arrow-up.svg"
                : isDark
                ? "/circle-arrow-down-dark.svg"
                : "/circle-arrow-down.svg"
            }
            width={20}
            height={20}
            alt="chart toggle"
          />
        </button>
      </nav>
      {/* CHART */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0 }}
            className="w-full h-full mt-[44px]"
          >
            <header
              className={`
            flex justify-between items-start w-full h-[80.16px]
          `}
            >
              {/* LEFT */}
              <div className="flex flex-col font-book20 text-leemon-purple-dark2 dark:text-white text-[12px] sm:text-[16px] ml-2 3xl:ml-12">
                <div className="flex flex-row gap-[14.07px]">
                  <div className="flex">
                    <Image
                      src="/hbar-icon.svg"
                      width={29.31}
                      height={29.31}
                      alt="token 1"
                      className="z-10"
                    />
                    <Image
                      src="/usdc-icon.svg"
                      width={29.31}
                      height={29.31}
                      alt="token 2"
                      className="z-0 ml-[-6px]"
                    />
                  </div>
                  <span className="block sm:hidden">
                    HBAR/USDC - 1H
                    <br />
                    LeemonSwap
                  </span>
                  <span className="hidden sm:block">
                    HBAR/USDC - 1H - LeemonSwap
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-[13.85px]">
                  <span className="text-[24px] sm:text-[36px]">1.23077068</span>
                  <span className="text-leemon-green4 dark:text-leemon-green-light3">
                    +2.56%
                  </span>
                </div>
              </div>
              {/* RIGHT */}
              <div className="flex gap-[18.76px] font-book20 text-[12px] sm:text-[16px]">
                <button className="flex items-center h-[36px] gap-3 px-[10px] rounded-[5px] bg-leemon-gray-light2 dark:bg-leemon-purple-dark2">
                  <span className="text-leemon-purple-dark2 dark:text-white">
                    1 hour
                  </span>
                  <Image
                    src={isDark ? "/arrow-down-dark.svg" : "/arrow-down.svg"}
                    width={11}
                    height={11}
                    alt="arrow down"
                  />
                </button>
              </div>
            </header>
            <div id="chart" className="h-[30vh] mt-12"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

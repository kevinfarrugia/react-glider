import * as React from "react";
import { useId } from "@reach/auto-id";
import Glider from "glider-js";
import { GliderProps, GliderMethods } from "./types";

const GliderComponent = React.forwardRef(
  (props: GliderProps, ref: React.Ref<GliderMethods>) => {
    const {
      id,
      containerElement,
      arrows,
      dots,
      hasArrows,
      hasDots,
      scrollToSlide,
      scrollToPage,
      className,
      iconLeft,
      iconRight,
      children,
      onSlideVisible,
      onLoad,
      onAnimated,
      onRemove,
      onRefresh,
      onAdd,
      onDestroy,
      onSlideHidden,
      ...restProps
    } = props;

    const innerRef = React.useRef<HTMLDivElement>(null);
    const gliderRef = React.useRef<GliderMethods>();
    const autoId = useId(id);
    const nextBtnId = `glider-next-${autoId}`;
    const prevBtnId = `glider-prev-${autoId}`;
    const dotsId = `dots-${autoId}`;

    const [isReady, setIsReady] = React.useState(typeof autoId !== "undefined");

    React.useEffect(() => {
      setIsReady(true);
    }, [id]);

    const makeGliderOptions: () => Glider.Options = React.useCallback(
      () => ({
        ...restProps,
        arrows:
          (hasArrows && {
            next: (arrows && arrows.next) || `#${nextBtnId}`,
            prev: (arrows && arrows.prev) || `#${prevBtnId}`,
          }) ||
          undefined,
        dots: (hasDots && dots) || `#${dotsId}` || undefined,
      }),
      [
        restProps,
        hasArrows,
        arrows,
        nextBtnId,
        prevBtnId,
        hasDots,
        dots,
        dotsId,
      ]
    );

    // initialize the glider
    React.useLayoutEffect(() => {
      const { current } = innerRef;

      if (current && isReady) {
        if (!gliderRef.current) {
          const glider = new Glider(
            current,
            makeGliderOptions()
          ) as GliderMethods;

          gliderRef.current = glider;

          if (onLoad) {
            onLoad.call(
              glider,
              new CustomEvent("glider-loaded", {
                detail: { target: innerRef.current },
              })
            );
          }

          if (scrollToSlide) {
            glider.scrollItem(scrollToSlide - 1);
          } else if (scrollToPage) {
            glider.scrollItem(scrollToPage - 1, true);
          }
        }
      }
    }, [makeGliderOptions, scrollToPage, scrollToSlide, isReady, onLoad]);

    // remove event listeners when props change
    React.useEffect(() => {
      const { current } = innerRef;

      return () => {
        const removeEventListener = (
          event: string,
          fn: ((e: CustomEvent) => void) | undefined
        ) => {
          if (typeof fn === "function" && current) {
            current.removeEventListener(event, fn);
          }
        };

        removeEventListener("glider-slide-visible", onSlideVisible);
        removeEventListener("glider-animated", onAnimated);
        removeEventListener("glider-remove", onRemove);
        removeEventListener("glider-refresh", onRefresh);
        removeEventListener("glider-add", onAdd);
        removeEventListener("glider-destroy", onDestroy);
        removeEventListener("glider-slide-hidden", onSlideHidden);
      };
    }, [
      onAdd,
      onAnimated,
      onDestroy,
      onRefresh,
      onRemove,
      onSlideHidden,
      onSlideVisible,
    ]);

    // update event listeners
    React.useLayoutEffect(() => {
      const { current } = innerRef;

      if (current) {
        const addEventListener = (
          event: string,
          fn: ((e: CustomEvent) => void) | undefined
        ): void => {
          if (typeof fn === "function") {
            current.addEventListener(event, fn);
          }
        };

        addEventListener("glider-slide-visible", onSlideVisible);
        addEventListener("glider-animated", onAnimated);
        addEventListener("glider-remove", onRemove);
        addEventListener("glider-refresh", onRefresh);
        addEventListener("glider-add", onAdd);
        addEventListener("glider-destroy", onDestroy);
        addEventListener("glider-slide-hidden", onSlideHidden);
      }
    }, [
      onAdd,
      onAnimated,
      onDestroy,
      onRefresh,
      onRemove,
      onSlideHidden,
      onSlideVisible,
    ]);

    // when the props update, update the glider
    React.useEffect(() => {
      if (gliderRef.current && isReady) {
        gliderRef.current.setOption(makeGliderOptions(), true);
        gliderRef.current.refresh(true);
      }
    }, [makeGliderOptions, isReady]);

    React.useEffect(() => {
      const { current } = gliderRef;

      return () => {
        if (current) {
          current.destroy();
        }
      };
    }, []);

    // expose the glider instance to the user so they can call the methods too
    React.useImperativeHandle(ref, () => gliderRef.current as GliderMethods);

    const Element = containerElement || "div";

    return (
      <Element className="glider-contain">
        {props.hasArrows && !arrows && (
          <button
            type="button"
            className="glider-prev"
            aria-label="Previous"
            id={prevBtnId}
          >
            {iconLeft || "«"}
          </button>
        )}

        <div id={autoId} className={className} ref={innerRef}>
          {children}
        </div>

        {hasDots && !dots && <div id={dotsId} />}

        {props.hasArrows && !arrows && (
          <button
            type="button"
            className="glider-next"
            aria-label="Next"
            id={nextBtnId}
          >
            {iconRight || "»"}
          </button>
        )}
      </Element>
    );
  }
);

export default GliderComponent;

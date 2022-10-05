import * as React from "react";
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

    const autoId = React.useId();

    const prevButtonRef = React.useRef<HTMLButtonElement>(null);
    const nextButtonRef = React.useRef<HTMLButtonElement>(null);
    const dotsRef = React.useRef<HTMLDivElement>(null);
    const innerRef = React.useRef<HTMLDivElement>(null);
    const gliderRef = React.useRef<GliderMethods>();

    const makeGliderOptions: () => Glider.Options = React.useCallback(
      () => ({
        ...restProps,
        arrows:
          (hasArrows && {
            next: (arrows && arrows.next) || nextButtonRef.current,
            prev: (arrows && arrows.prev) || prevButtonRef.current,
          }) ||
          undefined,
        dots: (hasDots && dots) || dotsRef.current || undefined,
      }),
      [restProps, hasArrows, arrows, hasDots, dots]
    );

    // initialize the glider
    React.useLayoutEffect(() => {
      const { current } = innerRef;

      if (current) {
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
    }, [makeGliderOptions, scrollToPage, scrollToSlide, onLoad]);

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
      if (gliderRef.current) {
        gliderRef.current.setOption(makeGliderOptions(), true);
        gliderRef.current.refresh(true);
      }
    }, [makeGliderOptions]);

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
            ref={prevButtonRef}
          >
            {iconLeft || "«"}
          </button>
        )}

        <div id={id || autoId} className={className} ref={innerRef}>
          {children}
        </div>

        {hasDots && !dots && <div ref={dotsRef} />}

        {props.hasArrows && !arrows && (
          <button
            type="button"
            className="glider-next"
            aria-label="Next"
            ref={nextButtonRef}
          >
            {iconRight || "»"}
          </button>
        )}
      </Element>
    );
  }
);

export default GliderComponent;

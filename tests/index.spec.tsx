import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createRef, Ref } from "react";
import { GliderMethods } from "../src/types";
import GliderComponent from "../src/index";

describe("GliderComponent", () => {
  it("renders correctly with default props", () => {
    const { container } = render(
      <GliderComponent>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );
    expect(container.querySelector(".glider")).toBeInTheDocument();
  });

  it("renders arrows when hasArrows is true", () => {
    const { container } = render(
      <GliderComponent hasArrows>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );
    expect(container.querySelector(".glider-prev")).toBeInTheDocument();
    expect(container.querySelector(".glider-next")).toBeInTheDocument();
  });

  it("calls onLoad when the component is initialized", () => {
    const onLoadMock = jest.fn();
    render(
      <GliderComponent onLoad={onLoadMock}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );
    expect(onLoadMock).toHaveBeenCalled();
  });

  it("calls event listeners when events are triggered", () => {
    const onSlideVisibleMock = jest.fn();
    const onAnimatedMock = jest.fn();
    const { container } = render(
      <GliderComponent
        onSlideVisible={onSlideVisibleMock}
        onAnimated={onAnimatedMock}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );

    const gliderElement = container.querySelector(".glider-contain > div");
    if (gliderElement) {
      fireEvent(gliderElement, new CustomEvent("glider-slide-visible"));
      fireEvent(gliderElement, new CustomEvent("glider-animated"));
    }

    expect(onSlideVisibleMock).toHaveBeenCalled();
    expect(onAnimatedMock).toHaveBeenCalled();
  });

  it("exposes the glider instance via ref", () => {
    const ref: Ref<GliderMethods> = createRef();
    render(
      <GliderComponent ref={ref}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );
    expect(ref.current).not.toBeNull();
  });

  it("renders dots when hasDots is true", () => {
    const { container } = render(
      <GliderComponent hasDots>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </GliderComponent>
    );
    expect(container.querySelectorAll(".glider-dot")).toHaveLength(2);
  });

  it("renders dots in a custom element", () => {
    const { container } = render(
      <>
        <GliderComponent hasDots dots=".dots">
          <div>Slide 1</div>
          <div>Slide 2</div>
        </GliderComponent>
        <div className="dots" />
      </>
    );
    expect(container.querySelectorAll(".dots > .glider-dot")).toHaveLength(2);
  });
});

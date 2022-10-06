import * as React from "react";

import SingleItemGlider from "../examples/singleItemGlider";
import MultipleItemsGlider from "../examples/multipleItemsGlider";
import ResponsiveGlider from "../examples/responsiveGlider";
import FractionalSlidesGlider from "../examples/fractionalSlidesGlider";
import PerspectiveViewGlider from "../examples/perspectiveViewGlider";
import ScrollToGlider from "../examples/scrollToGlider";
import RefGlider from "../examples/gliderMethods";
import CustomEventsGlider from "../examples/customEvents";
import CustomElementArrowsGlider from "../examples/customElementArrows";
import RemountingGlider from "../examples/remounting";
import UpdatingPropsGlider from "../examples/updatingProps";
import AutoplayGlider from "../examples/autoplayGlider";
import SkipTrackGlider from "../examples/skipTrackGlider";

function Demos() {
  return (
    <div className="demos">
      <h2>Demos</h2>

      <div className="item">
        <h3>Unmounting / remounting</h3>
        <RemountingGlider />
      </div>

      {/* <div className="item">
        <h3>Multiple Items</h3>
        <MultipleItemsGlider />
      </div>
      <div className="item">
        <h3>Single Item with Scroll Lock</h3>
        <SingleItemGlider />
      </div>
      <div className="item">
        <h3>Responsive Glider</h3>
        <ResponsiveGlider />
      </div>
      <div className="item">
        <h3>Autoplay Glider</h3>
        <AutoplayGlider />
      </div>
      <div className="item">
        <h3>Updating Props</h3>
        <UpdatingPropsGlider />
      </div>
      <div className="item">
        <h3>
          <code>ref</code> exposes Glider methods
        </h3>
        <RefGlider />
      </div>
      <div className="item">
        <h3>Perspective View</h3>
        <PerspectiveViewGlider />
      </div>
      <div className="item">
        <h3>Scroll to slide #5</h3>
        <ScrollToGlider />
      </div>
      <div className="item">
        <h3>Fractional Slides</h3>
        <FractionalSlidesGlider />
      </div>
      <div className="item">
        <h3>Custom Events</h3>
        <CustomEventsGlider />
      </div>
      <div className="item">
        <h3>Custom Element Arrow</h3>
        <CustomElementArrowsGlider />
      </div>
      <div className="item">
        <h3>Unmounting / remounting</h3>
        <RemountingGlider />
      </div>
      <div className="item">
        <h3>Skip Track</h3>
        <SkipTrackGlider />
      </div> */}
    </div>
  );
}

export default Demos;

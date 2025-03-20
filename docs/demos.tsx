import DynamicDataGlider from "../examples/dynamicDataGlider";
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
        <h3>
          <a id="multiple_items" href="#multiple_items" className="anchor">
            Multiple Items
          </a>
        </h3>
        <MultipleItemsGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="single_item_with_scroll_lock"
            href="#single_item_with_scroll_lock"
            className="anchor"
          >
            Single Item with Scroll Lock
          </a>
        </h3>
        <SingleItemGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="responsive_glider"
            href="#responsive_glider"
            className="anchor"
          >
            Responsive Glider
          </a>
        </h3>
        <ResponsiveGlider />
      </div>
      <div className="item">
        <h3>
          <a id="autoplay_glider" href="#autoplay_glider" className="anchor">
            Autoplay Glider
          </a>
        </h3>
        <AutoplayGlider />
      </div>
      <div className="item">
        <h3>
          <a id="updating_props" href="#updating_props" className="anchor">
            Updating Props
          </a>
        </h3>
        <UpdatingPropsGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="ref_exposes_glider"
            href="#ref_exposes_glider"
            className="anchor"
          >
            <code>ref</code> exposes Glider methods
          </a>
        </h3>
        <RefGlider />
      </div>
      <div className="item">
        <h3>
          <a id="perspective_view" href="#perspective_view" className="anchor">
            Perspective View
          </a>
        </h3>
        <PerspectiveViewGlider />
      </div>
      <div className="item">
        <h3>
          <a id="scroll_to_slide" href="#scroll_to_slide" className="anchor">
            Scroll to slide #5
          </a>
        </h3>
        <ScrollToGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="fractional_slides"
            href="#fractional_slides"
            className="anchor"
          >
            Fractional Slides
          </a>
        </h3>
        <FractionalSlidesGlider />
      </div>
      <div className="item">
        <h3>
          <a id="custom_events" href="#custom_events" className="anchor">
            Custom Events
          </a>
        </h3>
        <CustomEventsGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="custom_element_arrow"
            href="#custom_element_arrow"
            className="anchor"
          >
            Custom Element Arrow
          </a>
        </h3>
        <CustomElementArrowsGlider />
      </div>
      <div className="item">
        <h3>
          <a
            id="unmounting_remounting"
            href="#unmounting_remounting"
            className="anchor"
          >
            Unmounting / remounting
          </a>
        </h3>
        <RemountingGlider />
      </div>
      <div className="item">
        <h3>
          <a id="skip_track" href="#skip_track" className="anchor">
            Skip Track
          </a>
        </h3>
        <SkipTrackGlider />
      </div>
      <div className="item">
        <h3>
          <a id="dynamic_data" href="#dynamic_data" className="anchor">
            Dynamic Data
          </a>
        </h3>
        <DynamicDataGlider />
      </div>
    </div>
  );
}

export default Demos;

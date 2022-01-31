import * as React from 'react';
import { DecoratorFn } from '@storybook/react';

import '../glider.defaults.css';
import { GliderComponent, GliderMethods } from '../src';

const styles = {
  width: '80%',
  margin: 'auto',
};

const Wrapper = ({ children, style }: any) => (
  <div style={style || styles}>{children}</div>
);

const createDummyPage = (style?: object): DecoratorFn => (storyFn) => {
  if (process.env.NODE_ENV === 'test') {
    return <div>{storyFn()}</div>;
  }

  return <Wrapper style={style}>{storyFn()}</Wrapper>;
};

interface PaneProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Pane: React.FC<PaneProps> = ({ children, style, className }) => (
  <div className={`glider-slide ${className ? className : ''}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const Template = (args) => (
  <GliderComponent className="gradient-outline" {...args}>
    <Pane>1</Pane>
    <Pane>2</Pane>
    <Pane>3</Pane>
    <Pane>4</Pane>
    <Pane>5</Pane>
    <Pane>6</Pane>
    <Pane>7</Pane>
    <Pane>8</Pane>
    <Pane>9</Pane>
    <Pane>10</Pane>
    <Pane>11</Pane>
    <Pane>12</Pane>
  </GliderComponent>
);

export const SingleItem = Template.bind({});
SingleItem.args = {
  slidesToShow: 1,
  hasArrows: true,
  hasDots: true,
};

export const MultipleItem = Template.bind({});
MultipleItem.args = {
  slidesToScroll: 5,
  slidesToShow: 5,
  hasArrows: true,
  hasDots: true,
};

export const ResponsiveSettingsScrollLockSupport = Template.bind({});
ResponsiveSettingsScrollLockSupport.args = {
  scrollLock: true,
  responsive: [
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ],
  slidesToShow: 1,
};
ResponsiveSettingsScrollLockSupport.storyName =
  'Responsive Settings / Scroll Lock Support';

export const FractionalSlides = Template.bind({});
FractionalSlides.args = {
  slidesToShow: 5.5,
};

/**
 * 'The CSS for this is not included in glider.js or this package. You can find it in .storybook/preview-head.html in the style tag. Please do not file bugs as I do not want to support this.',
 */
export const PerspectiveView = () => (
  <GliderComponent
    draggable
    hasArrows
    hasDots
    slidesToShow={5}
    slidesToScroll={1}
    className="glider-persp"
  >
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      1
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      2
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      3
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      4
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      5
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      6
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      7
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      8
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      9
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      10
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      11
    </Pane>
    <Pane className="gradient-outline" style={{ margin: 10 }}>
      12
    </Pane>
  </GliderComponent>
);
PerspectiveView.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const ScrollToSpecificSlidesOrPages = Template.bind({});
ScrollToSpecificSlidesOrPages.args = {
  slidesToShow: 5,
  scrollToSlide: 5,
  scrollToPage: 0,
  hasDots: true,
};
ScrollToSpecificSlidesOrPages.storyName = 'Scroll to specific slide';

export const RefExposesGliderMethods = (args) => {
  const gliderRef = React.useRef<GliderMethods>();

  return (
    <>
      <button onClick={() => gliderRef.current.destroy()}>Destroy!</button>
      <GliderComponent
        draggable
        hasArrows
        hasDots
        slidesToShow={5.5}
        slidesToScroll={1}
        ref={gliderRef}
        scrollToSlide={5}
        scrollToPage={0}
        className="gradient-outline"
        {...args}
      >
        <Pane>1</Pane>
        <Pane>2</Pane>
        <Pane>3</Pane>
        <Pane>4</Pane>
        <Pane>5</Pane>
        <Pane>6</Pane>
        <Pane>7</Pane>
        <Pane>8</Pane>
        <Pane>9</Pane>
        <Pane>10</Pane>
        <Pane>11</Pane>
        <Pane>12</Pane>
      </GliderComponent>
    </>
  );
};
RefExposesGliderMethods.parameters = {
  argTypes: {
    onDestroy: { action: 'onDestroy' },
    onLoad: { action: 'onLoad' },
  },
  controls: { hideNoControlsWarning: true, include: ['onLoad', 'onDestroy'] },
};

export const CustomEvents = (args) => (
  <GliderComponent
    draggable
    hasArrows
    hasDots
    slidesToScroll={5}
    slidesToShow={5}
    className="gradient-outline"
    onSlideVisible={(e) => {
      console.log('Slide Visible %s', e.detail.slide);
    }}
    onSlideHidden={(e) => {
      console.log('Slide Hidden %s', e.detail.slide);
    }}
    onRefresh={() => {
      console.log('Refresh');
    }}
    onLoad={() => {
      console.log('Loaded');
    }}
    {...args}
  >
    <Pane>1</Pane>
    <Pane>2</Pane>
    <Pane>3</Pane>
    <Pane>4</Pane>
    <Pane>5</Pane>
    <Pane>6</Pane>
    <Pane>7</Pane>
    <Pane>8</Pane>
    <Pane>9</Pane>
    <Pane>10</Pane>
    <Pane>11</Pane>
    <Pane>12</Pane>
  </GliderComponent>
);
CustomEvents.parameters = {
  argTypes: {
    onSlideVisible: { action: 'onSlideVisible' },
    onSlideHidden: { action: 'onSlideHidden' },
    onRefresh: { action: 'onRefresh' },
    onLoad: { action: 'onLoad' },
  },
  controls: {
    hideNoControlsWarning: true,
    include: ['onLoad', 'onSlideVisible', 'onSlideHidden', 'onRefresh'],
  },
};

export const MultipleGliders = () => (
  <>
    <GliderComponent
      draggable
      hasArrows
      hasDots
      slidesToShow={2}
      className="gradient-outline"
    >
      <Pane>1</Pane>
      <Pane>2</Pane>
      <Pane>3</Pane>
      <Pane>4</Pane>
      <Pane>5</Pane>
      <Pane>6</Pane>
    </GliderComponent>
    <GliderComponent
      draggable
      hasArrows
      hasDots
      slidesToShow={1}
      className="gradient-outline"
      arrows={{
        prev: '#buttonPrev',
        next: '#buttonNext',
      }}
    >
      <Pane>1</Pane>
      <Pane>2</Pane>
      <Pane>3</Pane>
      <Pane>4</Pane>
    </GliderComponent>
    <div style={{ position: 'relative' }}>
      <button
        id="buttonPrev"
        type="button"
        className="glider-prev"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.075 34.075">
          <path
            fill="#010002"
            d="M24.57 34.075a1.964 1.964 0 0 1-1.396-.577L8.11 18.432a1.972 1.972 0 0 1 0-2.79L23.174.578a1.973 1.973 0 1 1 2.791 2.79l-13.67 13.669 13.67 13.669a1.974 1.974 0 0 1-1.395 3.369z"
          />
        </svg>
      </button>
      <button
        id="buttonNext"
        type="button"
        className="glider-next"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.343 185.343">
          <path
            fill="#010002"
            d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
          />
        </svg>
      </button>
    </div>
  </>
);
MultipleGliders.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const CustomElementArrows = () => {
  const leftArrowEl = React.useRef<HTMLButtonElement>(null);
  const rightArrowEl = React.useRef<HTMLButtonElement>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, [leftArrowEl, rightArrowEl]);

  return (
    <>
      {isInitialized && (
        <GliderComponent
          draggable
          hasArrows
          hasDots
          slidesToShow={1}
          className="gradient-outline"
          arrows={{
            prev: leftArrowEl.current,
            next: rightArrowEl.current,
          }}
        >
          <Pane>1</Pane>
          <Pane>2</Pane>
          <Pane>3</Pane>
          <Pane>4</Pane>
        </GliderComponent>
      )}
      <div style={{ position: 'relative' }}>
        <button
          ref={leftArrowEl}
          type="button"
          className="glider-prev"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.075 34.075">
            <path
              fill="#010002"
              d="M24.57 34.075a1.964 1.964 0 0 1-1.396-.577L8.11 18.432a1.972 1.972 0 0 1 0-2.79L23.174.578a1.973 1.973 0 1 1 2.791 2.79l-13.67 13.669 13.67 13.669a1.974 1.974 0 0 1-1.395 3.369z"
            />
          </svg>
        </button>
        <button
          ref={rightArrowEl}
          type="button"
          className="glider-next"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.343 185.343">
            <path
              fill="#010002"
              d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
CustomElementArrows.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Playground = Template.bind({});

export default {
  decorators: [createDummyPage()],
  component: GliderComponent,
  args: {
    hasArrows: false,
    hasDots: false,
    draggable: false,
    dragVelocity: 3.3,
    propagateEvent: true,
    scrollPropagate: false,
    scrollLock: false,
    scrollToSlide: 0,
    scrollToPage: 0,
    slidesToShow: 4,
    slidesToSCroll: 1,
    itemWidth: 0,
    duration: 0.5,
  },
  argTypes: {
    onLoad: { action: 'onLoad' },
    onAnimated: { action: 'onAnimated' },
    onRemove: { action: 'onRemove' },
    onSlideVisible: { action: 'onSlideVisible' },
    onRefresh: { action: 'onRefresh' },
    onAdd: { action: 'onAdd' },
    onDestroy: { action: 'onDestroy' },
    onSlideHidden: { action: 'onSlideHidden' },
  },
  parameters: {
    controls: {
      include: [
        'onLoad',
        'onAnimated',
        'onRemove',
        'onSlideVisible',
        'onRefresh',
        'onAdd',
        'onDestroy',
        'onSlideHidden',
        'hasArrows',
        'hasDots',
        'draggable',
        'dragVelocity',
        'propagateEvent',
        'scrollPropagate',
        'scrollLock',
        'scrollToSlide',
        'scrollToPage',
        'slidesToShow',
        'slidesToSCroll',
        'itemWidth',
        'duration',
        'slidesToShow',
      ],
    },
  },
};

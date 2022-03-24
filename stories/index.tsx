/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import * as React from 'react';
import { storiesOf, DecoratorFn } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import '../glider.defaults.css';
// eslint-disable-next-line import/extensions
import Glider, { GliderMethods } from '../src';

const styles = {
  width: '80%',
  margin: 'auto',
};

const Wrapper = ({ children, style }) => (
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
  <div className={`glider-slide ${className || ''}`} style={style}>
    <h1>{children}</h1>
  </div>
);

storiesOf('Glider', module)
  .addDecorator(createDummyPage())
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <Glider
      draggable={boolean('draggable', false)}
      dragVelocity={number('dragVelocity', 3.3)}
      propagateEvent={boolean('propagateEvent', true)}
      scrollLock={boolean('scrollLock', false)}
      scrollLockDelay={number('scrollLockDelay', 250)}
      scrollPropagate={boolean('scrollPropagate', false)}
      hasArrows={boolean('hasArrows', false)}
      hasDots={boolean('hasDots', false)}
      scrollToSlide={number('scrollToSlide', 0)}
      scrollToPage={number('scrollToSlide', 0)}
      slidesToShow={number('slidesToShow', 1)}
      slidesToScroll={number('slidesToScroll', 1)}
      itemWidth={number('itemWidth', 0)}
      duration={number('duration', 0.5)}
      className="gradient-outline"
    >
      <Pane style={{ height: 'auto', width: 756 }}>1</Pane>
      <Pane style={{ height: 'auto', width: 756 }}>2</Pane>
      <Pane style={{ height: 'auto', width: 756 }}>3</Pane>
      <Pane style={{ height: 'auto', width: 756 }}>4</Pane>
    </Glider>
  ))
  .add('Single Item', () => (
    <Glider
      id="random-id"
      draggable
      hasArrows
      hasDots
      slidesToShow={1}
      className="gradient-outline"
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
    </Glider>
  ))
  .add('Multiple Item', () => (
    <Glider
      draggable
      hasArrows
      hasDots
      slidesToScroll={5}
      slidesToShow={5}
      className="gradient-outline"
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
    </Glider>
  ))
  .add('Responsive Settings / Scroll Lock Support', () => (
    <Glider
      hasArrows
      hasDots
      scrollLock
      slidesToShow={1}
      slidesToScroll={1}
      className="gradient-outline"
      responsive={[
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25,
          },
        },
      ]}
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
    </Glider>
  ))
  .add('Fractional Slides', () => (
    <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={5.5}
      slidesToScroll={1}
      className="gradient-outline"
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
    </Glider>
  ))
  .add(
    'Perspective View',
    () => (
      <Glider
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
      </Glider>
    ),
    {
      notes:
        'The CSS for this is not included in glider.js or this package. You can find it in .storybook/preview-head.html in the style tag. Please do not file bugs as I do not want to support this.',
    }
  )
  .add('Scroll to specific slides or pages', () => (
    <Glider
      draggable
      hasArrows
      hasDots
      slidesToShow={5.5}
      slidesToScroll={1}
      scrollToSlide={number('scrollToSlide', 5)}
      scrollToPage={number('scrollToPage', 0)}
      className="gradient-outline"
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
    </Glider>
  ))
  .add('Ref Exposes Glider Methods', () => {
    const gliderRef = React.useRef<GliderMethods>();

    return (
      <>
        <button type="button" onClick={() => gliderRef.current.destroy()}>
          Destroy!
        </button>
        <Glider
          draggable
          hasArrows
          hasDots
          slidesToShow={5.5}
          slidesToScroll={1}
          ref={gliderRef}
          scrollToSlide={number('scrollToSlide', 5)}
          scrollToPage={number('scrollToPage', 0)}
          className="gradient-outline"
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
        </Glider>
      </>
    );
  })
  .add('Custom Events', () => (
    <Glider
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
      onLoad={(e) => {
        console.log('Loaded', e.detail);
      }}
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
    </Glider>
  ))
  .add('Multiple Gliders', () => (
    <>
      <Glider
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
      </Glider>
      <Glider
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
      </Glider>
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
  ))
  .add('Custom Element Arrows', () => {
    const leftArrowEl = React.useRef<HTMLButtonElement>(null);
    const rightArrowEl = React.useRef<HTMLButtonElement>(null);
    const [isInitialized, setIsInitialized] = React.useState(false);

    React.useEffect(() => {
      setIsInitialized(Boolean(leftArrowEl.current && rightArrowEl.current));
    }, [leftArrowEl, rightArrowEl]);

    return (
      <>
        {isInitialized && (
          <Glider
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
          </Glider>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 185.343 185.343"
            >
              <path
                fill="#010002"
                d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
              />
            </svg>
          </button>
        </div>
      </>
    );
  })
  .add('Unmounting & remounting', () => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          Toggle
        </button>
        {isVisible ? (
          <div>
            <Glider
              draggable
              hasArrows
              hasDots
              slidesToShow={1}
              className="gradient-outline"
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
            </Glider>
          </div>
        ) : null}
      </div>
    );
  })
  .add('Updating props', () => {
    const [slidesToShow, setSlidesToShow] = React.useState(1);

    return (
      <div>
        Number of slides:
        <select
          value={slidesToShow}
          onChange={(e) => setSlidesToShow(parseInt(e.target.value, 10))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <Glider
          draggable
          hasArrows
          hasDots
          slidesToShow={slidesToShow}
          className="gradient-outline"
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
        </Glider>
      </div>
    );
  });

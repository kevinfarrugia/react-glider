import * as React from 'react';
import { storiesOf, DecoratorFn } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import '../glider.defaults.css';
import Glider, { GliderMethods } from '../src';

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
        <button onClick={() => gliderRef.current.destroy()}>Destroy!</button>
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
      onLoad={() => {
        console.log('Loaded');
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
          PREVIOUS
        </button>
        <button
          id="buttonNext"
          type="button"
          className="glider-next"
          aria-label="Next"
        >
          NEXT
        </button>
      </div>
    </>
  ));

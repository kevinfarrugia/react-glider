import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import '../glider.defaults.css';
import Glider from '../src';

const styles = {
  width: '80%',
  margin: 'auto'
};

const Wrapper = ({ children, style }: any) => (
  <div style={style || styles}>{children}</div>
);

const createDummyPage = (style?: object): StoryDecorator => storyFn => {
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
  <div className={`glider-slide ${className}`} style={style}>
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
      eventPropagate={boolean('eventPropagate', true)}
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
            duration: 0.25
          }
        }
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
        'The CSS for this is not included in glider.js or this package. You can find it in .storybook/preview-head.html in the style tag. Please do not file bugs as I do not want to support this.'
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
  ));

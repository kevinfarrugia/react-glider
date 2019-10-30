import * as React from 'react';
import * as Types from '../types/types';

// tslint:disable-next-line
import 'glider-js';

export default class GliderComponent extends React.Component<Types.IGliderProps> {
  private readonly ref: React.RefObject<HTMLDivElement>;
  private glider: any;

  public constructor(props: Types.IGliderProps) {
    super(props);
    this.ref = React.createRef();
  }

  public componentWillUpdate(nextProps: Types.IGliderProps) {
    // @ts-ignore
    this.glider.setOption({
      ...nextProps,
      arrows: nextProps.hasArrows
        ? {
            next:
              nextProps.arrows && nextProps.arrows.next
                ? nextProps.arrows.next
                : '.glider-next',
            prev:
              nextProps.arrows && nextProps.arrows.prev
                ? nextProps.arrows.prev
                : '.glider-prev'
          }
        : undefined,
      dots: nextProps.hasDots
        ? nextProps.dots
          ? nextProps.dots
          : '#dots'
        : undefined
    });

    this.glider.refresh(true);
  }

  public componentDidMount() {
    if (!this.ref.current) {
      return;
    }

    // @ts-ignore
    this.glider = new Glider(this.ref.current, {
      ...this.props,
      arrows: this.props.hasArrows
        ? {
            next:
              this.props.arrows && this.props.arrows.next
                ? this.props.arrows.next
                : '.glider-next',
            prev:
              this.props.arrows && this.props.arrows.prev
                ? this.props.arrows.prev
                : '.glider-prev'
          }
        : undefined,
      dots: this.props.hasDots
        ? this.props.dots
          ? this.props.dots
          : '#dots'
        : undefined
    });
    const addEventListener = (event: string, fn: any) => {
      if (typeof fn === 'function' && this.ref.current) {
        this.ref.current.addEventListener(event, fn);
      }
    };

    addEventListener('glider-slide-visible', this.props.onSlideVisible);
    addEventListener('glider-loaded', this.props.onLoad);
    addEventListener('glider-animated', this.props.onAnimated);
    addEventListener('glider-remove', this.props.onRemove);
    addEventListener('glider-refresh', this.props.onRefresh);
    addEventListener('glider-add', this.props.onAdd);
    addEventListener('glider-destroy', this.props.onDestroy);
    addEventListener('glider-slide-hidden', this.props.onSlideHidden);
  }

  public componentWillUnmount() {
    const removeEventListener = (event: string, fn: any) => {
      if (typeof fn === 'function' && this.ref.current) {
        this.ref.current.removeEventListener(event, fn);
      }
    };

    removeEventListener('glider-slide-visible', this.props.onSlideVisible);
    removeEventListener('glider-loaded', this.props.onLoad);
    removeEventListener('glider-animated', this.props.onAnimated);
    removeEventListener('glider-remove', this.props.onRemove);
    removeEventListener('glider-refresh', this.props.onRefresh);
    removeEventListener('glider-add', this.props.onAdd);
    removeEventListener('glider-destroy', this.props.onDestroy);
    removeEventListener('glider-slide-hidden', this.props.onSlideHidden);
  }

  private positionGlider() {
    if (this.props.scrollToSlide && this.glider) {
      this.glider.scrollItem(this.props.scrollToSlide - 1);
    } else if (this.props.scrollToPage && this.glider) {
      this.glider.scrollItem(this.props.scrollToPage - 1, true);
    }
  }

  public render() {
    this.positionGlider();

    return (
      <div className="glider-contain">
        {this.props.hasArrows && !this.props.arrows && (
          <button role="button" className="glider-prev" id="glider-prev">
            {this.props.iconLeft || '«'}
          </button>
        )}
        <div className={this.props.className} ref={this.ref}>
          {this.props.children}
        </div>
        {this.props.hasDots && !this.props.dots && (
          <div id="dots" className="glider-dots" />
        )}
        {this.props.hasArrows && !this.props.arrows && (
          <button role="button" className="glider-next" id="glider-next">
            {this.props.iconRight || '»'}
          </button>
        )}
      </div>
    );
  }
}

export { Types };

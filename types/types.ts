export interface IBreakPoint {
    breakpoint: number;
    settings: {
        slidesToShow: number | 'auto';
        slidesToScroll: number | 'auto';
        itemWidth: number;
        duration: number;
    };
}

export interface IGliderProps {
    children: React.ReactNode;
    hasArrows?: boolean;
    hasDots?: boolean;
    className?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    scrollToSlide?: number;
    scrollToPage?: number;
    addTrack?: boolean;

    /**
     * The number of slides to show in container
     * If this value is set to auto, it will be
     * automatically calculated based upon the number
     * of items able to fit within the container viewport.
     * This requires setting the itemWidth option.
     *
     * @default 1
     */
    slidesToShow?: number | 'auto';
    /**
     * The number of slides to scroll when arrow navigation
     * is used. If this value is set to auto, it will match
     * the value of slidesToScroll.
     *
     * @default 1
     */
    slidesToScroll?: number | 'auto';
    /** This value is ignored unless slidesToShow is set to auto, in which it is then required. */
    itemWidth?: number;
    /**
     * An aggravator used to control animation speed. Higher is slower!
     *
     * @default 0.5
     */
    duration?: number;
    /** An string containing the dot container selector */
    dots?: string;
    /** An object containing the prev/next arrows selectors */
    arrows?: {
        prev: string;
        next: string;
    };

    /**
     * If true, the list can be scrolled by click and dragging with the mouse
     *
     * @default false
     */
    draggable?: boolean;
    /**
     * How much to aggravate the velocity of the mouse dragging
     *
     * @default 3.3
     */
    dragVelocity?: number;

    /**
     * Whether or not to release the scroll events from the container
     *
     *  @default false
     */
    scrollPropagate?: boolean;
    /**
     * Whether or not Glider.js events should bubble (useful for binding events to all carousels)
     *
     * @default true
     */
    eventPropagate?: boolean;

    /**
     * If true, Glider.js will scroll to the nearest slide after any scroll interactions.
     *
     * @default false
     */
    scrollLock?: boolean;
    /**
     * how long to wait after scroll event before locking,
     * if too low, it might interrupt normal scrolling
     *
     * @default 250
     */
    scrollLockDelay?: number;

    /**
     * An object containing custom settings per provided breakpoint.
     * Glider.js breakpoints are mobile-first
     * be conscious of your ordering,
     */
    responsive?: IBreakPoint[];

    /** use any custom easing function, compatible with most easing plugins */
    easing?(x: number, t: number, b: number, c: number, d: number): number;

    /** Called after Glider.js is first initialized */
    onLoad?(context: any, event: Event): void;
    /** Called whenever a Glider.js paging animation is complete */
    onAnimated?(context: any, event: Event): void;
    /** Called whenever a Glider.js animation is complete */
    onRemove?(context: any, event: Event): void;
    /** Called whenever a slide a shown. Passed an object containing the slide index */
    onSlideVisible?(context: any, event: Event): void;
    /** Called whenever Glider.js refreshes it's elements or settings */
    onRefresh?(context: any, event: Event): void;
    /** Called whenever an item is added to Glider.js */
    onAdd?(context: any, event: Event): void;
    /** Called whenever a Glider.js is destroyed */
    onDestroy?(context: any, event: Event): void;
    /** Called whenever a slide a hidden. Passed an object containing the slide index */
    onSlideHidden?(context: any, event: Event): void;
}
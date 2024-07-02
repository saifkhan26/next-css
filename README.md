# 1. CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create complex and responsive layouts more easily.

Grid Containers and Items: Define a container as a grid with display: grid. Inside this container, all direct children become grid items.

```
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns of equal width */
  grid-template-rows: 100px 200px; /* Two rows with specific heights */
  gap: 10px; /* Space between grid items */
}
.grid-item {
  background-color: #ccc;
  border: 1px solid #333;
}
```
## Grid Template Areas: Assign names to grid areas and place grid items accordingly.

```
.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Fractional Units (fr): The fr unit represents a fraction of the available space in the grid container.

```
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 3 columns with 1:2:1 ratio */
}
```

## Auto-placement Algorithm: The grid auto-placement algorithm automatically places items into the next available grid cells.

```
    .grid-container {
      display: grid;
      grid-auto-flow: dense; /* Fill in gaps with smaller items */
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
```

# 2. Flexbox

Flexbox is a one-dimensional layout system that provides a more efficient way to lay out, align, and distribute space among items in a container.

    Flex Containers and Items: Define a flex container with display: flex.

```
.flex-container {
  display: flex;
  flex-direction: row; /* Default is row */
}
.flex-item {
  background-color: #ccc;
  padding: 10px;
}
```

Flex Direction, Wrap, and Flow: Control the direction and wrapping of flex items.

```
.flex-container {
  display: flex;
  flex-direction: column; /* Items stacked vertically */
  flex-wrap: wrap; /* Items wrap to next line */
}
```

Align-items, Justify-content, Align-self: Control alignment of flex items.

```
    .flex-container {
      display: flex;
      justify-content: space-between; /* Distribute items evenly */
      align-items: center; /* Align items vertically in the center */
    }
    .flex-item {
      align-self: flex-end; /* Align a single item at the end */
    }

```
# 3. CSS Custom Properties (Variables)

CSS Custom Properties allow you to define variables in CSS, which can be reused throughout your stylesheet.

    Defining and Using Variables: Create reusable CSS properties.

```
:root {
  --main-bg-color: #ffcc00;
  --main-text-color: #333;
}
.element {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}
```

Variable Scope: Variables are scoped by the cascading nature of CSS.

```
.component {
  --component-color: #00ccff;
}
.element {
  color: var(--component-color, var(--main-text-color));
}
```

# 4. CSS Animations and Transitions

CSS animations and transitions allow for dynamic visual effects.

    Keyframes: Define complex animations with keyframes.

```
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.animated-box {
  animation: slide 2s infinite alternate;
}
```

Transition Properties: Create smooth transitions between states.

```
.box {
  width: 100px;
  height: 100px;
  background-color: #333;
  transition: transform 0.5s ease, background-color 1s ease-in-out;
}
.box:hover {
  transform: scale(1.5);
  background-color: #555;
}
```

# 5. CSS Preprocessors (Sass, Less)

CSS preprocessors like Sass and Less extend CSS with features that make it more powerful and easier to write.

    Nesting: Write cleaner, more readable CSS with nested rules.

    scss

```
// Sass
.container {
  color: #333;
  .nested {
    background-color: lighten(#333, 20%);
  }
}
```
Many CSS properties start with the same prefix that acts as a kind of namespace. For example, font-family, font-size, and font-weight all start with font-. Sass makes this easier and less redundant by allowing property declarations to be nested. The outer property names are added to the inner, separated by a hyphen.

```
.enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }

  &:hover { font-size: 36px; }
}
```

```
.info-page {
  margin: auto {
    bottom: 10px;
    top: 2px;
  }
}
```

Parent Selector

```
.alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}
```

suffix
```
.accordion {
  background: #f4f4f4;

  &__copy {
    padding: 1rem 1.5rem 2rem 1.5rem;

    &--open {
      display: block;
    }
  }
}
```
would compile to something like this
```
.accordion {
  background: #f4f4f4;
}
.accordion__copy {
  padding: 1rem 1.5rem 2rem 1.5rem;
}
.accordion__copy--open {
  display: block;
}
```
Sass Variables
```
$global-variable: global value;

.content {
  $local-variable: local value;
  global: $global-variable;
  local: $local-variable;
}

.sidebar {
  global: $global-variable;

  // This would fail, because $local-variable isn't in scope:
  // local: $local-variable;
}
```
```
$variable: global value;

.content {
  $variable: local value;
  value: $variable;
}

.sidebar {
  value: $variable;
}
```
@if and @else
```
@use "sass:math";

@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

 @if $circle {
border-radius:50%;
  } @else {
border-radius:1rem;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```
@each
```
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}
```
```
$icons: ("eye": "\f112", "start": "\f12e", "stop": "\f12f");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}

```
@for
```
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}


```


Mixins and Functions: Reuse code and create dynamic styles.

```
// Sass
@mixin border-radius($radius) {
  border-radius: $radius;
}
.box {
  @include border-radius(10px);
}
```
```
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```
OR
```
=reset-list
  margin: 0
  padding: 0
  list-style: none

=horizontal-list
  +reset-list

  li
    display: inline-block
    margin:
      left: -2px
      right: 2em

nav ul
  +horizontal-list
```
```
@mixin square($size, $radius: 0) {
  width: $size;
  height: $size;

  @if $radius != 0 {
    border-radius: $radius;
  }
}

.avatar {
  @include square(100px, $radius: 4px);
}
```

Partials and Imports: Organize large CSS files into manageable chunks.

```
    // _variables.scss
    $primary-color: #333;

    // styles.scss
    @import 'variables';
    .container {
      color: $primary-color;
    }
```

# 6. Responsive Design Techniques

Responsive design ensures your website looks good on all devices.

    Media Queries: Adapt styles based on screen size, orientation, and resolution.

```
.responsive-container {
  width: 100%;
  height: 200px;
  background-color: #ccc;
}
@media (max-width: 600px) {
  .responsive-container {
    background-color: #999;
  }
}
```

Viewport Units: Use vw and vh for responsive dimensions.

```
    .full-height {
      height: 100vh;
    }
```

# 8. Advanced Selectors

Advanced selectors allow for more precise targeting of elements.

    Attribute Selectors: Style elements based on attributes and attribute values.

```
.container[data-status="active"] {
  background-color: #0f0;
}
```

Pseudo-elements and Pseudo-classes: Advanced use cases like ::before, ::after, :nth-child(), and :not().

```
    .container::before {
      content: "Prefix - ";
    }
    .item:not(:last-child) {
      margin-right: 10px;
    }
```

# 9. CSS Architecture (BEM, OOCSS, SMACSS)

CSS architecture methodologies help maintain large codebases.

    BEM (Block, Element, Modifier): Structuring CSS for maintainability.

```
.block__element--modifier {
  color: #333;
}
```

OOCSS (Object-Oriented CSS): Reusing styles across different components.

```
.button {
  padding: 10px;
  border-radius: 5px;
}
.button-primary {
  @extend .button;
  background-color: blue;
}
```

SMACSS (Scalable and Modular Architecture for CSS): Organizing styles in a modular way.

```
    .module {
      // Base styles
    }
    .module.is-active {
      // State styles
    }
    .module-layout {
      // Layout styles
    }
```

# 10. CSS Functions

CSS functions enable dynamic styling capabilities.

    calc(): Perform calculations within CSS.

```
.dynamic-width {
  width: calc(100% - 20px);
}
```

Custom Functions in Preprocessors: Create reusable functions in Sass or Less.

```
    // Sass
    @function px-to-rem($px) {
      @return $px / 16 * 1rem;
    }
    .text {
      font-size: px-to-rem(16);
    }
```

# 11. Advanced Typography

Advanced typography techniques improve the aesthetics and readability of text.

    Variable Fonts: Use a single font file that behaves like multiple fonts.

```
@font-face {
  font-family: 'VariableFont';
  src: url('path/to/variablefont.woff2') format('woff2');
}
.text {
  font-family: 'VariableFont';
  font-variation-settings: 'wght' 700;
}
```

Web Font Optimization: Techniques for loading and rendering web fonts efficiently.

```
<link rel="preload" href="path/to/font.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

# 12. CSS Performance Optimization

Optimize CSS for better performance and faster load times.

    Critical CSS: Extract above-the-fold CSS for faster rendering.

```
<style>
  /* Critical CSS inline */
  .header { /* Styles */ }
</style>
<link rel="stylesheet" href="styles.css">
```

Async Loading: Load CSS files asynchronously to improve page load performance.

```
    <link rel="preload" href="styles.css" as="style">
    <link rel="stylesheet" href="styles.css">
```

# 13. CSS Shapes and Clip-path

Create complex and non-rectangular layouts.

    Creating Non-rectangular Layouts: Use clip-path to create complex shapes.

```
.clipped {
  clip-path: circle(50%);
  width: 100px;
  height: 100px;
  background-color: #333;
}
```

CSS Shapes Module: Wrap content around custom shapes.

```
    .shape {
      shape-outside: circle(50%);
      float: left;
      width: 200px;
      height: 200px;
      background-color: #ccc;
    }
```

# 14. CSS Frameworks and Methodologies

Utilize CSS frameworks and methodologies to streamline development.

    Tailwind CSS: Utility-first CSS framework.

```
<div class="bg-blue-500 text-white p-4">Tailwind CSS</div>
```

# 15. CSS Logical Properties and Values

CSS logical properties adapt layouts for different writing modes and directions.

    Writing Modes and Direction: Adapt layouts for RTL languages.

```
.box {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
```

Logical Properties: Use logical properties for margin, padding, and borders.

```
    .box {
      margin-inline-start: 10px;
      padding-block-start: 20px;
    }
```

# 16. CSS Scroll Snap
Creating Snapping Scroll Effects

Implement scroll snapping for better user experiences on scrollable containers.

```
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
}

.scroll-item {
  scroll-snap-align: center;
}
```

# 17. CSS Filter Effects
Applying Filters to Elements

Use CSS filters to apply visual effects like blur, brightness, and contrast.

```
.filtered {
  filter: blur(5px) brightness(0.8) contrast(120%);
}
```

# 18. CSS Text Overflow
Handling Text Overflow

Manage overflowed text with ellipsis, clipping, or custom handling.

```
.text-overflow {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

# 19. CSS Grid Masonry Layout
Creating Masonry Layouts

Implement Pinterest-like masonry layouts using CSS Grid.

```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: masonry;
}
```

# 20. CSS Grid Alignment and Justification
Aligning Grid Items

Utilize grid alignment properties to precisely position items within a grid.

```
.grid-container {
  display: grid;
  align-items: stretch; /* Align items vertically */
  justify-items: start; /* Align items horizontally */
}
```

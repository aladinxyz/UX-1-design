// Variables
//
// Variables should follow the `$component-state-property-size` formula for
// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.

// Color system

$white:    #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #6c757d !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black:    #000 !default;

$grays: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$grays: map-merge(
  (
    "100": $gray-100,
    "200": $gray-200,
    "300": $gray-300,
    "400": $gray-400,
    "500": $gray-500,
    "600": $gray-600,
    "700": $gray-700,
    "800": $gray-800,
    "900": $gray-900
  ),
  $grays
);

$blue:    #0d6efd !default;
$indigo:  #6610f2 !default;
$purple:  #6f42c1 !default;
$pink:    #d63384 !default;
$red:     #dc3545 !default;
$orange:  #fd7e14 !default;
$yellow:  #ffc107 !default;
$green:   #28a745 !default;
$teal:    #20c997 !default;
$cyan:    #17a2b8 !default;

$colors: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$colors: map-merge(
  (
    "blue":       $blue,
    "indigo":     $indigo,
    "purple":     $purple,
    "pink":       $pink,
    "red":        $red,
    "orange":     $orange,
    "yellow":     $yellow,
    "green":      $green,
    "teal":       $teal,
    "cyan":       $cyan,
    "white":      $white,
    "gray":       $gray-600,
    "gray-dark":  $gray-800
  ),
  $colors
);

$primary:       $blue !default;
$secondary:     $gray-600 !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-800 !default;

$theme-colors: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$theme-colors: map-merge(
  (
    "primary":    $primary,
    "secondary":  $secondary,
    "success":    $success,
    "info":       $info,
    "warning":    $warning,
    "danger":     $danger,
    "light":      $light,
    "dark":       $dark
  ),
  $theme-colors
);

// Set a specific jump point for requesting color jumps
$theme-color-interval:      8% !default;

// The yiq lightness value that determines when the lightness of color changes from "dark" to "light". Acceptable values are between 0 and 255.
$yiq-contrasted-threshold:  150 !default;

// Customize the light and dark text colors for use in our YIQ color contrast function.
$yiq-text-dark:             $gray-900 !default;
$yiq-text-light:            $white !default;

// fusv-disable
$blue-100: tint-color($blue, 8) !default;
$blue-200: tint-color($blue, 6) !default;
$blue-300: tint-color($blue, 4) !default;
$blue-400: tint-color($blue, 2) !default;
$blue-500: $blue !default;
$blue-600: shade-color($blue, 2) !default;
$blue-700: shade-color($blue, 4) !default;
$blue-800: shade-color($blue, 6) !default;
$blue-900: shade-color($blue, 8) !default;

$indigo-100: tint-color($indigo, 8) !default;
$indigo-200: tint-color($indigo, 6) !default;
$indigo-300: tint-color($indigo, 4) !default;
$indigo-400: tint-color($indigo, 2) !default;
$indigo-500: $indigo !default;
$indigo-600: shade-color($indigo, 2) !default;
$indigo-700: shade-color($indigo, 4) !default;
$indigo-800: shade-color($indigo, 6) !default;
$indigo-900: shade-color($indigo, 8) !default;

$purple-100: tint-color($purple, 8) !default;
$purple-200: tint-color($purple, 6) !default;
$purple-300: tint-color($purple, 4) !default;
$purple-400: tint-color($purple, 2) !default;
$purple-500: $purple !default;
$purple-600: shade-color($purple, 2) !default;
$purple-700: shade-color($purple, 4) !default;
$purple-800: shade-color($purple, 6) !default;
$purple-900: shade-color($purple, 8) !default;

$pink-100: tint-color($pink, 8) !default;
$pink-200: tint-color($pink, 6) !default;
$pink-300: tint-color($pink, 4) !default;
$pink-400: tint-color($pink, 2) !default;
$pink-500: $pink !default;
$pink-600: shade-color($pink, 2) !default;
$pink-700: shade-color($pink, 4) !default;
$pink-800: shade-color($pink, 6) !default;
$pink-900: shade-color($pink, 8) !default;

$red-100: tint-color($red, 8) !default;
$red-200: tint-color($red, 6) !default;
$red-300: tint-color($red, 4) !default;
$red-400: tint-color($red, 2) !default;
$red-500: $red !default;
$red-600: shade-color($red, 2) !default;
$red-700: shade-color($red, 4) !default;
$red-800: shade-color($red, 6) !default;
$red-900: shade-color($red, 8) !default;

$orange-100: tint-color($orange, 8) !default;
$orange-200: tint-color($orange, 6) !default;
$orange-300: tint-color($orange, 4) !default;
$orange-400: tint-color($orange, 2) !default;
$orange-500: $orange !default;
$orange-600: shade-color($orange, 2) !default;
$orange-700: shade-color($orange, 4) !default;
$orange-800: shade-color($orange, 6) !default;
$orange-900: shade-color($orange, 8) !default;

$yellow-100: tint-color($yellow, 8) !default;
$yellow-200: tint-color($yellow, 6) !default;
$yellow-300: tint-color($yellow, 4) !default;
$yellow-400: tint-color($yellow, 2) !default;
$yellow-500: $yellow !default;
$yellow-600: shade-color($yellow, 2) !default;
$yellow-700: shade-color($yellow, 4) !default;
$yellow-800: shade-color($yellow, 6) !default;
$yellow-900: shade-color($yellow, 8) !default;

$green-100: tint-color($green, 8) !default;
$green-200: tint-color($green, 6) !default;
$green-300: tint-color($green, 4) !default;
$green-400: tint-color($green, 2) !default;
$green-500: $green !default;
$green-600: shade-color($green, 2) !default;
$green-700: shade-color($green, 4) !default;
$green-800: shade-color($green, 6) !default;
$green-900: shade-color($green, 8) !default;

$teal-100: tint-color($teal, 8) !default;
$teal-200: tint-color($teal, 6) !default;
$teal-300: tint-color($teal, 4) !default;
$teal-400: tint-color($teal, 2) !default;
$teal-500: $teal !default;
$teal-600: shade-color($teal, 2) !default;
$teal-700: shade-color($teal, 4) !default;
$teal-800: shade-color($teal, 6) !default;
$teal-900: shade-color($teal, 8) !default;

$cyan-100: tint-color($cyan, 8) !default;
$cyan-200: tint-color($cyan, 6) !default;
$cyan-300: tint-color($cyan, 4) !default;
$cyan-400: tint-color($cyan, 2) !default;
$cyan-500: $cyan !default;
$cyan-600: shade-color($cyan, 2) !default;
$cyan-700: shade-color($cyan, 4) !default;
$cyan-800: shade-color($cyan, 6) !default;
$cyan-900: shade-color($cyan, 8) !default;
// fusv-enable

// Characters which are escaped by the escape-svg function
$escaped-characters: (
  ("<","%3c"),
  (">","%3e"),
  ("#","%23"),
  ("(","%28"),
  (")","%29"),
) !default;

// Options
//
// Quickly modify global styling by enabling or disabling optional features.

$enable-caret:                                true !default;
$enable-rounded:                              true !default;
$enable-shadows:                              false !default;
$enable-gradients:                            false !default;
$enable-transitions:                          true !default;
$enable-prefers-reduced-motion-media-query:   true !default;
$enable-grid-classes:                         true !default;
$enable-pointer-cursor-for-buttons:           true !default;
$enable-rfs:                                  true !default;
$enable-validation-icons:                     true !default;
$enable-deprecation-messages:                 true !default;


// Spacing
//
// Control the default styling of most Bootstrap elements by modifying these
// variables. Mostly focused on spacing.
// You can add more entries to the $spacers map, should you need more variation.

$spacer: 1rem !default;
$spacers: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$spacers: map-merge(
  (
    0: 0,
    1: $spacer * .25,
    2: $spacer * .5,
    3: $spacer,
    4: $spacer * 1.5,
    5: $spacer * 3,
  ),
  $spacers
);

$negative-spacers: negativify-map($spacers) !default;

// Body
//
// Settings for the `<body>` element.

$body-bg:                   $white !default;
$body-color:                $gray-900 !default;
$body-text-align:           null !default;


// Links
//
// Style anchor elements.

$link-color:                              $primary !default;
$link-decoration:                         none !default;
$link-hover-color:                        darken($link-color, 15%) !default;
$link-hover-decoration:                   underline !default;
// Darken percentage for links with `.text-*` class (e.g. `.text-success`)
$emphasized-link-hover-darken-percentage: 15% !default;

$stretched-link-pseudo-element:           after !default;
$stretched-link-z-index:                  1 !default;

// Paragraphs
//
// Style p element.

$paragraph-margin-bottom:   1rem !default;


// Grid breakpoints
//
// Define the minimum dimensions at which your layout will change,
// adapting to different screen sizes, for use in media queries.

$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;

@include _assert-ascending($grid-breakpoints, "$grid-breakpoints");
@include _assert-starts-at-zero($grid-breakpoints, "$grid-breakpoints");


// Grid containers
//
// Define the maximum width of `.container` for different screen sizes.

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
) !default;

@include _assert-ascending($container-max-widths, "$container-max-widths");


// Grid columns
//
// Set the number of columns and specify the width of the gutters.

$grid-columns:                12 !default;
$grid-gutter-width:           30px !default;
$grid-row-columns:            6 !default;


// Container padding

$container-padding-x: $grid-gutter-width / 2 !default;


// Components
//
// Define common padding and border radius sizes and more.

$border-width:                1px !default;
$border-color:                $gray-300 !default;

$border-radius:               .25rem !default;
$border-radius-lg:            .3rem !default;
$border-radius-sm:            .2rem !default;

$rounded-pill:                50rem !default;

$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;
$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;
$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;
$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;

$component-active-color:      $white !default;
$component-active-bg:         $primary !default;

$caret-width:                 .3em !default;
$caret-vertical-align:        $caret-width * .85 !default;
$caret-spacing:               $caret-width * .85 !default;

$transition-base:             all .2s ease-in-out !default;
$transition-fade:             opacity .15s linear !default;
$transition-collapse:         height .35s ease !default;

$embed-responsive-aspect-ratios: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$embed-responsive-aspect-ratios: map-merge(
  (
    "21by9": (
      x: 21,
      y: 9
    ),
    "16by9": (
      x: 16,
      y: 9
    ),
    "4by3": (
      x: 4,
      y: 3
    ),
    "1by1": (
      x: 1,
      y: 1
    )
  ),
  $embed-responsive-aspect-ratios
);

// Typography
//
// Font, line-height, and color for body text, headings, and more.

// stylelint-disable value-keyword-case
$font-family-sans-serif:      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$font-family-base:            $font-family-sans-serif !default;
// stylelint-enable value-keyword-case

// $font-size-root effects the value of `rem`, which is used for as well font sizes, paddings and margins
// $font-size-base effects the font size of the body text
$font-size-root:              null !default;
$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`
$font-size-lg:                $font-size-base * 1.25 !default;
$font-size-sm:                $font-size-base * .875 !default;

$font-weight-lighter:         lighter !default;
$font-weight-light:           300 !default;
$font-weight-normal:          400 !default;
$font-weight-bold:            700 !default;
$font-weight-bolder:          bolder !default;

$font-weight-base:            $font-weight-normal !default;

$line-height-base:            1.5 !default;
$line-height-lg:              2 !default;
$line-height-sm:              1.25 !default;

$h1-font-size:                $font-size-base * 2.5 !default;
$h2-font-size:                $font-size-base * 2 !default;
$h3-font-size:                $font-size-base * 1.75 !default;
$h4-font-size:                $font-size-base * 1.5 !default;
$h5-font-size:                $font-size-base * 1.25 !default;
$h6-font-size:                $font-size-base !default;

$headings-margin-bottom:      $spacer / 2 !default;
$headings-font-family:        null !default;
$headings-font-style:         null !default;
$headings-font-weight:        500 !default;
$headings-line-height:        1.2 !default;
$headings-color:              null !default;

$display1-size:               6rem !default;
$display2-size:               5.5rem !default;
$display3-size:               4.5rem !default;
$display4-size:               3.5rem !default;

$display1-weight:             300 !default;
$display2-weight:             300 !default;
$display3-weight:             300 !default;
$display4-weight:             300 !default;
$display-line-height:         $headings-line-height !default;

$lead-font-size:              $font-size-base * 1.25 !default;
$lead-font-weight:            300 !default;

$small-font-size:             .875em !default;

$sub-sup-font-size:           .75em !default;

$text-muted:                  $gray-600 !default;

$initialism-font-size:        $small-font-size !default;

$blockquote-small-color:      $gray-600 !default;
$blockquote-small-font-size:  $small-font-size !default;
$blockquote-font-size:        $font-size-base * 1.25 !default;

$hr-color:                    inherit !default;
$hr-height:                   $border-width !default;
$hr-opacity:                  .25 !default;

$legend-margin-bottom:        .5rem !default;
$legend-font-size:            1.5rem !default;
$legend-font-weight:          null !default;

$mark-padding:                .2em !default;

$dt-font-weight:              $font-weight-bold !default;

$nested-kbd-font-weight:      $font-weight-bold !default;

$list-inline-padding:         .5rem !default;

$mark-bg:                     #fcf8e3 !default;

$hr-margin-y:                 $spacer !default;


// Tables
//
// Customizes the `.table` component with basic values, each used across all table variations.

$table-cell-padding:          .5rem !default;
$table-cell-padding-sm:       .25rem !default;

$table-cell-vertical-align:   top !default;

$table-color:                 $body-color !default;
$table-bg:                    null !default;
$table-accent-bg:             rgba($black, .05) !default;
$table-hover-color:           $table-color !default;
$table-hover-bg:              rgba($black, .075) !default;
$table-active-bg:             $table-hover-bg !default;

$table-border-width:          $border-width !default;
$table-border-color:          $border-color !default;

$table-head-bg:               $gray-200 !default;
$table-head-color:            $gray-700 !default;
$table-head-border-color:     $gray-700 !default;

$table-dark-color:            $white !default;
$table-dark-bg:               $gray-800 !default;
$table-dark-accent-bg:        rgba($white, .05) !default;
$table-dark-hover-color:      $table-dark-color !default;
$table-dark-hover-bg:         rgba($white, .075) !default;
$table-dark-border-color:     lighten($table-dark-bg, 7.5%) !default;

$table-striped-order:         odd !default;

$table-caption-color:         $text-muted !default;

$table-bg-level:              -9 !default;
$table-border-level:          -6 !default;


// Buttons + Forms
//
// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.

$input-btn-padding-y:         .375rem !default;
$input-btn-padding-x:         .75rem !default;
$input-btn-font-family:       null !default;
$input-btn-font-size:         $font-size-base !default;
$input-btn-line-height:       $line-height-base !default;

$input-btn-focus-width:       .2rem !default;
$input-btn-focus-color:       rgba($component-active-bg, .25) !default;
$input-btn-focus-box-shadow:  0 0 0 $input-btn-focus-width $input-btn-focus-color !default;

$input-btn-padding-y-sm:      .25rem !default;
$input-btn-padding-x-sm:      .5rem !default;
$input-btn-font-size-sm:      $font-size-sm !default;

$input-btn-padding-y-lg:      .5rem !default;
$input-btn-padding-x-lg:      1rem !default;
$input-btn-font-size-lg:      $font-size-lg !default;

$input-btn-border-width:      $border-width !default;


// Buttons
//
// For each of Bootstrap's buttons, define text, background, and border color.

$btn-padding-y:               $input-btn-padding-y !default;
$btn-padding-x:               $input-btn-padding-x !default;
$btn-font-family:             $input-btn-font-family !default;
$btn-font-size:               $input-btn-font-size !default;
$btn-line-height:             $input-btn-line-height !default;
$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping

$btn-padding-y-sm:            $input-btn-padding-y-sm !default;
$btn-padding-x-sm:            $input-btn-padding-x-sm !default;
$btn-font-size-sm:            $input-btn-font-size-sm !default;

$btn-padding-y-lg:            $input-btn-padding-y-lg !default;
$btn-padding-x-lg:            $input-btn-padding-x-lg !default;
$btn-font-size-lg:            $input-btn-font-size-lg !default;

$btn-border-width:            $input-btn-border-width !default;

$btn-font-weight:             $font-weight-normal !default;
$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;
$btn-focus-width:             $input-btn-focus-width !default;
$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;
$btn-disabled-opacity:        .65 !default;
$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;

$btn-link-color:              $link-color !default;
$btn-link-hover-color:        $link-hover-color !default;
$btn-link-disabled-color:     $gray-600 !default;

$btn-block-spacing-y:         .5rem !default;

// Allows for customizing button radius independently from global border radius
$btn-border-radius:           $border-radius !default;
$btn-border-radius-lg:        $border-radius-lg !default;
$btn-border-radius-sm:        $border-radius-sm !default;

$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;


// Forms

$label-margin-bottom:                   .5rem !default;

$input-padding-y:                       $input-btn-padding-y !default;
$input-padding-x:                       $input-btn-padding-x !default;
$input-font-family:                     $input-btn-font-family !default;
$input-font-size:                       $input-btn-font-size !default;
$input-font-weight:                     $font-weight-base !default;
$input-line-height:                     $input-btn-line-height !default;

$input-padding-y-sm:                    $input-btn-padding-y-sm !default;
$input-padding-x-sm:                    $input-btn-padding-x-sm !default;
$input-font-size-sm:                    $input-btn-font-size-sm !default;

$input-padding-y-lg:                    $input-btn-padding-y-lg !default;
$input-padding-x-lg:                    $input-btn-padding-x-lg !default;
$input-font-size-lg:                    $input-btn-font-size-lg !default;

$input-bg:                              $white !default;
$input-disabled-bg:                     $gray-200 !default;
$input-disabled-border-color:           null !default;

$input-color:                           $gray-700 !default;
$input-border-color:                    $gray-400 !default;
$input-border-width:                    $input-btn-border-width !default;
$input-box-shadow:                      $box-shadow-inset !default;

$input-border-radius:                   $border-radius !default;
$input-border-radius-lg:                $border-radius-lg !default;
$input-border-radius-sm:                $border-radius-sm !default;

$input-focus-bg:                        $input-bg !default;
$input-focus-border-color:              lighten($component-active-bg, 25%) !default;
$input-focus-color:                     $input-color !default;
$input-focus-width:                     $input-btn-focus-width !default;
$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;

$input-placeholder-color:               $gray-600 !default;
$input-plaintext-color:                 $body-color !default;

$input-height-border:                   $input-border-width * 2 !default;

$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;
$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;
$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y / 2) !default;

$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;
$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;
$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;

$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;


$form-check-input-width:                  1.25em !default;
$form-check-min-height:                   $font-size-base * $line-height-base !default;
$form-check-padding-left:                 $form-check-input-width + .5em !default;
$form-check-margin-bottom:                .125rem !default;
$form-check-label-cursor:                 null !default;

$form-check-input-active-filter:          brightness(90%) !default;

$form-check-input-bg:                     $body-bg !default;
$form-check-input-border:                 1px solid rgba(0, 0, 0, .25) !default;
$form-check-input-border-radius:          .25em !default;
$form-check-radio-border-radius:          50% !default;
$form-check-input-focus-border:           $input-focus-border-color !default;
$form-check-input-focus-box-shadow:       $input-btn-focus-box-shadow !default;

$form-check-input-checked-color:          $component-active-color !default;
$form-check-input-checked-bg-color:       $component-active-bg !default;
$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;
$form-check-input-checked-bg-repeat:      no-repeat !default;
$form-check-input-checked-bg-position:    center center !default;
$form-check-input-checked-bg-size:        1em !default;
$form-check-input-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M4 8.5L6.5 11l6-6'/></svg>") !default;
$form-check-radio-checked-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>") !default;

$form-check-input-indeterminate-color:          $component-active-color !default;
$form-check-input-indeterminate-bg-color:       $component-active-bg !default;
$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;
$form-check-input-indeterminate-bg-repeat:      no-repeat !default;
$form-check-input-indeterminate-bg-position:    center center !default;
$form-check-input-indeterminate-bg-size:        1em !default;
$form-check-input-indeterminate-bg-image:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 8h6'/></svg>") !default;

$form-switch-color:               rgba(0, 0, 0, .25) !default;
$form-switch-width:               2em !default;
$form-switch-padding-left:        $form-switch-width + .5em !default;
$form-switch-bg-image:            url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>") !default;
$form-switch-bg-size:             contain !default;
$form-switch-border-radius:       $form-switch-width !default;
$form-switch-transition:          .2s ease-in-out !default;
$form-switch-transition-property: background-position, background-color !default;

$form-switch-focus-color:         hsla(211, 100%, 75%, 1) !default;
$form-switch-focus-bg-image:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>") !default;

$form-switch-checked-color:       $component-active-color !default;
$form-switch-checked-bg-image:    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>") !default;
$form-switch-checked-bg-position: right center !default;

$form-text-margin-top:                  .25rem !default;

$form-check-inline-margin-right:        1rem !default;

$form-check-input-margin-x:             .25rem !default;

$form-grid-gutter-width:                10px !default;

$input-group-addon-color:               $input-color !default;
$input-group-addon-bg:                  $gray-200 !default;
$input-group-addon-border-color:        $input-border-color !default;


$form-select-padding-y:             $input-padding-y !default;
$form-select-padding-x:             $input-padding-x !default;
$form-select-font-family:           $input-font-family !default;
$form-select-font-size:             $input-font-size !default;
$form-select-height:                $input-height !default;
$form-select-indicator-padding:     1rem !default; // Extra padding to account for the presence of the background-image based indicator
$form-select-font-weight:           $input-font-weight !default;
$form-select-line-height:           $input-line-height !default;
$form-select-color:                 $input-color !default;
$form-select-disabled-color:        $gray-600 !default;
$form-select-bg:                    $input-bg !default;
$form-select-disabled-bg:           $gray-200 !default;
$form-select-disabled-border-color: $input-disabled-border-color !default;
$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions
$form-select-indicator-color:       $gray-800 !default;
$form-select-indicator:             url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>") !default;

$form-select-background:            no-repeat right $form-select-padding-x center / $form-select-bg-size !default; // Used so we can have multiple background elements (e.g., arrow and feedback icon)

$form-select-feedback-icon-padding-right: add(1em * .75, (2 * $form-select-padding-y * .75) + $form-select-padding-x + $form-select-indicator-padding) !default;
$form-select-feedback-icon-position:      center right ($form-select-padding-x + $form-select-indicator-padding) !default;
$form-select-feedback-icon-size:          $input-height-inner-half $input-height-inner-half !default;

$form-select-border-width:        $input-border-width !default;
$form-select-border-color:        $input-border-color !default;
$form-select-border-radius:       $border-radius !default;
$form-select-box-shadow:          $box-shadow-inset !default;

$form-select-focus-border-color:  $input-focus-border-color !default;
$form-select-focus-width:         $input-focus-width !default;
$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;

$form-select-padding-y-sm:        $input-padding-y-sm !default;
$form-select-padding-x-sm:        $input-padding-x-sm !default;
$form-select-font-size-sm:        $input-font-size-sm !default;
$form-select-height-sm:           $input-height-sm !default;

$form-select-padding-y-lg:        $input-padding-y-lg !default;
$form-select-padding-x-lg:        $input-padding-x-lg !default;
$form-select-font-size-lg:        $input-font-size-lg !default;
$form-select-height-lg:           $input-height-lg !default;

$form-range-track-width:          100% !default;
$form-range-track-height:         .5rem !default;
$form-range-track-cursor:         pointer !default;
$form-range-track-bg:             $gray-300 !default;
$form-range-track-border-radius:  1rem !default;
$form-range-track-box-shadow:     $box-shadow-inset !default;

$form-range-thumb-width:                   1rem !default;
$form-range-thumb-height:                  $form-range-thumb-width !default;
$form-range-thumb-bg:                      $component-active-bg !default;
$form-range-thumb-border:                  0 !default;
$form-range-thumb-border-radius:           1rem !default;
$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;
$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;
$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in IE/Edge
$form-range-thumb-active-bg:               lighten($component-active-bg, 35%) !default;
$form-range-thumb-disabled-bg:             $gray-500 !default;
$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;

$form-file-height:                $input-height !default;
$form-file-focus-border-color:    $input-focus-border-color !default;
$form-file-focus-box-shadow:      $input-focus-box-shadow !default;
$form-file-disabled-bg:           $input-disabled-bg !default;
$form-file-disabled-border-color: $input-disabled-border-color !default;

$form-file-padding-y:             $input-padding-y !default;
$form-file-padding-x:             $input-padding-x !default;
$form-file-line-height:           $input-line-height !default;
$form-file-font-family:           $input-font-family !default;
$form-file-font-weight:           $input-font-weight !default;
$form-file-color:                 $input-color !default;
$form-file-bg:                    $input-bg !default;
$form-file-border-width:          $input-border-width !default;
$form-file-border-color:          $input-border-color !default;
$form-file-border-radius:         $input-border-radius !default;
$form-file-box-shadow:            $input-box-shadow !default;
$form-file-button-color:          $form-file-color !default;
$form-file-button-bg:             $input-group-addon-bg !default;


// Form validation

$form-feedback-margin-top:          $form-text-margin-top !default;
$form-feedback-font-size:           $small-font-size !default;
$form-feedback-valid-color:         $success !default;
$form-feedback-invalid-color:       $danger !default;

$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;
$form-feedback-icon-valid:          url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>") !default;
$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;
$form-feedback-icon-invalid:        url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>") !default;

$form-validation-states: () !default;
// stylelint-disable-next-line scss/dollar-variable-default
$form-validation-states: map-merge(
  (
    "valid": (
      "color": $form-feedback-valid-color,
      "icon": $form-feedback-icon-valid
    ),
    "invalid": (
      "color": $form-feedback-invalid-color,
      "icon": $form-feedback-icon-invalid
    ),
  ),
  $form-validation-states
);

// Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.

$zindex-dropdown:                   1000 !default;
$zindex-sticky:                     1020 !default;
$zindex-fixed:                      1030 !default;
$zindex-modal-backdrop:             1040 !default;
$zindex-modal:                      1050 !default;
$zindex-popover:                    1060 !default;
$zindex-tooltip:                    1070 !default;


// Navs

$nav-link-padding-y:                .5rem !default;
$nav-link-padding-x:                1rem !default;
$nav-link-disabled-color:           $gray-600 !default;

$nav-tabs-border-color:             $gray-300 !default;
$nav-tabs-border-width:             $border-width !default;
$nav-tabs-border-radius:            $border-radius !default;
$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;
$nav-tabs-link-active-color:        $gray-700 !default;
$nav-tabs-link-active-bg:           $body-bg !default;
$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;

$nav-pills-border-radius:           $border-radius !default;
$nav-pills-link-active-color:       $component-active-color !default;
$nav-pills-link-active-bg:          $component-active-bg !default;


// Navbar

$navbar-padding-y:                  $spacer / 2 !default;
$navbar-padding-x:                  null !default;

$navbar-nav-link-padding-x:         .5rem !default;

$navbar-brand-font-size:            $font-size-lg !default;
// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link
$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;
$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;
$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) / 2 !default;
$navbar-brand-margin-right:         1rem !default;

$navbar-toggler-padding-y:          .25rem !default;
$navbar-toggler-padding-x:          .75rem !default;
$navbar-toggler-font-size:          $font-size-lg !default;
$navbar-toggler-border-radius:      $btn-border-radius !default;
$navbar-toggler-focus-width:        $btn-focus-width !default;
$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;

$navbar-dark-color:                 rgba($white, .55) !default;
$navbar-dark-hover-color:           rgba($white, .75) !default;
$navbar-dark-active-color:          $white !default;
$navbar-dark-disabled-color:        rgba($white, .25) !default;
$navbar-dark-toggler-icon-bg:       url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-dark-toggler-border-color:  rgba($white, .1) !default;

$navbar-light-color:                rgba($black, .55) !default;
$navbar-light-hover-color:          rgba($black, .7) !default;
$navbar-light-active-color:         rgba($black, .9) !default;
$navbar-light-disabled-color:       rgba($black, .3) !default;
$navbar-light-toggler-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !default;
$navbar-light-toggler-border-color: rgba($black, .1) !default;

$navbar-light-brand-color:                $navbar-light-active-color !default;
$navbar-light-brand-hover-color:          $navbar-light-active-color !default;
$navbar-dark-brand-color:                 $navbar-dark-active-color !default;
$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;


// Dropdowns
//
// Dropdown menu container and contents.

$dropdown-min-width:                10rem !default;
$dropdown-padding-y:                .5rem !default;
$dropdown-spacer:                   .125rem !default;
$dropdown-font-size:                $font-size-base !default;
$dropdown-color:                    $body-color !default;
$dropdown-bg:                       $white !default;
$dropdown-border-color:             rgba($black, .15) !default;
$dropdown-border-radius:            $border-radius !default;
$dropdown-border-width:             $border-width !default;
$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;
$dropdown-divider-bg:               $gray-200 !default;
$dropdown-divider-margin-y:         $spacer / 2 !default;
$dropdown-box-shadow:               $box-shadow !default;

$dropdown-link-color:               $gray-900 !default;
$dropdown-link-hover-color:         darken($gray-900, 5%) !default;
$dropdown-link-hover-bg:            $gray-100 !default;

$dropdown-link-active-color:        $component-active-color !default;
$dropdown-link-active-bg:           $component-active-bg !default;

$dropdown-link-disabled-color:      $gray-600 !default;

$dropdown-item-padding-y:           .25rem !default;
$dropdown-item-padding-x:           1.5rem !default;

$dropdown-header-color:             $gray-600 !default;


// Pagination

$pagination-padding-y:              .375rem !default;
$pagination-padding-x:              .75rem !default;
$pagination-padding-y-sm:           .25rem !default;
$pagination-padding-x-sm:           .5rem !default;
$pagination-padding-y-lg:           .75rem !default;
$pagination-padding-x-lg:           1.5rem !default;

$pagination-color:                  $link-color !default;
$pagination-bg:                     $white !default;
$pagination-border-width:           $border-width !default;
$pagination-border-radius:          $border-radius !default;
$pagination-margin-left:            -$pagination-border-width !default;
$pagination-border-color:           $gray-300 !default;

$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;
$pagination-focus-outline:          0 !default;

$pagination-hover-color:            $link-hover-color !default;
$pagination-hover-bg:               $gray-200 !default;
$pagination-hover-border-color:     $gray-300 !default;

$pagination-active-color:           $component-active-color !default;
$pagination-active-bg:              $component-active-bg !default;
$pagination-active-border-color:    $pagination-active-bg !default;

$pagination-disabled-color:         $gray-600 !default;
$pagination-disabled-bg:            $white !default;
$pagination-disabled-border-color:  $gray-300 !default;


// Cards

$card-spacer-y:                     1.25rem !default;
$card-spacer-x:                     1.25rem !default;
$card-title-spacer-y:               .75rem !default;
$card-border-width:                 $border-width !default;
$card-border-radius:                $border-radius !default;
$card-border-color:                 rgba($black, .125) !default;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;
$card-cap-padding-y:                .75rem !default;
$card-cap-padding-x:                1.25rem !default;
$card-cap-bg:                       rgba($black, .03) !default;
$card-cap-color:                    null !default;
$card-height:                       null !default;
$card-color:                        null !default;
$card-bg:                           $white !default;

$card-img-overlay-padding:          1.25rem !default;

$card-group-margin:                 $grid-gutter-width / 2 !default;
$card-deck-margin:                  $card-group-margin !default;


// Tooltips

$tooltip-font-size:                 $font-size-sm !default;
$tooltip-max-width:                 200px !default;
$tooltip-color:                     $white !default;
$tooltip-bg:                        $black !default;
$tooltip-border-radius:             $border-radius !default;
$tooltip-opacity:                   .9 !default;
$tooltip-padding-y:                 .25rem !default;
$tooltip-padding-x:                 .5rem !default;
$tooltip-margin:                    0 !default;

$tooltip-arrow-width:               .8rem !default;
$tooltip-arrow-height:              .4rem !default;
$tooltip-arrow-color:               $tooltip-bg !default;

// Form tooltips must come after regular tooltips
$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;
$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;
$form-feedback-tooltip-font-size:     $tooltip-font-size !default;
$form-feedback-tooltip-line-height:   null !default;
$form-feedback-tooltip-opacity:       $tooltip-opacity !default;
$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;


// Popovers

$popover-font-size:                 $font-size-sm !default;
$popover-bg:                        $white !default;
$popover-max-width:                 276px !default;
$popover-border-width:              $border-width !default;
$popover-border-color:              rgba($black, .2) !default;
$popover-border-radius:             $border-radius-lg !default;
$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;
$popover-box-shadow:                $box-shadow !default;

$popover-header-bg:                 darken($popover-bg, 3%) !default;
$popover-header-color:              $headings-color !default;
$popover-header-padding-y:          .5rem !default;
$popover-header-padding-x:          .75rem !default;

$popover-body-color:                $body-color !default;
$popover-body-padding-y:            $popover-header-padding-y !default;
$popover-body-padding-x:            $popover-header-padding-x !default;

$popover-arrow-width:               1rem !default;
$popover-arrow-height:              .5rem !default;
$popover-arrow-color:               $popover-bg !default;

$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;


// Toasts

$toast-max-width:                   350px !default;
$toast-padding-x:                   .75rem !default;
$toast-padding-y:                   .25rem !default;
$toast-font-size:                   .875rem !default;
$toast-color:                       null !default;
$toast-background-color:            rgba($white, .85) !default;
$toast-border-width:                1px !default;
$toast-border-color:                rgba(0, 0, 0, .1) !default;
$toast-border-radius:               $border-radius !default;
$toast-box-shadow:                  $box-shadow !default;

$toast-header-color:                $gray-600 !default;
$toast-header-background-color:     rgba($white, .85) !default;
$toast-header-border-color:         rgba(0, 0, 0, .05) !default;


// Badges

$badge-font-size:                   .75em !default;
$badge-font-weight:                 $font-weight-bold !default;
$badge-color:                       $white !default;
$badge-padding-y:                   .25em !default;
$badge-padding-x:                   .5em !default;
$badge-border-radius:               $border-radius !default;


// Modals

// Padding applied to the modal body
$modal-inner-padding:               1rem !default;

// Margin between elements in footer, must be lower than or equal to 2 * $modal-inner-padding
$modal-footer-margin-between:       .5rem !default;

$modal-dialog-margin:               .5rem !default;
$modal-dialog-margin-y-sm-up:       1.75rem !default;

$modal-title-line-height:           $line-height-base !default;

$modal-content-color:               null !default;
$modal-content-bg:                  $white !default;
$modal-content-border-color:        rgba($black, .2) !default;
$modal-content-border-width:        $border-width !default;
$modal-content-border-radius:       $border-radius-lg !default;
$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;
$modal-content-box-shadow-xs:       $box-shadow-sm !default;
$modal-content-box-shadow-sm-up:    $box-shadow !default;

$modal-backdrop-bg:                 $black !default;
$modal-backdrop-opacity:            .5 !default;
$modal-header-border-color:         $border-color !default;
$modal-footer-border-color:         $modal-header-border-color !default;
$modal-header-border-width:         $modal-content-border-width !default;
$modal-footer-border-width:         $modal-header-border-width !default;
$modal-header-padding-y:            1rem !default;
$modal-header-padding-x:            1rem !default;
$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility

$modal-xl:                          1140px !default;
$modal-lg:                          800px !default;
$modal-md:                          500px !default;
$modal-sm:                          300px !default;

$modal-fade-transform:              translate(0, -50px) !default;
$modal-show-transform:              none !default;
$modal-transition:                  transform .3s ease-out !default;
$modal-scale-transform:             scale(1.02) !default;


// Alerts
//
// Define alert colors, border radius, and padding.

$alert-padding-y:                   .75rem !default;
$alert-padding-x:                   1.25rem !default;
$alert-margin-bottom:               1rem !default;
$alert-border-radius:               $border-radius !default;
$alert-link-font-weight:            $font-weight-bold !default;
$alert-border-width:                $border-width !default;

$alert-bg-level:                    -10 !default;
$alert-border-level:                -9 !default;
$alert-color-level:                 6 !default;


// Progress bars

$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       $gray-200 !default;
$progress-border-radius:            $border-radius !default;
$progress-box-shadow:               $box-shadow-inset !default;
$progress-bar-color:                $white !default;
$progress-bar-bg:                   $primary !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;


// List group

$list-group-color:                  null !default;
$list-group-bg:                     $white !default;
$list-group-border-color:           rgba($black, .125) !default;
$list-group-border-width:           $border-width !default;
$list-group-border-radius:          $border-radius !default;

$list-group-item-padding-y:         .75rem !default;
$list-group-item-padding-x:         1.25rem !default;

$list-group-hover-bg:               $gray-100 !default;
$list-group-active-color:           $component-active-color !default;
$list-group-active-bg:              $component-active-bg !default;
$list-group-active-border-color:    $list-group-active-bg !default;

$list-group-disabled-color:         $gray-600 !default;
$list-group-disabled-bg:            $list-group-bg !default;

$list-group-action-color:           $gray-700 !default;
$list-group-action-hover-color:     $list-group-action-color !default;

$list-group-action-active-color:    $body-color !default;
$list-group-action-active-bg:       $gray-200 !default;


// Image thumbnails

$thumbnail-padding:                 .25rem !default;
$thumbnail-bg:                      $body-bg !default;
$thumbnail-border-width:            $border-width !default;
$thumbnail-border-color:            $gray-300 !default;
$thumbnail-border-radius:           $border-radius !default;
$thumbnail-box-shadow:              $box-shadow-sm !default;


// Figures

$figure-caption-font-size:          $small-font-size !default;
$figure-caption-color:              $gray-600 !default;


// Breadcrumbs

$breadcrumb-font-size:              null !default;

$breadcrumb-padding-y:              .75rem !default;
$breadcrumb-padding-x:              1rem !default;
$breadcrumb-item-padding-x:         .5rem !default;

$breadcrumb-margin-bottom:          1rem !default;

$breadcrumb-bg:                     $gray-200 !default;
$breadcrumb-divider-color:          $gray-600 !default;
$breadcrumb-active-color:           $gray-600 !default;
$breadcrumb-divider:                quote("/") !default;

$breadcrumb-border-radius:          $border-radius !default;


// Carousel

$carousel-control-color:             $white !default;
$carousel-control-width:             15% !default;
$carousel-control-opacity:           .5 !default;
$carousel-control-hover-opacity:     .9 !default;
$carousel-control-transition:        opacity .15s ease !default;

$carousel-indicator-width:           30px !default;
$carousel-indicator-height:          3px !default;
$carousel-indicator-hit-area-height: 10px !default;
$carousel-indicator-spacer:          3px !default;
$carousel-indicator-opacity:         .5 !default;
$carousel-indicator-active-bg:       $white !default;
$carousel-indicator-active-opacity:  1 !default;
$carousel-indicator-transition:      opacity .6s ease !default;

$carousel-caption-width:             70% !default;
$carousel-caption-color:             $white !default;
$carousel-caption-padding-y:         1.25rem !default;
$carousel-caption-spacer:            1.25rem !default;

$carousel-control-icon-width:        20px !default;

$carousel-control-prev-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'><path d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/></svg>") !default;
$carousel-control-next-icon-bg:      url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'><path d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/></svg>") !default;

$carousel-transition-duration:       .6s !default;
$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)


// Spinners

$spinner-width:         2rem !default;
$spinner-height:        $spinner-width !default;
$spinner-border-width:  .25em !default;

$spinner-width-sm:        1rem !default;
$spinner-height-sm:       $spinner-width-sm !default;
$spinner-border-width-sm: .2em !default;


// Close

$close-font-size:                   $font-size-base * 1.5 !default;
$close-font-weight:                 $font-weight-bold !default;
$close-color:                       $black !default;
$close-text-shadow:                 0 1px 0 $white !default;


// Code

$code-font-size:                    $small-font-size !default;
$code-color:                        $pink !default;

$kbd-padding-y:                     .2rem !default;
$kbd-padding-x:                     .4rem !default;
$kbd-font-size:                     $code-font-size !default;
$kbd-color:                         $white !default;
$kbd-bg:                            $gray-900 !default;

$pre-color:                         null !default;

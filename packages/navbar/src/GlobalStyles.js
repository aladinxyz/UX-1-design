import React from 'react';
import { Global, css } from '@emotion/core';

const styles = () => css`
  :root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  }

  .bg-light {
    background-color: #f8f9fa !important;
  }

  a.bg-light:hover,
  a.bg-light:focus,
  button.bg-light:hover,
  button.bg-light:focus {
    background-color: #dae0e5 !important;
  }

  /* //////////// */

  .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }

  .nav-link:hover,
  .nav-link:focus {
    text-decoration: none;
  }

  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }

  .nav-tabs .nav-item {
    margin-bottom: -1px;
  }

  .nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .nav-pills .nav-link {
    border-radius: 0.25rem;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #007bff;
  }

  .nav-fill .nav-item {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified .nav-item {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: center;
  }

  .tab-content > .tab-pane {
    display: none;
  }

  .tab-content > .active {
    display: block;
  }

  /* //////// */

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .navbar .container,
  .navbar .container-fluid,
  .navbar .container-sm,
  .navbar .container-md,
  .navbar .container-lg,
  .navbar .container-xl {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }

  .navbar-brand:hover,
  .navbar-brand:focus {
    text-decoration: none;
  }

  .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }

  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }

  .navbar-toggler:hover,
  .navbar-toggler:focus {
    text-decoration: none;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media (max-width: 575.98px) {
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid,
    .navbar-expand-sm > .container-sm,
    .navbar-expand-sm > .container-md,
    .navbar-expand-sm > .container-lg,
    .navbar-expand-sm > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid,
    .navbar-expand-sm > .container-sm,
    .navbar-expand-sm > .container-md,
    .navbar-expand-sm > .container-lg,
    .navbar-expand-sm > .container-xl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid,
    .navbar-expand-md > .container-sm,
    .navbar-expand-md > .container-md,
    .navbar-expand-md > .container-lg,
    .navbar-expand-md > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid,
    .navbar-expand-md > .container-sm,
    .navbar-expand-md > .container-md,
    .navbar-expand-md > .container-lg,
    .navbar-expand-md > .container-xl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid,
    .navbar-expand-lg > .container-sm,
    .navbar-expand-lg > .container-md,
    .navbar-expand-lg > .container-lg,
    .navbar-expand-lg > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid,
    .navbar-expand-lg > .container-sm,
    .navbar-expand-lg > .container-md,
    .navbar-expand-lg > .container-lg,
    .navbar-expand-lg > .container-xl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 1199.98px) {
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid,
    .navbar-expand-xl > .container-sm,
    .navbar-expand-xl > .container-md,
    .navbar-expand-xl > .container-lg,
    .navbar-expand-xl > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid,
    .navbar-expand-xl > .container-sm,
    .navbar-expand-xl > .container-md,
    .navbar-expand-xl > .container-lg,
    .navbar-expand-xl > .container-xl {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }

  .navbar-expand {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }

  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-expand .navbar-nav {
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }

  .navbar-expand .navbar-collapse {
    display: -ms-flexbox !important;
    display: flex !important;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }

  .navbar-expand .navbar-toggler {
    display: none;
  }

  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-brand:hover,
  .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }

  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }

  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }

  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }

  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.5);
  }

  .navbar-dark .navbar-text a {
    color: #fff;
  }

  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }
`;

// export default () => <Global styles={styles()} />;
export default () => (
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
);

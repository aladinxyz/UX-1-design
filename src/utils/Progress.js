import React from 'react';
import NProgress from 'nprogress';

NProgress.configure({ // перенести куда нибудь
  minimum: 0.2,
  easing: 'ease',
  speed: 300,
  trickle: true,
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 500,
  parent: '#progress',
});
NProgress._start = NProgress.start;
NProgress.start = (...args) => {
  try {
    return NProgress._start(...args);
  } catch (err) {
    // console.log('err', err);
  }
};
NProgress._done = NProgress.done;
NProgress.done = (...args) => {
  try {
    return NProgress._done(...args);
  } catch (err) {
    // console.log('err', err);
  }
};

NProgress.Bar = ({ id }) => React.createElement('div', { id, className: 'nprogress' });
NProgress.parentClassName = 'nprogress-parent';

export default NProgress;

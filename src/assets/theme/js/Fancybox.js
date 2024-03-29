import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,

  animated: false,
  showClass: false,
  hideClass: false,

  dragToClose: false,
  contentClick: false,

  Images: {
    zoom: false,
  },

  Toolbar: {
    display: {
      left: [],
      right: ['close'],
    },
  },

  Thumbs: {
    type: 'classic',
  },
});

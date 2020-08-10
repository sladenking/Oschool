'use scrict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'element-matches';

import scrollWindow from './modules/scrollWindow';
import preloader from './modules/preloader';
import progressBar from './modules/progressBar';
import scrollButtons from './modules/scrollButtons';
import sliderTeachers from './modules/sliderTeachers';
import sliderReviews from './modules/sliderReviews';
import accord from './modules/accord';
import modalPhone from './modules/modalPhone';


scrollWindow();
preloader();
progressBar();
scrollButtons();
sliderTeachers();
sliderReviews();
accord();
modalPhone();
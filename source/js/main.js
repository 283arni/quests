import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import initForm from './modules/form';
import initLocation from './modules/location';
import tabsSlider from './modules/quests';
import initTableQuest from './modules/table';


// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initForm();
initLocation();
tabsSlider();
initTableQuest();

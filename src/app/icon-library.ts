import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faSquareCheck, faGem} from '@fortawesome/free-solid-svg-icons';

export function initFontLibrary() {
  library.add(fab, faGem, faSquareCheck);
}

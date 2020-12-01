import './DecimalClassifier'
import decimalClassifier from './DecimalClassifier';

const decClassItemSelector = (index: number, selection_switch_interval: number, items: []) => {

    const selectedIndex = decimalClassifier(index, selection_switch_interval, items.length);
  
    return items[selectedIndex];
}

export default decClassItemSelector;
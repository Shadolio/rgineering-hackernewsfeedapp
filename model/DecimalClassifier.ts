const decimalClassifier = (decimal: number, class_size: number, number_of_classes: number) => {
  const reset_base = class_size * number_of_classes;
  const group_base = decimal % reset_base;
  const class_index = Math.floor(group_base / class_size);
  return class_index;
}

export default decimalClassifier;
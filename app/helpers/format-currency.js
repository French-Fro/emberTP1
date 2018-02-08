import { helper } from '@ember/component/helper';

export function formatCurrency(value,option/*, hash*/) {
  let symbol = option.symbol || '€';
  return value+" "+symbol;
}

export default helper(formatCurrency);

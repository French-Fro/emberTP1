import { helper } from '@ember/component/helper';

export function plural(params/*, hash*/) {
  let [count,zero,one,other]=params;
  let result=count +' '+ other;
  if(count==0){
    result=zero;
  }
  else if(count==1){
    result=one;
  }
  return result;
}

export default helper(plural);

import {formatCurrency} from "../Scripts/utills/money.js";

describe('test suite :formatCurrency',()=>{
  it('converts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with zero',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to the nearest cent',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
  
  it('Round up Float value',()=>{
    expect(formatCurrency(2095.50)).toEqual('20.96');
  });
});
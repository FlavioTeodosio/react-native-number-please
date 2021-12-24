import { PickerProps } from '@react-native-picker/picker';
import { ItemValue } from '@react-native-picker/picker/typings/Picker';
import { RefObject } from 'react';

export interface IRNNPPicker {
  /**
   * ID of the picker, which will be used as key in the returned value object.
   * @example if you have a picker with {id: 'amountOfPizzas', ... }, the returned value object will be: {amountOfPizzas: 3}
   * @type {string}
   * @memberof IRNNPPicker
   */
  id: string;
  /**
   * Picker ref
   * @type {*}
   * @memberof IRNNPPicker
   */
  ref?: RefObject<{focus: () => void, blur: () => void}>;
  /**
   * Add a label which will prefix a picker item.
   * @example if label:'EURO' your picker item will look like: 3 EURO
   * @type {string}
   * @memberof IRNNPPicker
   */
  label?: string;
  /**
   * Min value of the picker to start with.
   * @type {number}
   * @memberof IRNNPPicker
   */
  min: number;
  /**
   * Max value of the picker to end with.
   * @type {number}
   * @memberof IRNNPPicker
   */
  max: number;
  /**
   * Amount to increment/decrement the value by.
   * @type {number}
   * @memberof IRNNPPicker
   */
  step?: number;
}

export interface IValue {
  [key: string]: ItemValue;
}

export interface INumberPrizeProps extends PickerProps {
  /**
   * Initialise all the pickers with the given values.
   * @type {IRNNPPicker[]}
   * @memberof INumberPrizeProps
   */
  pickers: IRNNPPicker[];
  /**
   * Controled value to be displayed in the pickers.
   * @type {IValue}
   * @memberof INumberPrizeProps
   */
  values: IValue;
  /**
   * Callback function to be called when the value of any picker changes.
   * @param {*} value
   * @return {*}  {*}
   * @memberof INumberPrizeProps
   */
  onChange(value: any): any;
  /**
   * Divider to be used to seperate pickers.
   * @type {*}
   * @memberof INumberPrizeProps
   */
  divider?: any;
}

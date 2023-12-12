import { data } from '../data/tableInfoData';

export const filteredDress = data.filter(elem => {
  return elem.productCategory === 'Dress';
});

export const filteredCoat = data.filter(elem => {
  return elem.productCategory === 'Coat';
});

export const filteredSkirt = data.filter(elem => {
  return elem.productCategory === 'Skirt';
});

export const unitSoldDress = filteredDress.map(product => product.unitSold);
export const unitSoldCoat = filteredCoat.map(product => product.unitSold);
export const unitSoldSkirt = filteredSkirt.map(product => product.unitSold);
export const lineChartLabels = data.map(product => product.date);

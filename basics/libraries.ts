import {subDays, format} from 'date-fns';

const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, 'dd/MM/yyyy HH:ii');
console.log(str);

//to use libraries that don't support typescript you need to install the @types/library-name that probably
// will be suggested by vscode

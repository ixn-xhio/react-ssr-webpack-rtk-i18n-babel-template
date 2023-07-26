import moment from "moment";

export const getFirtsLogin = () => localStorage.getItem('firstLogin');

export const setBINToken = (token: string) => localStorage.setItem('bin_token', token);

export const getBINToken = () =>  localStorage.getItem('bin_token');

export const setFirstLogin = () => localStorage.setItem('firstLogin', "true");

export const removeFirstLogin = () => localStorage.removeItem('firstLogin');

export const setRowsPerPageGlobal = (rows_per_page: number) => localStorage.setItem("rows_per_page", `${rows_per_page}`);

export const getRowsPerPageGlobal = () => {
    const rows = localStorage.getItem("rows_per_page") || 20;
    return Number(rows);
}

export const formatString = (word: any) =>  String(word);

export const formatNumber = (num: any) =>  Number(num);

export const formatFourDecimnals = (num: any) => {
    if(isNaN(num)) {
        return 0
    } else {
        const [parteEntera, parteDecimal] = Number(num).toFixed(2).split('.');
        const numeroFormateado = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + parteDecimal;

        return numeroFormateado
    }
}

export const formatDate = (date: any) => {
    if(!date || date.length === 0) {
        return "NaN"
    }
    return moment(date).utc(true).format('YYYY-MM-DD');
}

export const calculateAge = (birthday: any, lapse?: any) => { // birthday is a date
    let castedLapse = lapse ? new Date(lapse).valueOf() : Date.now()
    let castedBirthday = new Date(birthday).valueOf()

    let ageDifMs = castedLapse - castedBirthday;
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    const result = ageDate.getUTCFullYear() - 1970
    const response = result.toLocaleString( 'en-US', { maximumFractionDigits: 1 , minimumFractionDigits: 0 })
    return response;
}
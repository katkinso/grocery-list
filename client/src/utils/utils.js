import Cookies from 'universal-cookie';
import moment from 'moment';

const checkCookie = () => {
    const cookies = new Cookies(); 
    return cookies.get('connect.sid')
}

const removeCookie = () => {
    const cookies = new Cookies(); 
    return cookies.remove('connect.sid')
}


const utcDateToLocalTime = (utcDateTime) => {
    
    return moment(utcDateTime).local().format('YYYY MMM DD h:mm A');
}

const utcToLocal = (utcDateTime) => {

    return moment(utcDateTime).local().format('dddd, MMMM DD @ h:mmA');
}

export default { checkCookie, utcDateToLocalTime, utcToLocal, removeCookie }
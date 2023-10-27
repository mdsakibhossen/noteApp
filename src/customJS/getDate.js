export const getDate = ()=>{
    let currentDate = new Date();
    const d = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
    const m = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
    const y = currentDate.getFullYear();
    let hr = currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
    hr = hr < 10 ? `0${hr}` : hr;
    const min = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const sec = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();

    const status = currentDate.getHours() >= 12 ? "PM" : "AM";

    currentDate = `${d}/${m}/${y} ${hr}:${min}:${sec} ${status}`;
    return currentDate;
}
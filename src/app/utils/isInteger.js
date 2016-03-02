//http://stackoverflow.com/a/10834843/631348

export default (str) => {
    const number = ~~Number(str);
    return String(number) === str && number >= 0;
};

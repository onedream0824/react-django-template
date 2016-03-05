const element = document.documentElement;
const $body = document.getElementsByTagName("body")[0];

// http://tinyurl.com/phansux
export default function viewportDimensions() {
    return {
        width: window.innerWidth || element.clientWidth || $body.clientWidth,
        height: window.innerHeight || element.clientHeight || $body.clientHeight
    };
}

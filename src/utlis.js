import noPreview from '../src/assets/images/No-Preview.jpg';

const Buildimg = (name) => {
    let validimg = false
    if (name && name.indexOf(".") != -1) {
        validimg = true
    }
    if (validimg) {
        return `${name}`
    }
    else {
        return noPreview
    }
}


export { Buildimg }

export function pending(type) {
    return `${type}_PENDING`;
}

export function fulfilled(type) {
    return `${type}_FULFILLED`;
}

export function failed(type) {
    return `${type}_REJECTED`;
}
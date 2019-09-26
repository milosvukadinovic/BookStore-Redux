/* eslint-disable import/prefer-default-export */
export const number = () => {
    const i=Math.floor((Math.random() * 9) + 1);
    const j=Math.floor((Math.random() * 9) + 1);
    return { chapter: i, percentage: i * 10 + j };
}
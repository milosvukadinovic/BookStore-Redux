/* eslint-disable import/prefer-default-export */
export const randomAuthor = () => {
    const i=Math.floor((Math.random() * 10) + 1);
    const author=['Jacky Sin', 'Piers Dine', 'Tania Dopicik', 'Tolish Abambe', 'Jack Tylor', 'Jennifer Okula', 'Venis Dryger', 'Tania Suners', 'Peter James', 'Drake Mandes', 'Marshal Ericson'];
    return author[i];
}
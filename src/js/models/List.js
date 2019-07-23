import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);        
        this.items.splice(index, 1);
    }

    updateCount(id, newCount) {
        // To loop through all of the elements in the items object,
        // then select the one that has the id equal to the id we 
        // passed into the function
        this.items.find(el => el.id === id).count = newCount;
    }
}
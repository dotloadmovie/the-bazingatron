const random = (min:number, max:number):number => (
    Math.floor(Math.random() * (max - min)) + min
);

export {random}
import Item from "../model/Item";

export const insertOne = async (item) => {
  try {
    await Item.create(item);
  } catch (e) {
    return e;
  }
};

export const insertMany = async (items) => {
  try {
    await Item.insertMany(items);
  } catch (e) {
    return e;
  }
};

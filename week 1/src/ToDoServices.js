import Parse from "parse";

const ToDoItem = Parse.Object.extend("ToDoItem");

function toPlainObject(parseObject) {
    return  {
        id: parseObject.id,
        text: parseObject.get("text"),
        done: parseObject.get("done"),
    };
}

export async function fetchToDoItems() {
    const query = new Parse.Query(ToDoItem);
    const results = await query.find();
    return results.map(toPlainObject);
}


export async function createToDoItem(text) {
    const item = new ToDoItem();
    item.set("text", text);
    item.set("done", false);
    return toPlainObject(await item.save());
}

export async function setToDoDone(id, done) {
    const item = ToDoItem.CreateWithoutData(id);
    item.set("done", done);
    await toPlainObject(await item.save());
}

export async function deleteToDoItem(id) {
    const item = ToDoItem.CreateWithoutData(id);
    await item.destroy();
}
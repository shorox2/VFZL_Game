let db, notes, tx, store, note;
const dbReq = indexedDB.open('personal', 1);

dbReq.onupgradeneeded = (event) => {
    db = event.target.result;
    let notes = db.createObjectStore('notes', {autoIncrement: true})
}
dbReq.onsuccess = (event) => {
    db = event.target.result
}
dbReq.onerror = function(event) {
    alert('ERRRROR')
}

const addStickyNote = (db, first, last, age) => {
    let tx = db.transaction(["notes"], "readwrite")
    let store = tx.objectStore('notes')

    let note = {Name: first, Fimil: last,Age :age, timestamp: Date.now()}
    store.add(note);

    tx.onsuccess = () => {
        console.log('stored note!')
    }
    tx.onerror = (event) => {
        alert('Errorrrrr')
    }
}
// const displayNotes = (notes) => {
//     let note = notes[6];
//     document.querySelector('.cart').innerHTML = `<a href="person.html"><p class="name">${note}</p></a>`
// }
const getAndDisplayNotes = (db) => {
    let tx = db.transaction(['notes'], 'readonly');
    let store = tx.objectStore('notes');

    let req = store.openCursor();
    let allNotes = [];
    req.onsuccess = (event) => {

        let cursor = event.target.result;
        if (cursor != null) {
            allNotes.push(cursor.value);
            cursor.continue();
        } else {
            displayNotes(allNotes);
        }
    }
}
// const displayNotes = (notes) => {
//     let ter = `<a href="person.html"><p class="name">`
//     for (let i = 0; i < 1; i++) {
//         let note = notes[i];
//         ter += note.Age + `</p></a>`
//     }
//     document.querySelector('.cart').innerHTML = ter
// }
    

dbReq.onsuccess = (event) => {
    db = event.target.result
    addStickyNote(db, "Jack", "russl", 34)
    addStickyNote(db, "NIGGER", "russl", 34)
    addStickyNote(db, "PRIORA", "russl", 34)
    displayNotes(db)
    // document.querySelector('.cart').innerHTML = `<a href="person.html"><p class="name">${notes].Name}</p></a>`
    // document.querySelector('.cart').innerHTML = `<a href="person.html"><p class="name">${}</p></a>`
}





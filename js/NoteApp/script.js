const noteTitle = document.getElementById("noteTitle");
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const notesContainer = document.getElementById("notesContainer");

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notesContainer.innerHTML = "";

    notes.forEach(function (note, index) {
        const noteEl = document.createElement("div");
        noteEl.className = "note";

        const titleEl = document.createElement("h3");
        titleEl.className = "note-title";
        titleEl.textContent = note.title;

        const contentEl = document.createElement("p");
        contentEl.className = "note-content";
        contentEl.textContent = note.content;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.style.display = "none";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        editBtn.addEventListener("click", function () {
            titleEl.contentEditable = "true";
            contentEl.contentEditable = "true";
            titleEl.focus();
            editBtn.style.display = "none";
            saveBtn.style.display = "inline";
        });

        saveBtn.addEventListener("click", function () {
            titleEl.contentEditable = "false";
            contentEl.contentEditable = "false";

            notes[index] = {
                title: titleEl.textContent.trim(),
                content: contentEl.textContent.trim()
            };
            localStorage.setItem("notes", JSON.stringify(notes));
            loadNotes();
        });
        
        deleteBtn.addEventListener("click", function () {
            notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(notes));
            loadNotes();
        });

        noteEl.appendChild(titleEl);
        noteEl.appendChild(contentEl);
        noteEl.appendChild(editBtn);
        noteEl.appendChild(saveBtn);
        noteEl.appendChild(deleteBtn);

        notesContainer.appendChild(noteEl);
    });
}

function addNote() {
    const title = noteTitle.value.trim();
    const content = noteInput.value.trim();
    if (!title && !content) return;

    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    notes.push({ title: title, content: content });
    localStorage.setItem("notes", JSON.stringify(notes));
    noteTitle.value = "";
    noteInput.value = "";
    loadNotes();
}

function clearAllNotes() {
    if (confirm("Are you sure you want to delete all notes?")) {
        localStorage.removeItem("notes");
        loadNotes();
    }
}

addNoteBtn.addEventListener("click", addNote);
clearAllBtn.addEventListener("click", clearAllNotes);
window.onload = loadNotes;
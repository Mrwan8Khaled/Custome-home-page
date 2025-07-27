// 1. Create a file with chosen name and data
function createFile(fileName, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 2. Insert data into a file (download new file with merged data)
function insertDataToFile(fileName, newData, oldData = {}) {
  const mergedData = { ...oldData, ...newData };
  createFile(fileName, mergedData);
}

// 3. Get data from file (returns a Promise)
// Accepts either a file input event or a File object
function getDataFromFile(input) {
  let file;
  if (input instanceof File) {
    file = input;
  } else if (input && input.target && input.target.files && input.target.files[0]) {
    file = input.target.files[0];
  } else if (typeof input === "string") {
    // If input is a string (URL or path), try to fetch
    return fetch(input)
      .then(res => {
        if (!res.ok) throw new Error("File not found or invalid");
        return res.json();
      });
  } else {
    return Promise.reject("No file selected");
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch (err) {
        reject("Invalid file format");
      }
    };
    reader.readAsText(file);
  });
}

// 4. Edit data in file (download new file with edited data)
function editDataInFile(fileName, editCallback, oldData = {}) {
  const editedData = editCallback(oldData);
  createFile(fileName, editedData);
}

// 5. Delete data from file (download new file with deleted keys)
function deleteDataFromFile(fileName, keysToDelete = [], oldData = {}) {
  keysToDelete.forEach(key => delete oldData[key]);
  createFile(fileName, oldData);
}
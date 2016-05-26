

function updateStorage(key: string, value:string) {
  window.localStorage.setItem(key, value);
}

let article  =
     document.getElementById('article') as HTMLTextAreaElement;

article.addEventListener('input', (e) => {
   const text = article.value;
   updateStorage('article', text);
})

function updateTextArea() {
  let text = window.localStorage.getItem('article')
  if (article.value != text) {
    article.value = text;
  }
}

function onStorageEvent(e : StorageEvent) {
  if (e.storageArea === window.localStorage) {
    updateTextArea();
  }
}

window.addEventListener('storage', onStorageEvent, false);
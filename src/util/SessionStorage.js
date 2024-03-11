export function setSessionStorage(key, json) {
  sessionStorage.setItem(key, JSON.stringify(json));
}

export function getSessionStorage(key) {
  const data = sessionStorage.getItem(key);
  if(data){
    const json = JSON.parse(data);
    return json;
  }
  return {};
}
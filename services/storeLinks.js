export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);
  let linkesSaves = JSON.parse(myLinks) || [];
  return linkesSaves;
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);
  const hasLink = linksStored.some((link) => link.id === newLink.id);
  if (hasLink) {
    console.log("Esse link já existe!");
    return;
  }
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link Salvo com Sucesso!");
}

export function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return item.id !== id;
  });
  localStorage.setItem("@encurtalink", JSON.stringify(myLinks));
  return myLinks;
}

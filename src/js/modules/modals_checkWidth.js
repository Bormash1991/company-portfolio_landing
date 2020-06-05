const checkWidth = () => {
  const div = document.createElement("div");
  div.style.cssText = `
    width: 50px; 
    height: 50px;
    overflow-y: scroll;
    visibility: hidden;`;
  document.body.appendChild(div);
  const width = div.offsetWidth - div.clientWidth;
  div.remove();
  return width;
};
export default checkWidth;

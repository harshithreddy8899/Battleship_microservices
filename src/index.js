import createRedTable from "./gridModule";

document.body.style.display='flex';
document.body.style.flexDirection='row';
document.body.style.justifyContent='space-between';
// Usage example:
const redTable1 = createRedTable();
const redTable2= createRedTable();

document.body.appendChild(redTable1); // Append the table to the document body
document.body.appendChild(redTable2); // Append the table to the document body


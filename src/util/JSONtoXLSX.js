import * as XLSX from 'xlsx';

export function JSONtoXLSX(json){
  const wb = XLSX.utils.book_new();

  // Sheet for members
  const membersSheetData = json.Head.members.map(member => ({ name: member.name, 'roll number': member['roll number'] }));
  const membersSheet = XLSX.utils.json_to_sheet(membersSheetData);
  XLSX.utils.book_append_sheet(wb, membersSheet, 'Members');

  // Sheet for title bearers
  const titleBearersSheetData = json.Head.members.map(member => ({ name: member.name, 'roll number': member['roll number'], post: member.post }));
  const titleBearersSheet = XLSX.utils.json_to_sheet(titleBearersSheetData);
  XLSX.utils.book_append_sheet(wb, titleBearersSheet, 'Title Bearers');

  // Convert and save the workbook
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  return new Blob([s2ab(wbout)], { type: 'application/octet-stream' });

};

// // Example usage
// const json = {
//   "Head": {
//     "count": 4,
//     "members": [
//       {"name": "M", "post": "P", "roll number": "1", "image url": "L1"},
//       {"name": "H", "post": "VP", "roll number": "2", "image url": "L2"},
//       {"name": "S", "post": "O", "roll number": "3", "image url": "L3"},
//       {"name": "P\r", "post": "O\r", "roll number": "4\r", "image url": "L4\r"}
//     ]
//   },
//   "Name": "Suruchi",
//   "Member": {
//     "count": 2,
//     "members": [
//       {"name": "A", "roll number": "10"},
//       {"name": "B", "roll number": "11"}
//     ]
//   },
//   "Gallery": ["G1", "G2", "G3"],
//   "Videos": ["V1", "V2"],
//   "Letter from Team": "str"
// };

// createExcelFile(json, 'data.xlsx');

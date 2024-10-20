```js
const ExcelJS = require('exceljs');
 
export const getWorkbookBuffer = async (rows: any[]) => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Sheet 1');
    const width = 25
    sheet.columns = [
        { header: 'CloudRoomID', key: 'account_id', width },
        { header: 'CloudRoomName', key: 'cloudroom_name', width },
        { header: 'RAM Service User', key: 'service_user_name', width },
        { header: 'Access Key ID', key: 'access_key_id', width },
        { header: 'Secret Access Key', key: 'access_key_secret', width }
    ]
    rows.forEach((row) => {
        sheet.addRow(row);
    })
    sheet.getRow(1).font = { bold: true }; // 标题一行需加粗
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
}
 
export const downloadExcel = (buffer: any, filename: string) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
```

```js
const handleExport = async () => {
    const buffer = await getWorkbookBuffer([
        {
          cloudroom_id: 'CR1001',
          cloudroom_name: 'Development Room',
          service_user_name: 'dev_user',
          access_key_id: 'AKIAIOSFODNN7EXAMPLE',
          access_key_secret: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
        },
        {
          cloudroom_id: 'CR1002',
          cloudroom_name: 'Testing Room',
          service_user_name: 'test_user',
          access_key_id: 'AKIAI44Q2L52FEWGFF3A',
          access_key_secret: 'g47C2KlYq54nGj3i78924F5jKl453examplekey'
        }
      ])
      downloadExcel(buffer, 'test')
    }
```
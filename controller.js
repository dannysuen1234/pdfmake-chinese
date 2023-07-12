
pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Regular.ttf',
    italics: 'Roboto-Regular.ttf',
    bolditalics: 'Roboto-Regular.ttf'
  },
  NotoSerifHK: {
    normal: 'mingliu.ttf',
    bold: 'mingliu.ttf',
    italics: 'mingliu.ttf',
    bolditalics: 'mingliu.ttf'
  }
}

var docDefinition = {
  content: [
    { text: '司 機 出 勤 記 錄 表', font: 'NotoSerifHK' }
  ]
};

pdfMake.createPdf(docDefinition).download();

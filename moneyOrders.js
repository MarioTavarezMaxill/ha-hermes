const moneyOrderPrinters = [
  {
    ErrorCode: 0,
    Conection: true,
    ErrorDescription: "",
    Type: "moneyorder",
    DeviceName: "SATO WS412",
  },
];

const listPrintersConnect = (ws) => {
  const response = {
    status: 2000,
    message: "Sucessfull",
    processName: "ListPrintersConnect",
    data: moneyOrderPrinters,
  };

  ws.send(JSON.stringify(response));
};

const printMo = (ws) => {
  const response = {
    status: 2000,
    message: "Sucessfull",
    processName: "PrintMo",
    data: null,
  };

  ws.send(JSON.stringify(response));
};

module.exports = {
  moneyOrderMessages: {
    ListPrintersConnect: listPrintersConnect,
    PrintMo: printMo,
  },
};

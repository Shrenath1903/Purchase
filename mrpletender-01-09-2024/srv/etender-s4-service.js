const cds = require('@sap/cds')
module.exports = cds.service.impl(async function () {   
    this.on('READ', 'ZC_MM_PURREQ', getS4_ZC_MM_PURREQ)
    this.on('READ', 'R_PurchaseReqnItem', getS4_R_PurchaseReqnItem)
  })

async function getS4_ZC_MM_PURREQ(req) {
  const externalS4Service = await cds.connect.to('ZC_MM_PURREQ_CDS')
  return await externalS4Service.run(req.query)
}
async function getS4_R_PurchaseReqnItem(req) {
  const externalS4Service = await cds.connect.to('ZC_MM_PURREQ_CDS')
  return await externalS4Service.run(req.query)
}
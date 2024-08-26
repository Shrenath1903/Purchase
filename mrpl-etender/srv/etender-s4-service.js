const cds = require('@sap/cds')
module.exports = cds.service.impl(async function () {   
    this.on('READ', 'ZC_MM_PURREQ', getS4_ZC_MM_PURREQ)
  })

async function getS4_ZC_MM_PURREQ(req) {
  const externalS4Service = await cds.connect.to('ZC_MM_PURREQ_CDS')
  return await externalS4Service.run(req.query)
}
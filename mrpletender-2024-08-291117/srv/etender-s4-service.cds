using {ZC_MM_PURREQ_CDS as ZC_MM_PURREQ_CDS} from './external/ZC_MM_PURREQ_CDS.csn';


service etender_S4Service {
    @readonly entity ZC_MM_PURREQ as projection on ZC_MM_PURREQ_CDS.ZC_MM_PURREQ;
    @readonly entity R_PurchaseReqnItem as projection on ZC_MM_PURREQ_CDS.R_PurchaseReqnItem;
}
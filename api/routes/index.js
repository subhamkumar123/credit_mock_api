var express = require('express');
var router = express.Router();

const getCreditWorkboardSummary = require('./getCreditWorkboardSummary');
const getCustomersByStatus = require('./getCustomerByStatus');

const getCustomerCreditScoreInfo = require('./getCustomerCreditScoreInfo');
const getCustomerFinancialMetrics = require('./getCustomerFinancialMetrics');
const getApplicationAndCompanyInfo = require('./getApplicationAndCompanyInfo');
const getCustomerCreditReportMetrics = require('./getCustomerCreditReportMetrics');
const getCustomerInsights = require('./getCustomerInsights');


router.use('/getCreditWorkboardSummary.do', getCreditWorkboardSummary);
router.use('/getCustomersByStatus.do', getCustomersByStatus);

router.use('/getCustomerCreditScoreInfo.do', getCustomerCreditScoreInfo);
router.use('/getCustomerFinancialMetrics.do', getCustomerFinancialMetrics);
router.use('/getApplicationAndCompanyInfo.do', getApplicationAndCompanyInfo);
router.use('/getCustomerCreditReportMetrics.do', getCustomerCreditReportMetrics);
router.use('/getCustomerInsights.do', getCustomerInsights);

module.exports = router;
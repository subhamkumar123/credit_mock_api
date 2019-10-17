const express = require('express');
const getCreditWorkboardSummary = require('./getCreditWorkboardSummary');
const getCustomersByStatus = require('./getCustomerByStatus');
const getCustomerCreditScoreInfo = require('./getCustomerCreditScoreInfo');
const getCustomerFinancialMetrics = require('./getCustomerFinancialMetrics');
const getApplicationAndCompanyInfo = require('./getApplicationAndCompanyInfo');
const getCustomerCreditReportMetrics = require('./getCustomerCreditReportMetrics');
const getCustomerInsights = require('./getCustomerInsights');
const getAllCamNotesList = require('./getAllCamNotesList');
const updateNextReviewDate = require('./updateNextReviewDate');
const getRejectReasons = require('./getRejectReasons');
const addCustomerNotes = require('./addCustomerNotes');
const getReferenceInfo = require('./getReferenceInfo');
const sendReminderEmail = require('./sendReminderEmail');

const router = express.Router();

router.use('/getCreditWorkboardSummary.do', getCreditWorkboardSummary);
router.use('/getCustomersByStatus.do', getCustomersByStatus);
router.use('/getCustomerCreditScoreInfo.do', getCustomerCreditScoreInfo);
router.use('/getCustomerFinancialMetrics.do', getCustomerFinancialMetrics);
router.use('/getApplicationAndCompanyInfo.do', getApplicationAndCompanyInfo);
router.use(
  '/getCustomerCreditReportMetrics.do',
  getCustomerCreditReportMetrics,
);
router.use('/getCustomerInsights.do', getCustomerInsights);
router.use('/getAllCamNotesList.do', getAllCamNotesList);
router.use('/updateNextReviewDate.do', updateNextReviewDate);
router.use('/getRejectReasons.do', getRejectReasons);
router.use('/addCustomerNotes.do', addCustomerNotes);
router.use('/getReferenceInfo.do', getReferenceInfo);
router.use('/sendReminderEmail.do', sendReminderEmail);

module.exports = router;

const express = require('express');
const router = express.Router();
const { authenticateToken, isAdmin } = require('../middleware/authMiddleware');
const { getOffers, getofferDetails ,deleteOfferByAdmin, updateOffer, createOffer } = require('../controllers/offerController');

router.get('/', authenticateToken, getOffers);
router.get('/:id', authenticateToken, getofferDetails);
router.delete('/:id', authenticateToken,deleteOfferByAdmin);
router.patch('/:id', authenticateToken,updateOffer);
router.post('/', authenticateToken,createOffer);
module.exports = router;
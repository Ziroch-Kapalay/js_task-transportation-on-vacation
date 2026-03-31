/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = days * 40;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;

  if (days >= LONG_TERM) {
    total -= LONG_TERM_DISCOUNT;
  } else if (days >= MEDIUM_TERM) {
    total -= MEDIUM_TERM_DISCOUNT;
  }

  return total;
}

module.exports = calculateRentalCost;

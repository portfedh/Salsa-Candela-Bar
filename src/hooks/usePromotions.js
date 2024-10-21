// src/hooks/usePromotions.js

import { useMemo } from "react";
import { promotionRules } from "../utils/promotionRules";
import { PromotionCalculator } from "../utils/promotionCalculator";
import { PROMOTION_TYPES } from "../utils/promotionTypes";

export function usePromotions(cart) {
  const appliedDiscounts = useMemo(() => {
    // If there are no items in the cart, return an empty array
    if (!cart?.items?.length) return [];

    return promotionRules
      .filter((promotion) => promotion.active)
      .map((promotion) => {
        let discountAmount = 0;

        switch (promotion.type) {
          case PROMOTION_TYPES.QUANTITY_DISCOUNT:
            discountAmount = PromotionCalculator.calculateQuantityDiscount(
              cart,
              promotion
            );
            break;
          case PROMOTION_TYPES.COMBO_DISCOUNT:
            discountAmount = PromotionCalculator.calculateComboDiscount(
              cart,
              promotion
            );
            break;
          case PROMOTION_TYPES.CATEGORY_DISCOUNT:
            discountAmount = PromotionCalculator.calculateCategoryDiscount(
              cart,
              promotion
            );
            break;
        }

        return {
          promotionId: promotion.id,
          amount: discountAmount,
        };
      })
      .filter((discount) => discount.amount > 0);
  }, [cart]);

  return appliedDiscounts;
}

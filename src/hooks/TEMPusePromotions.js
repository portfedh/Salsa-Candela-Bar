// src/hooks/usePromotions.js

// Not real code yet, just a placeholder for the final implementation
import { useMemo } from "react";
import { promotionRules } from "../data/promotionRules";
import { PromotionCalculator } from "../utils/promotionCalculator";
import { PROMOTION_TYPES } from "../constants/promotionTypes";

export function usePromotions(cart) {
  const appliedDiscounts = useMemo(() => {
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

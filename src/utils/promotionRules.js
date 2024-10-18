import { PROMOTION_TYPES } from "./promotionTypes";

export const promotionRules = [
  // Buy 2 beers get 10% off, buy 3 get 20% off
  {
    id: "BEER_QUANTITY_DISCOUNT",
    type: PROMOTION_TYPES.QUANTITY_DISCOUNT,
    categoryId: "cervezas",
    rules: [
      { minQuantity: 2, discount: 0.1 },
      { minQuantity: 3, discount: 0.2 },
    ],
    active: true,
    startDate: "2024-10-16",
    endDate: "2024-12-31",
  },
  // Buy 2 cocktails get 10% off
  {
    id: "COCKTAIL_QUANTITY_DISCOUNT",
    type: PROMOTION_TYPES.QUANTITY_DISCOUNT,
    categoryId: "vodka",
    rules: [{ minQuantity: 2, discount: 0.1 }],
    active: true,
    startDate: "2024-10-15",
    endDate: "2024-12-31",
  },
  // Buy 1 cocktail and 1 beer, get 10% off total
  {
    id: "COCKTAIL_BEER_COMBO",
    type: PROMOTION_TYPES.COMBO_DISCOUNT,
    requiredItems: [
      { categoryId: "vodka", quantity: 1 },
      { categoryId: "cervezas", quantity: 1 },
    ],
    discount: 0.1,
    active: false,
    startDate: "2024-10-15",
    endDate: "2024-12-31",
  },
  // All cocktails 20% off
  {
    id: "HAPPY_HOUR_COCKTAILS",
    type: PROMOTION_TYPES.CATEGORY_DISCOUNT,
    categoryId: "vodka",
    discount: 0.2,
    active: false,
    startDate: "2024-10-15",
    endDate: "2024-12-31",
    applicableHours: { start: 16, end: 19 }, // 4 PM to 7 PM
  },
];

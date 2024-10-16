export class PromotionCalculator {
  static calculateQuantityDiscount(cart, promotion) {
    const eligibleItems = cart.items.filter(
      (item) => item.categoryId === promotion.categoryId
    );

    const totalQuantity = eligibleItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    // Find the highest applicable discount
    const applicableRule = promotion.rules
      .filter((rule) => totalQuantity >= rule.minQuantity)
      .sort((a, b) => b.discount - a.discount)[0];

    if (!applicableRule) return 0;

    const subtotalForCategory = eligibleItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return subtotalForCategory * applicableRule.discount;
  }

  static calculateComboDiscount(cart, promotion) {
    const comboQualifies = promotion.requiredItems.every((required) => {
      const itemsInCategory = cart.items.filter(
        (item) => item.categoryId === required.categoryId
      );
      const quantityInCart = itemsInCategory.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return quantityInCart >= required.quantity;
    });

    if (!comboQualifies) return 0;

    const subtotal = cart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return subtotal * promotion.discount;
  }

  static calculateCategoryDiscount(cart, promotion) {
    const eligibleItems = cart.items.filter(
      (item) => item.categoryId === promotion.categoryId
    );

    const subtotalForCategory = eligibleItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return subtotalForCategory * promotion.discount;
  }
}

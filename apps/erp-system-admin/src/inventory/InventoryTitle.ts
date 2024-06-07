import { Inventory as TInventory } from "../api/inventory/Inventory";

export const INVENTORY_TITLE_FIELD = "productName";

export const InventoryTitle = (record: TInventory): string => {
  return record.productName?.toString() || String(record.id);
};

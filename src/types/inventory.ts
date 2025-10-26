export interface Product {
  uid: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  price: number;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  created_at: string;
  updated_at: string;
}

export interface Stock {
  uid: string;
  product_uid: string;
  bin_uid: string;
  quantity: number;
  reserved_quantity: number;
  available_quantity: number;
  last_updated: string;
}

export type MovementType = "IN" | "OUT" | "TRANSFER";

export interface StockMovement {
  uid: string;
  product_uid: string;
  from_bin_uid: string | null;
  to_bin_uid: string | null;
  quantity: number;
  movement_type: MovementType;
  created_at: string;
  created_by: string;
}

export interface AddStockRequest {
  product_uid: string;
  bin_uid: string;
  quantity: number;
}

export interface RemoveStockRequest {
  product_uid: string;
  bin_uid: string;
  quantity: number;
}

export interface TransferStockRequest {
  product_uid: string;
  from_bin_uid: string;
  to_bin_uid: string;
  quantity: number;
}

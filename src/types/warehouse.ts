export interface Warehouse {
  uid: string;
  code: string;
  name: string;
  location: string;
  capacity: number;
  occupied: number;
  created_at: string;
  updated_at: string;
}

export interface Zone {
  uid: string;
  code: string;
  name: string;
  warehouse_uid: string;
  created_at: string;
}

export interface Aisle {
  uid: string;
  code: string;
  zone_uid: string;
  created_at: string;
}

export interface Shelf {
  uid: string;
  code: string;
  level: number;
  aisle_uid: string;
  created_at: string;
}

export interface Bin {
  uid: string;
  code: string;
  capacity: number;
  occupied: number;
  shelf_uid: string;
  created_at: string;
}

export interface WarehouseStructure {
  warehouse: Warehouse;
  zones: Zone[];
  aisles: Aisle[];
  shelves: Shelf[];
  bins: Bin[];
}

export interface WarehouseStats {
  total_bins: number;
  occupied_bins: number;
  available_bins: number;
  total_capacity: number;
  occupied_capacity: number;
  occupancy_rate: number;
}

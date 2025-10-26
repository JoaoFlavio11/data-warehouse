export interface RouteStep {
  from: string;
  to: string;
  distance: number;
}

export interface PickingRoute {
  route: string[];
  total_distance: number;
  steps: RouteStep[];
  bins_count: number;
}

export interface ShortestPath {
  path: string[];
  distance: number;
  steps: number;
  error?: string;
}

export interface NearestBin {
  bin_code: string;
  quantity: number;
  available_space: number;
}

export interface OptimalPickingRouteRequest {
  warehouse_uid: string;
  bin_codes: string[];
}

export interface ShortestPathRequest {
  warehouse_uid: string;
  start_bin: string;
  end_bin: string;
}

export interface NearestBinsRequest {
  warehouse_uid: string;
  product_sku: string;
  quantity: number;
}

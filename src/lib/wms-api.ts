import { getAuth } from 'firebase/auth';

const WMS_API_BASE_URL = process.env.NEXT_PUBLIC_WMS_API_URL || 'http://localhost:8000/api';

async function getAuthToken(): Promise<string | null> {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return null;
  return await user.getIdToken();
}

export const wmsApi = {
  async getWarehouses(){
    const token = await getAuthToken();
    const response = await fetch(`${WMS_API_BASE_URL}/warehouses/`, {
      headers:{
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  },
  
  async getProducts(){
    const token = await getAuthToken();
    const response = await fetch(`${WMS_API_BASE_URL}/products/`, {
      headers:{
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json(); 
  },

  async createOrder(data:{
    order_number: string;
    warehouse_uid: string;
    items: Array<{sku: string; quantity: number}>;
  }) {
    const token = await getAuthToken();
    const response = await fetch(`${WMS_API_BASE_URL}/orders/create/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getOptimalRoute(data: {
    warehouse_uid: string;
    bin_codes: string[];
  }) {
    const token = await getAuthToken();
    const response = await fetch(`${WMS_API_BASE_URL}/routing/picking-route/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
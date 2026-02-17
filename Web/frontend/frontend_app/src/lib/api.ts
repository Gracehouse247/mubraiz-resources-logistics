const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mubraizresourcesltd.com/api';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
    // In a real implementation with Clerk, we would get the token here
    // const { getToken } = useAuth(); 
    // const token = await getToken();

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
        // 'Authorization': `Bearer ${token}`
    };

    const response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
}

export const api = {
    vendors: {
        create: (data: any) => fetchWithAuth('/vendors/apply', {
            method: 'POST',
            body: JSON.stringify(data),
        }),
    },
    shipments: {
        get: (id: string) => fetchWithAuth(`/shipments/${id}`),
    }
};


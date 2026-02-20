export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';

export async function apiRequest<T>(endpint: string, options: RequestInit = {}) : Promise<T>{
    const url = `${API_BASE_URL}${endpint}`;
    const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
    };
    const config: RequestInit ={
        ...options,
        headers:{
            ...defaultHeaders,
            ...options.headers,
        },
    };
    const response = await fetch(url, config);

    if(!response.ok){
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
            errorData.message || `Ошибка запроса: ${response.status} ${response.statusText}`
        )
    }
    return response.json();
}
    

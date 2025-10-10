// src/utils/useRestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        if (resId) {
            fetchData();
        }
    }, [resId]);
    
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const url = MENU_API_URL + resId;
            console.log('🔍 Fetching from:', url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const json = await response.json();
            console.log('✅ Full response:', json);
            
            // Set the data property from the response
            setResInfo(json.data);
            
        } catch (err) {
            console.error('❌ Error fetching menu:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    return { resInfo, loading, error };
};

export default useRestaurantMenu;
// searchVehicles.js
import { get } from "./fetchFake";

async function searchVehicle(searchQuery) {
  try {
    const data = await get();
    if (Array.isArray(data)) {
      // Filter the data based on the search query
      const result = data.filter(
        (item) =>
          item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return result;
    }
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
  }
}

export { searchVehicle };

import vehicle_data from "../components/mocks/vehicle_data.json";
export function get() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (vehicle_data) {
        resolve(vehicle_data);
      } else {
        reject(new Error("No data available"));
      }
    }, 200); // 1 second delay to mimic an API call
  });
}



import { baseURL } from './http';

export async function integrationAPIWebMotors(params) {

   try {

      const { httpMethod, endPoint } = params;

      const response = await baseURL({
         method: httpMethod.toUpperCase(),
         url: endPoint,
         headers: {
            'Content-type': 'application-json'
         }
      });
      if (response?.status === 200) {
         return response.data;
      }
      return false;
   } catch (error) {
      return false;
   }
}

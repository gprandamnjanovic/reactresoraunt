import { fetchUser } from '../utils/fetchLocalSoregeData';
const userInfo = fetchUser();
export const initialState = {
  user: userInfo,
  foodItems: null,
};

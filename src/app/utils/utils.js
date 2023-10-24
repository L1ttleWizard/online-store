import { getDatabase, ref, child, get } from "firebase/database";
import app from '../firebase/config'

export async function FetchData(query) {
  const dbRef = ref(getDatabase(app));
  const snapshot = await get(child(dbRef, `${query}`));
  
  if (snapshot.exists()) {
    const data = snapshot.val();
    return <Story storyConfig={data}/>;
  } else {
    return <div>No data available</div>;
  }
}

import{collection,getDocs} from 'firebase/firestore';
import { firestoreDatabase } from '../firebase/config';


export const getFirestoreCollection = async (collectionName)=>{
    const querySnapshot = await getDocs(collection(firestoreDatabase, collectionName));
    const collectionData = [];
    querySnapshot.forEach(doc=>collectionData.push(doc.data()));
    return  collectionData;
}

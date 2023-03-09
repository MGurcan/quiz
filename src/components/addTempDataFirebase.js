import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
 
const AddTempDataFirebase = () => {

    const handleAdd = () => {

    
    const ref = collection(firestore, "test_data") // Firebase creates this automatically
 
    let data = {
        name: "Messi"
    }
    
    try {
        addDoc(ref, data)
        alert("oldu")
    } catch(err) {
        console.log(err)
    }
    }
    return(
        <button onClick={handleAdd}>ADD DATA</button>
    )
}
 
export default AddTempDataFirebase;
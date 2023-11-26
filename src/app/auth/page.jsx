"use client"
import { db } from "../../../firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
export default function Signin() {
  const router = useRouter()
  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      const user = auth.currentUser.providerData[0]
      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          username: user.displayName.split(" ").join("").toLocaleLowerCase(),
          userImg: user.photoURL,
          uid: user.uid,
          timestamp: serverTimestamp(),
        })
      }
      router.push("/")
    } catch (error) {
      if (error.code === 'auth/cancelled-popup-request') {
        // Handle cancelled popup request
        console.log('Popup request was cancelled by the user')
      } else {
        console.error('Google sign-in error:', error)
      }
    }
  }
  return (
    <div className=" flex justify-center mt-20 space-x-4">
      <img
        src="https://www.techbooky.com/wp-content/uploads/2021/07/4859E08D-388B-4475-9FCC-C05914CC654A.png"
        alt="twitter image inside a phone"
        className="hidden object-cover lg:inline"
        width='646'
        style={{ rotate: 12 }}

      />
      <div className="">
        <div className="flex flex-col items-center">
          <img
            className="w-36 object-cover"
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
            alt="twitter logo"
          />
          <p className="text-center text-sm italic my-10">
            This app is created for learning purposes
          </p>
          <button
            onClick={onGoogleClick}
            className="rounded-full p-3 hover:bg-gray-200">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}
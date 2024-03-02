import { useMemo, useState } from 'react'
import {RecoilRoot , useRecoilValue, useSetRecoilState} from 'recoil'
import { networkAtom , jobAtom, notificationAtom, messagingAtom, totalNotificationSelector} from './atoms'

function App() {
    return <RecoilRoot>
      <MainApp />
    </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  console.log(totalNotificationCount)

  // const totalNotificationCount = useMemo(() => {
  //   return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount
  // } , [ networkNotificationCount , jobsAtomCount , notificationAtomCount , messagingAtomCount])

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
      {/* <ButtonUpdater /> */}
    </>
  )
} 

// function ButtonUpdater() {
//     const setMessagingAtomCount = useSetRecoilState(messagingAtom)
//     return <button onClick={() => {
//       setMessagingAtomCount(c => c + 1);
//     }}> Me </button>
// }

export default App

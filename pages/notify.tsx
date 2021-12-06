export const getOnesignalId = async () => {
  if (window.OneSignal) {
    const userId = await window.OneSignal.getUserId()
    console.log(userId)

    return userId
  } else {
    return null
  }
}

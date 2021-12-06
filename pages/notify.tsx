export const getOnesignalId = async () => {
  if (window.OneSignal) {
    const userId = await window.OneSignal.getUserId()
    return userId
  } else {
    return null
  }
}

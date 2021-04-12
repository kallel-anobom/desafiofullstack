import React, { useEffect, useState } from 'react'
import Snackbar from 'my-react-snackbar'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectSnackbarMessage,
  selectSnackbarType,
  selectSnackbarClassName,
  clearNotification
} from 'slices/snackbarSlice'

const TIME_OUT_MILLISECONDS = 8000

const ConfiguredSnackbar = () => {
  const dispatch = useDispatch()
  const receivedMessage = useSelector(selectSnackbarMessage)
  const type = useSelector(selectSnackbarType)
  const className = useSelector(selectSnackbarClassName)
  const [notifications, setNotifications] = useState([])

  const config = {
    position: 'top-right'
  }
  useEffect(() => {
    if (receivedMessage) {
      const snackbar = (
        <Snackbar
          {...config}
          className={className}
          key={notifications.length + 'snackbar'}
          containerStyle={{
            height: 'auto',
            width: 'auto',
            maxWidth: '600px',
            padding: '10px',
            paddingRight: '20px'
          }}
          message={receivedMessage}
          timeout={TIME_OUT_MILLISECONDS}
          type={type}
          open={true}
        />
      )
      setNotifications([...notifications, snackbar])
      dispatch(clearNotification())
    }
    // eslint-disable-next-line
  }, [receivedMessage])

  return <>{[...notifications]}</>
}

export default ConfiguredSnackbar

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import style from './Profile.module.css'

const ProfileStatus = (props) => {
  let [statusEditMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => setStatus(props.status), [props.status])
  const activateEditMode = () => {
    setEditMode(true)
  }
  
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  return(
      <div>
        {statusEditMode 
          ? <input autoFocus={true} onBlur={() => deactivateEditMode()} value={status} onChange={(e) => onStatusChange(e)}/>
          : <span onDoubleClick={() => activateEditMode()}>{
            props.status ? props.status : <p className={style.noStatus}>Set status</p>}</span>
          }
      </div>
  )
}
  
export default ProfileStatus
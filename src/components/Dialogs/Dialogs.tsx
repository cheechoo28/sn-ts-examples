import React from 'react';
import s from './Dialogs.module.css'

export type DialogsType = {
    message: string
}
export function Dialogs() {
    return (
        <div>
            Dialogs
            <button>+</button>
        </div>
    )
}